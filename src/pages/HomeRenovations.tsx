import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Phone, Mail, Clock, DollarSign, Award, Users, Shield, Home, Image as ImageIcon } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ImageOptimizer from '../components/ImageOptimizer';
import { portfolioImages } from '../data/images';
import { services } from '../data/content';

const HomeRenovations = () => {
  const serviceData = services.find(s => s.title === 'Home Renovations');
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
      <section className="relative py-24 bg-gradient-to-br from-green-900 to-green-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={serviceData?.imageUrl}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
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
              <ImageOptimizer
                src={serviceData?.imageUrl || ''}
                alt="Beautiful home renovation kitchen"
                className="rounded-lg shadow-2xl object-cover w-full h-[400px]"
                width={800}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us for Your Home Renovation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional renovation services backed by years of experience in custom home construction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Renovation Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Complete Home Renovation Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From single-room updates to whole house renovations, we handle every aspect of your project with expertise and professionalism.
              </p>
              <ul className="space-y-4">
                {renovationTypes.map((type, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
              <ImageOptimizer
                src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d"
                alt="Modern kitchen renovation"
                className="w-full h-full object-cover"
                width={800}
                height={1000}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Renovation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven, systematic approach that ensures quality results and client satisfaction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recent Renovation Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our portfolio of completed renovation projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {portfolioImages.slice(0, 6).map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg group">
                <ImageOptimizer
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-green-700 transition-colors"
            >
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation and estimate for your renovation project. We'll help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-900 px-8 py-4 rounded-md text-lg font-medium hover:bg-green-50 transition-colors inline-flex items-center justify-center"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+13855008437"
              className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white hover:text-green-900 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              (385) 500-8437
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeRenovations;
