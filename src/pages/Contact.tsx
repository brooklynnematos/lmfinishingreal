// File: src/pages/Contact.tsx
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import SEOHead from '../components/SEOHead';

const hcaptchaFixCss = `
  /* why: prevent mobile overlay from sitting under headers/modals */
  .h-captcha iframe { z-index: 999999 !important; }
  .h-captcha { max-width: 100%; }
`;

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const hcaptchaRef = useRef<HCaptcha>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaLoaded, setCaptchaLoaded] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string; }>({
    type: null,
    message: ''
  });

  const validateClientSide = (): { ok: boolean; msg?: string; focus?: HTMLElement | null } => {
    if (!formRef.current) return { ok: false, msg: 'Form not ready.' };

    const fd = new FormData(formRef.current);
    const name = (fd.get('name') as string) || '';
    const email = (fd.get('email') as string) || '';
    const details = (fd.get('details') as string) || '';

    const spamPatterns = [
      /viagra|cialis|pharmacy/i,
      /loan|credit|debt|mortgage/i,
      /seo|marketing|website|traffic/i,
      /bitcoin|crypto|investment/i,
      /dating|singles|hookup/i
    ];
    const hasSpam = spamPatterns.some(p => p.test(name) || p.test(email) || p.test(details));
    if (hasSpam) {
      setSubmitStatus({ type: 'success', message: 'Thank you! We will get back to you soon.' });
      return { ok: false };
    }

    if (details.length < 20) {
      return { ok: false, msg: 'Please provide more details about your project (minimum 20 characters).', focus: formRef.current.querySelector('#details') };
    }

    const emailInput = formRef.current.querySelector('input[name="email"]') as HTMLInputElement | null;
    const emailVal = emailInput?.value || '';
    const emailRx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRx.test(emailVal)) {
      return { ok: false, msg: 'Please enter a valid email address. Example: your.email@example.com', focus: emailInput };
    }

    const phoneInput = formRef.current.querySelector('input[name="phone"]') as HTMLInputElement | null;
    const digitsOnly = (phoneInput?.value || '').replace(/[^\d+]/g, '');
    const isValidPhone = /^(\+?1)?[0-9]{10}$/.test(digitsOnly);
    if (!isValidPhone) {
      return {
        ok: false,
        msg: 'Please enter a valid 10-digit US phone number. Examples: (555) 123-4567, 555-123-4567, or 5551234567',
        focus: phoneInput
      };
    }

    const honeypot = formRef.current.querySelector('input[name="website"]') as HTMLInputElement | null;
    if (honeypot && honeypot.value) {
      setSubmitStatus({ type: 'success', message: 'Thank you! We will get back to you soon.' });
      return { ok: false };
    }

    return { ok: true };
  };

  const submitWithToken = async (token: string) => {
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Server verification first
      const verifyResponse = await fetch('/.netlify/functions/verify-hcaptcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
      });
      const verifyData = await verifyResponse.json();
      if (!verifyResponse.ok || !verifyData.success) throw new Error('hCaptcha verification failed');

      // Send email after verification
      await emailjs.sendForm(
        'service_tn8jn2l',
        'template_eld62cq',
        formRef.current,
        'cBCcCtgOHyewXyCDU'
      );

      setSubmitStatus({ type: 'success', message: 'Thank you! We will get back to you soon.' });
      formRef.current.reset();
      setCaptchaToken(null);
      hcaptchaRef.current?.resetCaptcha();
    } catch (err) {
      const isCaptchaError = err instanceof Error && err.message === 'hCaptcha verification failed';
      setSubmitStatus({
        type: 'error',
        message: isCaptchaError ? 'hCaptcha verification failed. Please try again.' : 'Sorry, something went wrong. Please try again later.'
      });
      // why: ensure user can retry captcha immediately
      setCaptchaToken(null);
      hcaptchaRef.current?.resetCaptcha();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const v = validateClientSide();
    if (!v.ok) {
      if (v.msg) setSubmitStatus({ type: 'error', message: v.msg });
      v.focus?.focus();
      return;
    }

    if (!captchaLoaded) {
      setSubmitStatus({ type: 'error', message: 'Captcha is still loading. Please wait a moment and try again.' });
      return;
    }

    if (!captchaToken) {
      // why: on mobile, explicitly trigger the invisible challenge
      hcaptchaRef.current?.execute();
      return;
    }

    await submitWithToken(captchaToken);
  };

  // Structured data for SEO (unchanged)
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "LM Finishing & Construction",
      "telephone": "+1-385-500-8437",
      "email": "office@lmfinishing.com",
      "url": "https://lmfinishingandconstruction.com",
      "address": { "@type": "PostalAddress", "addressRegion": "Utah", "addressCountry": "US" },
      "openingHours": "Mo-Fr 08:00-17:00",
      "serviceArea": ["Utah County, UT","Salt Lake County, UT","Davis County, UT","Wasatch County, UT","Summit County, UT"]
    }
  };

  return (
    <div className="w-full">
      {/* IMPORTANT: remove transforms & overflow-hidden around the captcha */}
      <style dangerouslySetInnerHTML={{ __html: hcaptchaFixCss }} />

      <SEOHead
        title="Contact Utah's Premier Finish Carpenter - Free Estimates"
        description="Contact LM Finishing & Construction for your free estimate. Utah's trusted finish carpenter and custom remodeling contractor serving Utah County, Salt Lake County, and surrounding areas. Call (385) 500-8437 for basement finishing, custom carpentry, and home renovations."
        canonicalUrl="https://lmfinishingandconstruction.com/contact"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      {/* Hero Section (unchanged) */}
      <section className="relative py-24 bg-[#213555]" aria-label="Contact Utah's Premier Finish Carpenter">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#213555] bg-opacity-85"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-bold text-white mb-8">
              Contact Utah's Premier Finish Carpenter
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-2xl text-white max-w-3xl mx-auto">
              Get your free estimate for custom carpentry, basement finishing, and home renovations throughout Utah County, Salt Lake County, and surrounding areas.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#213555] mb-6">Get Your Free Utah Remodeling Estimate</h2>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" aria-label="Utah contractor contact form">
                {/* Honeypot */}
                <div className="hidden">
                  <label htmlFor="website">Website</label>
                  <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#213555] focus:border-[#213555]" required aria-required="true" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#213555] focus:border-[#213555]" required aria-required="true" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="^(\+?1[-.\s]?)?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$"
                    title="Please enter a valid 10-digit US phone number. Examples: (555) 123-4567, 555-123-4567, or 5551234567"
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#213555] focus:border-[#213555]"
                    required
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Interested In *</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#213555] focus:border-[#213555]"
                    required
                    aria-required="true"
                  >
                    <option value="">Select a service</option>
                    <option value="Basement Finishing">Basement Finishing</option>
                    <option value="Custom Carpentry">Custom Carpentry</option>
                    <option value="Home Renovations">Home Renovations</option>
                    <option value="Exterior Services">Exterior Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    placeholder="Please describe your Utah remodeling project, including location, timeline, and any specific requirements..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#213555] focus:border-[#213555]"
                    required
                    aria-required="true"
                  />
                </div>

                {/* IMPORTANT: removed overflow-hidden to avoid clipping the challenge on mobile */}
                <div className="flex justify-center mb-4 w-full">
                  {!captchaLoaded && (
                    <div className="text-center text-gray-600 mb-4">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#213555] mx-auto mb-2"></div>
                      Loading security verification...
                    </div>
                  )}

                  <HCaptcha
                    ref={hcaptchaRef}
                    sitekey={import.meta.env.VITE_HCAPTCHA_SITE_KEY}
                    theme="light"
                    size="invisible"
                    // React component uses "tabindex" prop; leave off or keep as number if needed
                    onLoad={() => {
                      setCaptchaLoaded(true);
                    }}
                    onVerify={(token) => {
                      setCaptchaToken(token);
                      // continue flow immediately after verification
                      void submitWithToken(token);
                    }}
                    onExpire={() => {
                      setCaptchaToken(null);
                      hcaptchaRef.current?.resetCaptcha();
                    }}
                    onError={() => {
                      setSubmitStatus({ type: 'error', message: 'Captcha failed to load. Please refresh the page and try again.' });
                      setCaptchaToken(null);
                      hcaptchaRef.current?.resetCaptcha();
                    }}
                    onOpen={() => {
                      // optional: lock scroll while challenge is open
                      document.body.style.overflow = 'hidden';
                    }}
                    onClose={() => {
                      document.body.style.overflow = '';
                    }}
                  />
                </div>

                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-md ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
                    role="alert"
                    aria-live="polite"
                  >
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#213555] text-white px-6 py-3 rounded-md text-lg font-medium transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#182943]'}`}
                  aria-disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Get Free Utah Estimate'}
                </button>
              </form>
            </motion.div>

            {/* Contact Information (unchanged) */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#213555] mb-6">Utah Contractor Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-[#4A90E2] mt-1" aria-hidden="true" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-[#213555]">Call Our Utah Office</h3>
                      <a href="tel:+13855008437" className="text-[#4A90E2] hover:underline font-medium" aria-label="Call Utah finish carpenter at (385) 500-8437">
                        (385) 500-8437
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Utah County & Salt Lake County</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-[#4A90E2] mt-1" aria-hidden="true" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-[#213555]">Email Our Utah Team</h3>
                      <a href="mailto:office@lmfinishing.com" className="text-[#4A90E2] hover:underline font-medium" aria-label="Email Utah finish carpenter at office@lmfinishing.com">
                        office@lmfinishing.com
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Fast response for Utah projects</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-[#4A90E2] mt-1" aria-hidden="true" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-[#213555]">Utah Business Hours</h3>
                      <p className="text-gray-700">
                        <time>Monday - Friday: 8:00 AM - 5:00 PM</time><br />
                        <time>Saturday - Sunday: Closed</time>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Area Summary (unchanged) */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-[#213555] mb-4">Utah Service Areas</h3>
                <p className="text-gray-700 mb-4">
                  Our Utah finish carpentry team proudly serves homeowners and general contractors throughout Northern Utah:
                </p>
                <ul className="space-y-2 text-gray-700" role="list">
                  {[
                    'Utah County (Provo, Orem, Lehi, American Fork, Saratoga Springs)',
                    'Salt Lake County (Salt Lake City, Sandy, Draper, West Valley City)',
                    'Davis County (Layton, Bountiful, Farmington)',
                    'Wasatch County (Heber City, Midway)',
                    'Summit County (Park City, Coalville)'
                  ].map((area, i) => (
                    <li key={i} className="flex items-start" role="listitem">
                      <span className="w-2 h-2 bg-[#213555] rounded-full mr-3 mt-2 flex-shrink-0" aria-hidden="true"></span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Remaining sections (unchanged) */}
      <section className="py-20" aria-labelledby="response-times-heading">
        {/* ... your existing content ... */}
      </section>

      <section className="py-20 bg-gray-50" aria-labelledby="contact-methods-heading">
        {/* ... your existing content ... */}
      </section>
    </div>
  );
};

export default Contact;
