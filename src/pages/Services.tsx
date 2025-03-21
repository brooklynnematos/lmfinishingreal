import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/content';
import { ArrowRight, CheckCircle, Image } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const handlePortfolioClick = (category: string) => {
    navigate(`/portfolio?category=${category}`);
  };

  const getCategoryFromTitle = (title: string) => {
    switch (title) {
      case "Basement Finishing":
        return "Basement Finishing";
      case "Home Renovations":
        return "Home Renovations";
      case "Custom Carpentry":
        return "Custom Carpentry";
      case "Exterior Services":
        return "Exterior";
      default:
        return "All";
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')] bg-cover bg-center">
          <div className="absolute inset-0 bg-primary bg-opacity-90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-8"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-white max-w-3xl mx-auto"
            >
              Comprehensive renovation solutions tailored to transform your space.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div className={`order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="h-6 w-6 text-primary-600 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center bg-[#4A90E2] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#357ABD] transition-colors"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    <button
                      onClick={() => handlePortfolioClick(getCategoryFromTitle(service.title))}
                      className="inline-flex items-center justify-center border-2 border-[#4A90E2] text-[#4A90E2] px-6 py-3 rounded-md text-lg font-medium hover:bg-[#4A90E2] hover:text-white transition-colors"
                    >
                      View Portfolio
                      <Image className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className={`order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure your project is completed to the highest standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "We meet to discuss your vision, requirements, and budget."
              },
              {
                step: "2",
                title: "Design",
                description: "Our team creates detailed plans."
              },
              {
                step: "3",
                title: "Construction",
                description: "Expert craftsmen bring your vision to life."
              },
              {
                step: "4",
                title: "Completion",
                description: "Final inspection and handover of your transformed space."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center relative"
              >
                <div className="w-12 h-12 bg-[#4A90E2] text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;