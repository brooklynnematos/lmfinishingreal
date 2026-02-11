import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Phone, Mail, Clock, DollarSign, Award, Users, Shield, TreePine } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const ExteriorServices = () => {
  const services = [
    "Custom deck construction and design",
    "Patio installation and hardscaping",
    "Pergolas and outdoor structures",
    "Exterior trim work and siding",
    "Outdoor kitchen and entertainment areas",
    "Gazebos and pavilions",
    "Fence installation and repair",
    "Outdoor storage solutions"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Site Assessment",
      description: "We evaluate your outdoor space, discuss your vision, and assess site conditions for optimal design."
    },
    {
      step: "2",
      title: "Custom Design",
      description: "Create detailed plans that maximize your outdoor space while complementing your home's architecture."
    },
    {
      step: "3",
      title: "Expert Construction",
      description: "Professional construction using quality materials and proven techniques for lasting outdoor structures."
    },
    {
      step: "4",
      title: "Final Inspection",
      description: "Thorough inspection and walkthrough to ensure your outdoor space exceeds expectations."
    }
  ];


  const benefits = [
    {
      icon: <TreePine className="h-8 w-8 text-emerald-600" />,
      title: "Outdoor Living Expertise",
      description: "Specialized knowledge in creating functional and beautiful outdoor spaces"
    },
    {
      icon: <Award className="h-8 w-8 text-emerald-600" />,
      title: "Quality Materials",
      description: "Premium materials selected for durability in all weather conditions"
    },
    {
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      title: "Weather-Resistant Construction",
      description: "Built to withstand the elements with proper drainage and ventilation"
    }
  ];

  return (
    <div className="w-full">
      <SEOHead
        title="Exterior Construction Services - Decks, Patios & Outdoor Living"
        description="Expert exterior construction services. Custom deck construction, patio installation, pergolas, and outdoor living spaces. Quality materials and craftsmanship."
        canonicalUrl="https://lmfinishingandconstruction.com/exterior-services"
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-900 to-emerald-700">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600566753151-384129cf4e3e')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Create Beautiful Outdoor Living Spaces
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-emerald-100 mb-8"
              >
                Expert exterior construction services for your home. Custom decks, patios, pergolas, and outdoor structures that enhance your home's value and your quality of life.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contact"
                  className="bg-white text-emerald-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-emerald-50 transition-colors flex items-center justify-center"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13855008437"
                  className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-emerald-900 transition-colors flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (385) 500-8437
                </a>
              </motion.div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600566753151-384129cf4e3e"
                alt="Custom deck and outdoor living space"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Exterior Construction Team</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Specialized expertise in creating outdoor spaces that stand the test of time
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

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Exterior Construction Services</h2>
              <p className="text-lg text-gray-700 mb-8">
                From custom decks to complete outdoor living spaces, we create exterior structures that enhance your home's functionality and curb appeal.
              </p>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                alt="Outdoor living space with pergola"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Exterior Construction Process</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              From concept to completion, we ensure your outdoor project is built to last
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
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Quote Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality Materials & Custom Pricing</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              We work with a variety of decking materials to match your style, budget, and maintenance preferences.
              Pricing varies based on materials, deck size, design complexity, and site conditions.
            </p>
          </div>
          <div className="bg-emerald-50 p-8 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-emerald-900 mb-6 text-center">Deck Material Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-emerald-800 mb-3">Natural Wood</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Pressure-Treated Pine - Economical with natural appeal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Cedar - Natural resistance to insects and weather</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-800 mb-3">Composite Options</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Composite Decking - Low maintenance with wood-like look</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">PVC Decking - Premium durability and minimal upkeep</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-emerald-200 pt-6">
              <h4 className="font-semibold text-emerald-900 mb-3 text-center">Every Project Includes</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-emerald-800">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                    Professional design and planning
                  </li>
                  <li className="flex items-center text-emerald-800">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                    All permits and inspections
                  </li>
                  <li className="flex items-center text-emerald-800">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                    Quality materials and hardware
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center text-emerald-800">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                    Expert construction and finishing
                  </li>
                  <li className="flex items-center text-emerald-800">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                    Complete cleanup and debris removal
                  </li>
                  <li className="flex items-center text-emerald-800">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                    1-year warranty on workmanship
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Contact us to discuss your exterior construction project and receive a detailed estimate based on your specific needs.
            </p>
            <Link
              to="/contact"
              className="bg-emerald-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-emerald-700 transition-colors inline-flex items-center"
            >
              Get Your Free Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Seasonal Considerations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Best Times for Exterior Projects</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Planning your outdoor construction for optimal results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Spring</h3>
              <p className="text-gray-600 mb-3">March - May</p>
              <p className="text-sm text-gray-700">Ideal for planning and starting projects. Mild weather and longer days.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Summer</h3>
              <p className="text-gray-600 mb-3">June - August</p>
              <p className="text-sm text-gray-700">Peak construction season. Best weather but highest demand.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fall</h3>
              <p className="text-gray-600 mb-3">September - November</p>
              <p className="text-sm text-gray-700">Excellent conditions and better availability. Great for completion before winter.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Winter</h3>
              <p className="text-gray-600 mb-3">December - February</p>
              <p className="text-sm text-gray-700">Planning season. Design and permits for spring construction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Enhance Your Outdoor Living Space?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your exterior construction project and get your detailed estimate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-emerald-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-emerald-50 transition-colors inline-flex items-center justify-center"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+13855008437"
              className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-emerald-600 transition-colors inline-flex items-center justify-center"
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

export default ExteriorServices;