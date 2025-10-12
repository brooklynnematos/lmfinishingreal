import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import SEOHead from '../components/SEOHead';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Check honeypot field
    const honeypotField = formRef.current.querySelector('input[name="website"]') as HTMLInputElement;
    if (honeypotField && honeypotField.value) {
      // Silently reject bot submissions
      console.log('Bot submission detected');
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! We will get back to you soon.'
      });
      return;
    }

    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      setSubmitStatus({
        type: 'error',
        message: 'Please complete the reCAPTCHA verification.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Verify reCAPTCHA first
      const verifyResponse = await fetch('/.netlify/functions/verify-recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: recaptchaValue }),
      });

      const verifyData = await verifyResponse.json();
      console.log('Verification response:', verifyData);

      if (!verifyResponse.ok || !verifyData.success) {
        throw new Error('reCAPTCHA verification failed');
      }

      // If verification successful, send email
      await emailjs.sendForm(
        'service_tn8jn2l',
        'template_eld62cq',
        formRef.current,
        'cBCcCtgOHyewXyCDU'
      );

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! We will get back to you soon.'
      });
      formRef.current.reset();
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error && error.message === 'reCAPTCHA verification failed'
          ? 'reCAPTCHA verification failed. Please try again.'
          : 'Sorry, something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Schema markup for contact page
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "LM Finishing & Construction",
      "telephone": "+1-385-500-8437",
      "email": "office@lmfinishing.com",
      "url": "https://lmfinishingandconstruction.com",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Utah",
        "addressCountry": "US"
      },
      "openingHours": "Mo-Fr 08:00-17:00",
      "serviceArea": [
        "Utah County, UT",
        "Salt Lake County, UT",
        "Davis County, UT", 
        "Wasatch County, UT",
        "Summit County, UT"
      ]
    }
  };

  return (
    <div className="w-full">
      <SEOHead
        title="Contact Utah's Premier Finish Carpenter - Free Estimates"
        description="Contact LM Finishing & Construction for your free estimate. Utah's trusted finish carpenter and custom remodeling contractor serving Utah County, Salt Lake County, and surrounding areas. Call (385) 500-8437 for basement finishing, custom carpentry, and home renovations."
        canonicalUrl="https://lmfinishingandconstruction.com/contact"
      />
      
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-[#213555]"
        aria-label="Contact Utah's Premier Finish Carpenter"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#213555] bg-opacity-85"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-8"
            >
              Contact Utah's Premier Finish Carpenter
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-white max-w-3xl mx-auto"
            >
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
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-[#213555] mb-6">Get Your Free Utah Remodeling Estimate</h2>
              <form 
                ref={formRef} 
                onSubmit={handleSubmit} 
                className="space-y-6"
                aria-label="Utah contractor contact form"
              >
                {/* Honeypot field - hidden from users but visible to bots */}
                <div className="hidden">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#213555] focus:border-[#213555]"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#213555] focus:border-[#213555]"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                   pattern="^(\+?1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$"
                   title="Please enter a valid 10-digit US phone number (e.g., (555) 123-4567 or 555-123-4567)"
                   placeholder="(555) 123-4567"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#213555] focus:border-[#213555]"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#213555] focus:border-[#213555]"
                   pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                   title="Please enter a valid email address (e.g., name@example.com)"
                   placeholder="your.email@example.com"
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
                  <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    placeholder="Please describe your Utah remodeling project, including location, timeline, and any specific requirements..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#213555] focus:border-[#213555]"
                    required
                    aria-required="true"
                  ></textarea>
                </div>
                <div className="flex justify-center mb-4">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                    theme="light" 
                    size="normal"
                    callback={(token) => {
                      // Optional: Handle successful completion
                      console.log('reCAPTCHA completed');
                    }}
                    onExpired={() => {
                      // Reset when expired
                      recaptchaRef.current?.reset();
                    }}
                    onError={() => {
                      // Handle errors
                      console.log('reCAPTCHA error');
                    }}
                  />
                </div>
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-md ${
                      submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                    }`}
                    role="alert"
                    aria-live="polite"
                  >
                    {submitStatus.message}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#213555] text-white px-6 py-3 rounded-md text-lg font-medium transition-colors ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#182943]'
                  }`}
                  aria-disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Get Free Utah Estimate'}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-[#213555] mb-6">Utah Contractor Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-[#4A90E2] mt-1" aria-hidden="true" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-[#213555]">Call Our Utah Office</h3>
                      <a 
                        href="tel:+13855008437" 
                        className="text-[#4A90E2] hover:underline font-medium"
                        aria-label="Call Utah finish carpenter at (385) 500-8437"
                      >
                        (385) 500-8437
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Utah County & Salt Lake County</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-[#4A90E2] mt-1" aria-hidden="true" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-[#213555]">Email Our Utah Team</h3>
                      <a 
                        href="mailto:office@lmfinishing.com"
                        className="text-[#4A90E2] hover:underline font-medium"
                        aria-label="Email Utah finish carpenter at office@lmfinishing.com"
                      >
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

              {/* Service Area Summary */}
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
                  ].map((area, index) => (
                    <li key={index} className="flex items-start" role="listitem">
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

      {/* Emergency Services & Response Times */}
      <section className="py-20" aria-labelledby="response-times-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="response-times-heading" className="text-3xl font-bold text-[#213555] mb-4">
              Fast Response Across Utah
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Quick response times and emergency services for Utah homeowners and contractors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                area: "Utah County",
                cities: "Provo, Orem, Lehi, American Fork",
                response: "Same Day Response",
                icon: "⚡"
              },
              {
                area: "Salt Lake County", 
                cities: "Salt Lake City, Sandy, Draper, West Valley",
                response: "24-Hour Response",
                icon: "🚀"
              },
              {
                area: "Davis County",
                cities: "Layton, Bountiful, Farmington, Kaysville", 
                response: "24-Hour Response",
                icon: "⏰"
              },
              {
                area: "Wasatch & Summit",
                cities: "Heber City, Park City, Midway, Coalville",
                response: "48-Hour Response", 
                icon: "🏔️"
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4" aria-hidden="true">{area.icon}</div>
                <h3 className="text-xl font-semibold text-[#213555] mb-2">{area.area}</h3>
                <p className="text-sm text-gray-600 mb-3">{area.cities}</p>
                <div className="bg-[#213555] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {area.response}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods by Project Type */}
      <section className="py-20 bg-gray-50" aria-labelledby="contact-methods-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="contact-methods-heading" className="text-3xl font-bold text-[#213555] mb-4">
              Best Ways to Reach Us by Project Type
            </h2>
            <p className="text-lg text-gray-700">
              Choose the best contact method based on your Utah construction project needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Emergency Repairs & Urgent Projects",
                description: "Water damage, structural issues, or time-sensitive repairs",
                method: "Call Immediately",
                contact: "(385) 500-8437",
                icon: "🚨"
              },
              {
                title: "Basement Finishing Consultations", 
                description: "Free estimates for Utah basement finishing projects",
                method: "Schedule Online or Call",
                contact: "Form submission or phone",
                icon: "🏠"
              },
              {
                title: "Custom Carpentry Quotes",
                description: "Built-ins, trim work, and custom millwork projects",
                method: "Email with Photos",
                contact: "office@lmfinishing.com",
                icon: "🔨"
              },
              {
                title: "General Contractor Partnerships",
                description: "Subcontracting opportunities and bulk projects",
                method: "Direct Phone Contact",
                contact: "(385) 500-8437",
                icon: "🤝"
              }
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-start mb-4">
                  <div className="text-3xl mr-4" aria-hidden="true">{method.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#213555] mb-2">{method.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <div className="font-semibold text-[#213555] mb-1">{method.method}</div>
                  <div className="text-gray-700">{method.contact}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;