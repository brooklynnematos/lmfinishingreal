import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Phone, Mail, Clock, DollarSign, Award, Users, Shield, Ruler } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const CustomCarpentry = () => {
  const services = [
    "Custom trim work and crown molding",
    "Built-in entertainment centers",
    "Custom cabinets and shelving",
    "Fireplace mantels and surrounds", 
    "Wainscoting and decorative paneling",
    "Custom staircases and railings",
    "Window and door casings",
    "Coffered ceilings and architectural details"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Design Consultation",
      description: "We discuss your vision, take measurements, and create detailed plans for your custom carpentry project."
    },
    {
      step: "2",
      title: "Material Selection",
      description: "Choose from premium wood species and finishes that match your home's style and your preferences."
    },
    {
      step: "3",
      title: "Precision Craftsmanship",
      description: "Expert finish carpenters create your custom pieces using proven techniques and professional-grade tools."
    },
    {
      step: "4",
      title: "Professional Installation",
      description: "Careful installation with attention to detail, ensuring perfect fit and finish that enhances your home."
    }
  ];

  const woodOptions = [
    { name: "Pine", description: "Economical paint-grade option", price: "$8-12/linear foot" },
    { name: "Poplar", description: "Premium paint-grade hardwood", price: "$10-16/linear foot" },
    { name: "Oak", description: "Classic hardwood with beautiful grain", price: "$15-25/linear foot" },
    { name: "Maple", description: "Durable hardwood with smooth finish", price: "$18-28/linear foot" },
    { name: "Cherry", description: "Luxury hardwood with rich color", price: "$25-35/linear foot" }
  ];

  const benefits = [
    {
      icon: <Ruler className="h-8 w-8 text-amber-600" />,
      title: "Precision Craftsmanship",
      description: "Expert finish carpenters with years of experience in detailed woodwork"
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: "Custom Design",
      description: "Unique pieces designed specifically for your space and style preferences"
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-600" />,
      title: "Quality Materials",
      description: "Premium wood species and finishes that stand the test of time"
    }
  ];

  return (
    <div className="w-full">
      <SEOHead
        title="Custom Carpentry & Finish Carpenter Services"
        description="Expert custom carpentry and finish carpenter services. Custom trim work, built-ins, crown molding, and architectural millwork. Free estimates from skilled craftsmen."
        canonicalUrl="https://lmfinishingandconstruction.com/custom-carpentry"
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-amber-900 to-amber-700">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581858726788-75bc0f6a952d')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Expert Custom Carpentry & Finish Work
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-amber-100 mb-8"
              >
                Transform your home with custom trim work, built-ins, and architectural details. Skilled finish carpenters delivering precision craftsmanship and professional results.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contact"
                  className="bg-white text-amber-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-amber-50 transition-colors flex items-center justify-center"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13855008437"
                  className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-amber-900 transition-colors flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (385) 500-8437
                </a>
              </motion.div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d"
                alt="Custom carpentry and finish work"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Finish Carpenters</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Expert craftsmanship and attention to detail that sets us apart from general contractors
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Custom Carpentry Services</h2>
              <p className="text-lg text-gray-700 mb-8">
                From intricate trim work to custom built-ins, our finish carpenters bring years of experience and proven techniques to every project.
              </p>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600566752547-c06598f4a0d5"
                alt="Custom built-in entertainment center"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Custom Carpentry Process</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              From concept to completion, we ensure every detail meets our high standards
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
                <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Materials & Pricing</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Choose from premium wood species and finishes to match your style and budget
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {woodOptions.map((wood, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{wood.name}</h3>
                <p className="text-gray-600 mb-4">{wood.description}</p>
                <div className="text-lg font-bold text-amber-600">{wood.price}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 bg-amber-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-amber-900 mb-4">Pricing Includes:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-center text-amber-800">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2" />
                  Premium materials and hardware
                </li>
                <li className="flex items-center text-amber-800">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2" />
                  Expert installation and finishing
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center text-amber-800">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2" />
                  Cleanup and debris removal
                </li>
                <li className="flex items-center text-amber-800">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-2" />
                  1-year craftsmanship warranty
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready for Custom Carpentry That Enhances Your Home?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Contact our finish carpenters today for your free consultation and detailed estimate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-amber-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-amber-50 transition-colors inline-flex items-center justify-center"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+13855008437"
              className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-amber-600 transition-colors inline-flex items-center justify-center"
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

export default CustomCarpentry;