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
  
    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      setSubmitStatus({
        type: 'error',
        message: 'Please complete the reCAPTCHA verification.'
      });
      return;
    }
  
    // ✅ Verify reCAPTCHA via Netlify serverless function
    try {
      const verifyResponse = await fetch('/.netlify/functions/verify-recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: recaptchaValue }),
      });
  
      const verifyResult = await verifyResponse.json();
  
      if (!verifyResult.success) {
        setSubmitStatus({
          type: 'error',
          message: 'reCAPTCHA verification failed. Please try again.',
        });
        return;
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Could not verify reCAPTCHA. Please try again.',
      });
      return;
    }
  
    // ✅ Continue with form submission
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
  
    try {
      await emailjs.sendForm(
        'service_tn8jn2l',
        'template_eld62cq',
        formRef.current,
        'cBCcCtgOHyewXyCDU'
      );
  
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! We will get back to you soon.',
      });
      formRef.current.reset();
      recaptchaRef.current?.reset();
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };  

  return (
    <div className="w-full">
      <SEOHead
        title="Contact Us"
        description="Get in touch with Utah's premier home renovation experts. Free estimates for basement finishing, custom carpentry, and home renovations in Utah County, Salt Lake County, and surrounding areas."
        canonicalUrl="https://lmfinishingandconstruction.com/contact"
      />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-[#213555]"
        aria-label="Contact Information"
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
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-white max-w-3xl mx-auto"
            >
              Get in touch with us to start your renovation journey.
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
              <h2 className="text-2xl font-bold text-[#213555] mb-6">Get Your Free Estimate</h2>
              <form 
                ref={formRef} 
                onSubmit={handleSubmit} 
                className="space-y-6"
                aria-label="Contact form"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
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
                    Email Address
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
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#213555] focus:border-[#213555]"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#213555] focus:border-[#213555]"
                    required
                    aria-required="true"
                  >
                    <option value="">Select a service</option>
                    <option value="Basement Finishing">Basement Finishing</option>
                    <option value="Home Renovations">Home Renovations</option>
                    <option value="Custom Carpentry">Custom Carpentry</option>
                    <option value="Exterior Services">Exterior Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#213555] focus:border-[#213555]"
                    required
                    aria-required="true"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                    theme="light"
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
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
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
                <h2 className="text-2xl font-bold text-[#213555] mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-[#4A90E2] mt-1" aria-hidden="true" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-[#213555]">Phone</h3>
                      <a 
                        href="tel:+13855008437" 
                        className="text-[#4A90E2] hover:underline font-medium"
                        aria-label="Call us at (385) 500-8437"
                      >
                        (385) 500-8437
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-[#4A90E2] mt-1" aria-hidden="true" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-[#213555]">Email</h3>
                      <a 
                        href="mailto:leomatos.construction@gmail.com"
                        className="text-[#4A90E2] hover:underline font-medium"
                        aria-label="Email us at leomatos.construction@gmail.com"
                      >
                        leomatos.construction@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-[#4A90E2] mt-1" aria-hidden="true" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-[#213555]">Business Hours</h3>
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
                <h3 className="text-xl font-bold text-[#213555] mb-4">Service Areas</h3>
                <p className="text-gray-700 mb-4">
                  We proudly serve the following counties in Utah:
                </p>
                <ul className="space-y-2 text-gray-700" role="list">
                  {[
                    'Utah County',
                    'Salt Lake County',
                    'Davis County',
                    'Wasatch County',
                    'Summit County'
                  ].map((county, index) => (
                    <li key={index} className="flex items-center" role="listitem">
                      <span className="w-2 h-2 bg-[#213555] rounded-full mr-2" aria-hidden="true"></span>
                      {county}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;