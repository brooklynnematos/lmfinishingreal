import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Mail, Phone, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const inquiryTypes = [
    'Career Opportunities',
    'Subcontractor/Partnership',
    'Estimating Services',
    'Marketing Services',
    'Supplier/Vendor',
    'Other Professional Services',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/.netlify/functions/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'careers',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiryType: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <SEOHead
        title="Careers & Professional Services - Join Our Team"
        description="Explore career opportunities and professional service partnerships. We're always looking for talented individuals and service providers to join our team."
        canonicalUrl="https://lmfinishingandconstruction.com/careers"
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-[#213555]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#213555] bg-opacity-85"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6"
            >
              <Briefcase className="h-10 w-10 text-[#213555]" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Careers & Professional Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white max-w-3xl mx-auto"
            >
              Join our team or explore partnership opportunities. We're always looking for talented professionals and service providers.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#213555] mb-4">
              Opportunities We're Looking For
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Whether you're seeking employment, partnership opportunities, or want to offer professional services, we'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Career Opportunities',
                description: 'Join our team of skilled craftsmen and construction professionals.',
                items: ['Finish Carpenters', 'Project Managers', 'Construction Laborers', 'Skilled Tradespeople'],
              },
              {
                title: 'Subcontractor Partnerships',
                description: 'Partner with us on residential construction and remodeling projects.',
                items: ['Licensed Contractors', 'Specialty Trade Partners', 'Reliable Teams', 'Quality-Focused Professionals'],
              },
              {
                title: 'Professional Services',
                description: 'Offer your professional services to support our growing business.',
                items: ['Estimating Services', 'Marketing & Design', 'Accounting & Bookkeeping', 'Business Development'],
              },
            ].map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-100 hover:border-[#213555] transition-colors"
              >
                <h3 className="text-xl font-bold text-[#213555] mb-4">{opportunity.title}</h3>
                <p className="text-gray-700 mb-6">{opportunity.description}</p>
                <ul className="space-y-2">
                  {opportunity.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-700">
                      <CheckCircle className="h-5 w-5 text-[#213555] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#213555] mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <div className="inline-flex items-center justify-center bg-white px-6 py-4 rounded-lg shadow-md border-2 border-[#213555]">
              <Mail className="h-5 w-5 text-[#213555] mr-3" />
              <div className="text-left">
                <p className="text-sm text-gray-600 font-medium">Or email us directly:</p>
                <a
                  href="mailto:careers.lmfinishing@gmail.com"
                  className="text-[#213555] font-semibold hover:text-[#182943] transition-colors"
                >
                  careers.lmfinishing@gmail.com
                </a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-green-800 font-semibold">Thank you for your inquiry!</p>
                  <p className="text-green-700 text-sm mt-1">We'll review your information and get back to you soon.</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
                <AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-red-800 font-semibold">Oops! Something went wrong.</p>
                  <p className="text-red-700 text-sm mt-1">Please try again or contact us directly.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#213555] focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#213555] focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#213555] focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Inquiry *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#213555] focus:border-transparent"
                >
                  <option value="">Select an option...</option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message / Details *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#213555] focus:border-transparent"
                    placeholder="Tell us about your experience, services you offer, or what you're looking for..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#213555] text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-[#182943] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#213555] mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We're committed to building a team of professionals who share our values of quality craftsmanship and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Growth Opportunities',
                description: 'We invest in our team members and partners with training and development opportunities.',
              },
              {
                title: 'Quality Focus',
                description: 'We take pride in our work and partner with those who share our commitment to excellence.',
              },
              {
                title: 'Professional Environment',
                description: 'Work with a team that values professionalism, safety, and respect.',
              },
              {
                title: 'Competitive Compensation',
                description: 'We offer competitive rates and terms for employment and partnership opportunities.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <h3 className="text-lg font-semibold text-[#213555] mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
