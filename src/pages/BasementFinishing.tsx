import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Phone, Mail, Clock, DollarSign, Award, Users, Shield } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const BasementFinishing = () => {
  const features = [
    "Complete moisture assessment and waterproofing",
    "Professional framing and electrical rough-in",
    "Premium insulation and drywall installation",
    "Custom flooring solutions (LVP, carpet, tile)",
    "Recessed lighting and electrical finishing",
    "Built-in entertainment centers and storage",
    "Bathroom and wet bar installations",
    "Local building code compliance and permits"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Free Consultation & Design",
      description: "We assess your basement space, discuss your vision, and create a custom design plan that maximizes functionality and value."
    },
    {
      step: "2", 
      title: "Permits & Planning",
      description: "Our team handles all permit applications and creates detailed construction plans that meet local building codes."
    },
    {
      step: "3",
      title: "Construction & Installation", 
      description: "Expert construction using proven systems, from framing and electrical to flooring and custom features."
    },
    {
      step: "4",
      title: "Final Inspection & Completion",
      description: "Thorough quality inspection and final walkthrough to ensure your basement exceeds expectations."
    }
  ];

  const pricingFactors = [
    "Square footage of basement space",
    "Bathroom and kitchen additions", 
    "Flooring type and quality",
    "Electrical and plumbing requirements",
    "Custom built-ins and features",
    "Ceiling height and complexity"
  ];

  const benefits = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Proven Systems",
      description: "Basement finishing systems developed through years of custom home experience"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Licensed & Insured",
      description: "Fully licensed contractors with comprehensive insurance coverage"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Expert Craftsmen",
      description: "Skilled finish carpenters and construction professionals"
    }
  ];

  return (
    <div className="w-full">
      <SEOHead
        title="Basement Finishing Contractor - Custom Basement Renovations"
        description="Transform your unfinished basement into beautiful living space. Expert basement finishing contractor with proven systems and quality craftsmanship. Free estimates available."
        canonicalUrl="https://lmfinishingandconstruction.com/basement-finishing"
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Transform Your Basement Into Beautiful Living Space
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-blue-100 mb-8"
              >
                Expert basement finishing contractor with proven systems and quality craftsmanship. Add valuable living space to your home with professional results.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contact"
                  className="bg-white text-blue-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13855008437"
                  className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (385) 500-8437
                </a>
              </motion.div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b"
                alt="Beautiful finished basement with modern design"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Basement Finishing Team</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Professional basement finishing with proven systems and expert craftsmanship
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

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Basement Finishing Services</h2>
              <p className="text-lg text-gray-700 mb-8">
                From initial design to final inspection, we handle every aspect of your basement transformation using proven systems developed through years of custom home experience.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600573472591-ee6981cf35b6"
                alt="Modern basement entertainment area"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Basement Finishing Process</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A systematic approach that ensures quality results and customer satisfaction
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
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Basement Finishing Investment</h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <div className="flex items-center mb-4">
                  <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-blue-900">Typical Range</h3>
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-2">$30,000 - $85,000</div>
                <p className="text-blue-700">Complete basement finishing including all materials, labor, and permits</p>
              </div>
              <p className="text-gray-700 mb-6">
                Investment varies based on size, features, and finishes. We provide detailed estimates with no hidden costs.
              </p>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Get Detailed Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Factors Affecting Investment</h3>
              <ul className="space-y-3">
                {pricingFactors.map((factor, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{factor}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h4 className="font-semibold text-gray-900 mb-2">Return on Investment</h4>
                <p className="text-gray-700">
                  Professional basement finishing typically adds 60-80% of the project cost to your home's value, 
                  making it one of the best home improvement investments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Basement?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for your free consultation and detailed estimate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+13855008437"
              className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
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

export default BasementFinishing;