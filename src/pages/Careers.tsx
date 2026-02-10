import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Mail, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Careers = () => {

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

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-[#213555] mb-4">
              Ready to Join Our Team?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              We're always interested in connecting with talented professionals and service providers. Send us your information and we'll get back to you.
            </p>

            <div className="bg-white p-12 rounded-lg shadow-xl border-2 border-[#213555] max-w-xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-[#213555] rounded-full flex items-center justify-center">
                  <Mail className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#213555] mb-4">
                Get In Touch
              </h3>
              <p className="text-gray-700 mb-6">
                Email us your resume, portfolio, or information about your services:
              </p>
              <a
                href="mailto:careers.lmfinishing@gmail.com"
                className="inline-block bg-[#213555] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#182943] transition-colors"
              >
                careers.lmfinishing@gmail.com
              </a>
            </div>
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
