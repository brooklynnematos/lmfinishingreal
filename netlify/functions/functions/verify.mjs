import { getStore } from "@netlify/blobs";
export default async (req) => {
  try {
    const url = new URL(req.url);
    const token = url.searchParams.get("token");
    if (!token) return new Response("Missing token", { status: 400 });

    const store = getStore("lead-pending");
    const rec = await store.getJSON(token);
    if (!rec) return new Response("Invalid or expired", { status: 410 });
    if ((Date.now() - rec.ts) > 48*60*60*1000) return new Response("Expired", { status: 410 });

    if (process.env.CRM_WEBHOOK_URL) {
      await fetch(process.env.CRM_WEBHOOK_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(rec.payload)
      });
    }
    await store.delete(token);
    return new Response("Confirmed. Thanks!", { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response("Error", { status: 500 });
  }
}