import crypto from "node:crypto";
import { getStore } from "@netlify/blobs";

const DISPOSABLE = new Set([
  "mailinator.com","guerrillamail.com","tempmail.com","yopmail.com","10minutemail.com",
  "getnada.com","trashmail.com","sharklasers.com","fakeinbox.com","mintemail.com"
]);

const KEYWORDS = [/viagra/i, /seo\s*services?/i, /guest\s*post/i, /crypto/i, /loan/i, /porn/i];

export const handler = async (event) => {
  try {
    const parsed = JSON.parse(event.body || "{}");
    const payload = parsed.payload || {};
    const { id: submissionId, created_at } = payload;
    const data = payload.data || {};

    if (truthy(data.trap)) return markSpam(submissionId, "honeypot");
    if (data.formStart && isFast(created_at, data.formStart)) return markSpam(submissionId, "too-fast");
    if (!isValidEmail(data.email)) return markSpam(submissionId, "invalid-email");
    if (isDisposable(data.email)) return markSpam(submissionId, "disposable-email");

    const blob = [data.name, data.message, data.company].filter(Boolean).join(" ");
    if (linkCount(blob) > 1) return markSpam(submissionId, "too-many-links");
    if (KEYWORDS.some(rx => rx.test(blob))) return markSpam(submissionId, "keyword");

    if (await isDuplicate(payload)) return markSpam(submissionId, "duplicate-24h");

    if (process.env.SENDGRID_API_KEY && process.env.FROM_EMAIL && process.env.SITE_URL) {
      await sendVerificationEmail(payload);
      return ok("queued-verification");
    }

    if (process.env.CRM_WEBHOOK_URL) {
      await fetch(process.env.CRM_WEBHOOK_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload)
      });
    }
    return ok("accepted");
  } catch (e) {
    console.error("submission-created error", e);
    return ok("error");
  }
};

function truthy(v){ return v !== undefined && v !== null && String(v).trim() !== ""; }
function isValidEmail(e){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e || ""); }
function isDisposable(e){ return DISPOSABLE.has(String(e).split("@").pop().toLowerCase()); }
function linkCount(t){ const s = String(t||""); return (s.match(/https?:\/\//gi)||[]).length + (s.match(/\bwww\./gi)||[]).length; }
function isFast(createdISO, startMs){
  const submitted = Date.parse(createdISO);
  const started = Number(startMs);
  if (Number.isNaN(submitted) || Number.isNaN(started)) return false;
  return (submitted - started) < 4000;
}
function ok(msg){ return { statusCode: 200, body: msg }; }

async function isDuplicate(payload){
  const store = getStore("lead-dedup");
  const key = hashKey(payload);
  const existing = await store.getJSON(key);
  const now = Date.now();
  if (existing && (now - existing.ts) < 24*60*60*1000) return true;
  await store.setJSON(key, { ts: now });
  return false;
}
function hashKey(payload){
  const d = payload?.data || {};
  const basis = `${(d.email||"").toLowerCase()}|${String(d.message||"").replace(/\s+/g," ").slice(0,512)}`;
  return crypto.createHash("sha256").update(basis).digest("hex");
}

async function markSpam(submissionId, reason){
  console.log("spam", reason);
  if (process.env.NETLIFY_API_TOKEN && submissionId) {
    await fetch(`https://api.netlify.com/api/v1/submissions/${submissionId}/spam`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${process.env.NETLIFY_API_TOKEN}` }
    });
  }
  return ok(`spam:${reason}`);
}

async function sendVerificationEmail(payload){
  const to = payload?.data?.email;
  if (!to) return;
  const token = crypto.randomBytes(16).toString("hex");
  const store = getStore("lead-pending");
  await store.setJSON(token, { token, payload, ts: Date.now() });
  const verifyUrl = `${process.env.SITE_URL}/.netlify/functions/verify?token=${token}`;

  // Why: double opt-in blocks spoofed emails.
  const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`, "content-type": "application/json" },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: to }] }],
      from: { email: process.env.FROM_EMAIL },
      subject: "Confirm your request",
      content: [{ type: "text/plain", value: `Please confirm: ${verifyUrl}` }]
    })
  });
  if (!res.ok) console.error("sendgrid", await res.text());
}