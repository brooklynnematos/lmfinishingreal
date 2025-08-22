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

  // Schema markup for LocalBusiness
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LM Finishing & Construction",
    "description": "Utah-based residential contractor specializing in custom woodwork, finish carpentry, basement finishing, and home remodels. Serving homeowners and general contractors across Utah County, Salt Lake County, Davis County, Wasatch County, and Summit County.",
    "url": "https://lmfinishingandconstruction.com",
    "telephone": "+1-385-500-8437",
    "email": "office@lmfinishing.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Utah",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.2338",
      "longitude": "-111.6585"
    },
    "openingHours": [
      "Mo-Fr 08:00-17:00"
    ],
    "serviceArea": [
      {
        "@type": "State",
        "name": "Utah"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Basement Finishing",
            "description": "Complete basement finishing services including framing, drywall, flooring, and custom features"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Carpentry",
            "description": "Custom trim work, built-ins, cabinetry, and finish carpentry services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Renovations",
            "description": "Kitchen remodeling, bathroom renovations, and complete home makeovers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Exterior Services",
            "description": "Deck construction, patio installation, and exterior trim work"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "25"
    },
    "priceRange": "$$",
    "paymentAccepted": "Cash, Check, Credit Card",
    "currenciesAccepted": "USD"
  };

  return (
    <div className="w-full">
      <SEOHead
        title="Utah Finish Carpenter & Custom Remodeling Contractor"
        description="LM Finishing & Construction is a Utah-based residential contractor specializing in custom woodwork, finish carpentry, basement finishing, and home remodels. Serving Utah County, Salt Lake County, and surrounding areas including Saratoga Springs, Lehi, American Fork, and Draper."
        canonicalUrl="https://lmfinishingandconstruction.com"
      />
      
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      
      {/* Hero Section */}
      <section className="relative h-screen" aria-label="Welcome to LM Finishing and Construction">
        <div className="absolute inset-0">
          <div className="w-full h-full overflow-hidden">
            <ImageOptimizer
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
              alt="Utah finish carpenter custom basement renovation showcasing expert craftsmanship and attention to detail"
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
              Utah's Premier Finish Carpenter<br />& Custom Remodeling Contractor
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white mb-8 max-w-2xl"
            >
              LM Finishing & Construction is a Utah-based residential contractor specializing in custom woodwork, finish carpentry, basement finishing, and complete home remodels. Expert craftsmanship serving Utah County, Salt Lake County, and surrounding communities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link
                to="/contact"
                aria-label="Get a free estimate for your Utah renovation project"
                className="bg-[#2563EB] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#1D4ED8] transition-colors flex items-center justify-center"
              >
                Get a Free Estimate
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                to="/portfolio"
                aria-label="View our Utah custom carpentry and remodeling portfolio"
                className="bg-white text-[#2563EB] px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Area Section - Simplified */}
      <section className="py-12 bg-white" aria-labelledby="service-area-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 id="service-area-heading" className="text-2xl font-bold text-gray-900 mb-4">
              Serving Utah & Salt Lake Counties
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              We serve homeowners and general contractors across Utah County, Salt Lake County, Davis County, Wasatch County, and Summit County, including Saratoga Springs, Lehi, American Fork, Draper, Provo, Orem, Sandy, West Valley City, and surrounding communities.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="features-heading" className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Utah Finish Carpentry Team</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We bring expertise, quality craftsmanship, and dedication to every custom remodeling project across Utah.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="h-8 w-8 text-[#2563EB]" aria-hidden="true" />,
                title: "Expert Finish Carpentry",
                description: "Skilled Utah finish carpenters with years of experience in custom trim work, built-ins, and detailed woodwork."
              },
              {
                icon: <Users className="h-8 w-8 text-[#2563EB]" aria-hidden="true" />,
                title: "Licensed Utah Contractors",
                description: "Fully licensed and insured residential contractors serving Utah County and Salt Lake County communities."
              },
              {
                icon: <Tool className="h-8 w-8 text-[#2563EB]" aria-hidden="true" />,
                title: "Complete Remodeling Solutions",
                description: "From basement finishing to custom carpentry, we handle all aspects of your Utah home renovation project."
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
            <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">Utah Custom Remodeling Services</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Comprehensive renovation solutions from Utah's premier finish carpentry and remodeling contractor.
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
                  alt={`Utah ${service.title.toLowerCase()} contractor showcasing professional craftsmanship and quality workmanship`}
                  className="w-full h-80 object-cover"
                  width={800}
                  height={400}
                  priority={index < 2}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Utah {service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6" aria-label={`Features of Utah ${service.title}`}>
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-700">
                        <ArrowRight className="h-4 w-4 text-[#2563EB] mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/contact"
                      aria-label={`Get started with Utah ${service.title}`}
                      className="flex items-center justify-center bg-[#2563EB] text-white px-4 py-2 rounded-md font-medium hover:bg-[#1D4ED8] transition-colors text-sm"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                    <Link
                      to={`/portfolio?category=${getCategoryFromTitle(service.title)}`}
                      aria-label={`View Utah ${service.title} portfolio`}
                      className="flex items-center justify-center border-2 border-[#2563EB] text-[#2563EB] px-4 py-2 rounded-md font-medium hover:bg-[#2563EB] hover:text-white transition-colors text-sm"
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

      {/* FAQ Section - Simplified */}
      <section className="py-20 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="faq-heading" className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-700">
              Common questions about custom carpentry and home renovations in Utah.
            </p>
          </div>
          <div className="space-y-8">
            {[
              {
                question: "How much does custom trim cost in Utah?",
                answer: "Custom trim costs in Utah typically range from $8-25 per linear foot, depending on the complexity of the design, wood species, and installation requirements. Our Utah finish carpenters provide detailed estimates based on your specific project needs."
              },
              {
                question: "What to expect when remodeling your basement in Utah?",
                answer: "Utah basement remodeling typically takes 3-6 weeks and includes moisture assessment, framing, electrical/plumbing rough-in, insulation, drywall, flooring, and finish work. We handle all permits and inspections required in Utah County and Salt Lake County."
              },
              {
                question: "Why hire a Utah finish carpenter instead of a general handyman?",
                answer: "Utah finish carpenters specialize in detailed woodwork, custom trim installation, and precision joinery that requires years of training. Unlike general handymen, finish carpenters have the expertise to create seamless mitered corners, install complex crown molding, and build custom cabinetry."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
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
          <h2 id="cta-heading" className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Utah Remodeling Project?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Contact Utah's premier finish carpentry and remodeling contractor for your free estimate.
          </p>
          <Link
            to="/contact"
            aria-label="Get your free Utah remodeling project estimate"
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