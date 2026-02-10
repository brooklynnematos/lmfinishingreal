import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Phone, Mail, Clock, DollarSign, Award, Users, Shield, Home } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const HomeRenovations = () => {
  const renovationTypes = [
    "Kitchen remodeling and upgrades",
    "Bathroom renovations and additions",
    "Living room and family room makeovers",
    "Master bedroom suite renovations",
    "Home office and study conversions",
    "Open floor plan modifications",
    "Whole house renovations",
    "Room additions and expansions"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Vision & Planning",
      description: "We work with you to understand your goals, assess your space, and create a comprehensive renovation plan."
    },
    {
      step: "2",
      title: "Design & Permits",
      description: "Detailed design development and permit acquisition to ensure your renovation meets all local requirements."
    },
    {
      step: "3",
      title: "Construction Phase",
      description: "Expert construction using proven systems, with regular updates and quality control throughout the process."
    },
    {
      step: "4",
      title: "Final Details & Completion",
      description: "Finishing touches, final inspection, and walkthrough to ensure your renovation exceeds expectations."
    }
  ];

  const renovationRanges = [
    { type: "Kitchen Remodel", range: "$25,000 - $75,000", description: "Complete kitchen renovation with cabinets, countertops, and appliances" },
    { type: "Bathroom Renovation", range: "$15,000 - $45,000", description: "Full bathroom remodel including fixtures, tile, and vanities" },
    { type: "Living Room Makeover", range: "$10,000 - $35,000", description: "Flooring, lighting, built-ins, and architectural details" },
    { type: "Whole House Renovation", range: "$75,000 - $200,000+", description: "Complete home transformation including all major systems" }
  ];

  const benefits = [
    {
      icon: <Home className="h-8 w-8 text-green-600" />,
      title: "Complete Solutions",
      description: "Full-service renovations from design through completion"
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "Proven Systems",
      description: "Renovation processes refined through years of custom home experience"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Licensed & Insured",
      description: "Fully licensed contractors with comprehensive project protection"
    }
  ];

  return (
    <div className="w-full">
      <SEOHead
        title="Home Renovation Contractor - Kitchen, Bathroom & Whole House Remodeling"
        description="Expert home renovation contractor with proven systems. Kitchen remodeling, bathroom renovations, and complete home makeovers. Licensed, insured, professional results."
        canonicalUrl="https://lmfinishingandconstruction.com/home-renovations"
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-900 to-green-700">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Transform Your Home With Expert Renovations
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-green-100 mb-8"
              >
                Complete home renovation services with proven systems and expert craftsmanship. From kitchen remodels to whole house makeovers, we bring your vision to life.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contact"
                  className="bg-white text-green-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-green-50 transition-colors flex items-center justify-center"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13855008437"
                  className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-green-900 transition-colors flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (385) 500-8437
                </a>
              </motion.div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136"
                alt="Beautiful home renovation kitchen"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Renovation Team</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Comprehensive renovation services with the expertise and systems to deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Renovation Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Home Renovation Services</h2>
              <p className="text-lg text-gray-700 mb-8">
                Whether you're updating a single room or transforming your entire home, our renovation team has the experience and systems to deliver outstanding results.
              </p>
              <ul className="space-y-4">
                {renovationTypes.map((type, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14"
                alt="Luxury bathroom renovation"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Renovation Process</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A systematic approach that ensures your renovation stays on schedule and within budget
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Renovation Investment Ranges</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Transparent pricing for different types of renovation projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {renovationRanges.map((renovation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{renovation.type}</h3>
                <div className="text-2xl font-bold text-green-600 mb-3">{renovation.range}</div>
                <p className="text-gray-600">{renovation.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 bg-green-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-green-900 mb-4">What's Included in Our Renovations:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-center text-green-800">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Detailed project planning and design
                </li>
                <li className="flex items-center text-green-800">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  All permits and inspections
                </li>
                <li className="flex items-center text-green-800">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Quality materials and finishes
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center text-green-800">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Expert installation and craftsmanship
                </li>
                <li className="flex items-center text-green-800">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Complete cleanup and debris removal
                </li>
                <li className="flex items-center text-green-800">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  1-year warranty on workmanship
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Return on Investment</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Quality renovations add significant value to your home
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">70-85%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kitchen Remodels</h3>
              <p className="text-gray-600">Average return on investment for quality kitchen renovations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">60-75%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bathroom Renovations</h3>
              <p className="text-gray-600">Strong returns for bathroom upgrades and additions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50-70%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Whole House</h3>
              <p className="text-gray-600">Comprehensive renovations that transform your home's value</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your renovation vision and get your detailed estimate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-green-50 transition-colors inline-flex items-center justify-center"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+13855008437"
              className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (385) 500-8437
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeRenovations;