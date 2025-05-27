import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/content';
import { ArrowRight, CheckCircle, Image } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

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
      <SEOHead
        title="Services"
        description="Expert home renovation services in Utah including basement finishing, custom carpentry, and complete home renovations. Serving Utah County, Salt Lake County, and surrounding areas."
        canonicalUrl="https://lmfinishingandconstruction.com/services"
      />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-[#213555]"
        aria-label="Our Services Overview"
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
      <section className="py-20" aria-label="Detailed Services">
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
                  <h2 className="text-3xl font-bold text-[#213555] mb-6">{service.title}</h2>
                  <p className="text-lg text-gray-700 mb-8">{service.description}</p>
                  <ul className="space-y-4" aria-label={`Features of ${service.title}`}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="h-6 w-6 text-[#213555] mr-3" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Link
                      to="/contact"
                      aria-label={`Get started with ${service.title}`}
                      className="inline-flex items-center justify-center bg-[#213555] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#182943] transition-colors"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Link>
                    <button
                      onClick={() => handlePortfolioClick(getCategoryFromTitle(service.title))}
                      aria-label={`View portfolio for ${service.title}`}
                      className="inline-flex items-center justify-center border-2 border-[#213555] text-[#213555] px-6 py-3 rounded-md text-lg font-medium hover:bg-[#213555] hover:text-white transition-colors"
                    >
                      View Portfolio
                      <Image className="ml-2 h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className={`order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <img
                    src={service.imageUrl}
                    alt={`Example of ${service.title} work`}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="process-heading" className="text-3xl font-bold text-[#213555] mb-4">Our Process</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
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
                role="article"
                aria-labelledby={`step-${index}`}
              >
                <div 
                  className="w-12 h-12 bg-[#213555] text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto"
                  aria-hidden="true"
                >
                  {step.step}
                </div>
                <h3 id={`step-${index}`} className="text-xl font-semibold text-[#213555] mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;