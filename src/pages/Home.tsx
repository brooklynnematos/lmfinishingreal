import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Home as HomeIcon, PenTool as Tool, Image } from 'lucide-react';
import { services } from '../data/content';
import GoogleReviews from '../components/GoogleReviews';
import SEOHead from '../components/SEOHead';
import ImageOptimizer from '../components/ImageOptimizer';

const Home = () => {
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
        title="Home"
        description="Transform your space with Utah's premier home renovation experts. Specializing in basement finishing, custom carpentry, and complete home renovations in Utah County, Salt Lake County, and surrounding areas."
        canonicalUrl="https://lmfinishingandconstruction.com"
      />
      
      {/* Hero Section */}
      <section className="relative h-screen" aria-label="Welcome to LM Finishing and Construction">
        <div className="absolute inset-0">
          <div className="w-full h-full overflow-hidden">
            <ImageOptimizer
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
              alt="Modern home interior showcasing our renovation expertise"
              className="w-full h-[120%] object-cover object-top"
              priority={true}
              width={1920}
              height={1080}
            />
          </div>
          <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Transform Your Space<br />Into Something Extraordinary
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white mb-8 max-w-2xl"
            >
              Expert basement finishing and home renovations that bring your vision to life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link
                to="/contact"
                aria-label="Get a free estimate for your renovation project"
                className="bg-[#2563EB] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#1D4ED8] transition-colors flex items-center justify-center"
              >
                Get a Free Estimate
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                to="/portfolio"
                aria-label="View our portfolio of completed projects"
                className="bg-white text-[#2563EB] px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="features-heading" className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We bring expertise, quality, and dedication to every project we undertake.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="h-8 w-8 text-[#2563EB]" aria-hidden="true" />,
                title: "Quality Craftsmanship",
                description: "Expert workmanship and attention to detail in every project."
              },
              {
                icon: <Users className="h-8 w-8 text-[#2563EB]" aria-hidden="true" />,
                title: "Experienced Team",
                description: "Skilled professionals with years of industry experience."
              },
              {
                icon: <Tool className="h-8 w-8 text-[#2563EB]" aria-hidden="true" />,
                title: "Full Service Solutions",
                description: "Comprehensive renovation services under one roof."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="flex justify-center mb-4" aria-hidden="true">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Comprehensive renovation solutions tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <ImageOptimizer
                  src={service.imageUrl}
                  alt={`${service.title} service showcase`}
                  className="w-full h-64 object-cover"
                  width={800}
                  height={400}
                  priority={index < 2}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6" aria-label={`Features of ${service.title}`}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <ArrowRight className="h-4 w-4 text-[#2563EB] mr-2" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/contact"
                      aria-label={`Get started with ${service.title}`}
                      className="flex items-center justify-center bg-[#2563EB] text-white px-6 py-2 rounded-md font-medium hover:bg-[#1D4ED8] transition-colors"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                    <Link
                      to={`/portfolio?category=${getCategoryFromTitle(service.title)}`}
                      aria-label={`View ${service.title} portfolio`}
                      className="flex items-center justify-center border-2 border-[#2563EB] text-[#2563EB] px-6 py-2 rounded-md font-medium hover:bg-[#2563EB] hover:text-white transition-colors"
                    >
                      View Work
                      <Image className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* CTA Section */}
      <section className="bg-[#2563EB] py-20" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-3xl font-bold text-white mb-8">
            Ready to Start Your Project?
          </h2>
          <Link
            to="/contact"
            aria-label="Get your free project estimate"
            className="inline-flex items-center bg-white text-[#2563EB] px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get Your Free Estimate
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;