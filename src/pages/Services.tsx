import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/content';
import { ArrowRight, CheckCircle, Image, DollarSign } from 'lucide-react';
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

  const getServicePageUrl = (title: string) => {
    switch (title) {
      case "Basement Finishing":
        return "/basement-finishing";
      case "Home Renovations":
        return "/home-renovations";
      case "Custom Carpentry":
        return "/custom-carpentry";
      case "Exterior Services":
        return "/exterior-services";
      default:
        return "/services";
    }
  };

  // Pricing information for each service
  const servicePricing = {
    "Basement Finishing": {
      range: "$30,000 - $85,000",
      details: "Complete basement finishing including framing, electrical, plumbing, flooring, and finishes",
      factors: ["Square footage", "Bathroom additions", "Kitchen/bar areas", "Flooring type", "Ceiling height"]
    },
    "Home Renovations": {
      range: "$20,000 - $175,000+",
      details: "Kitchen remodels, bathroom upgrades, and complete home makeovers",
      factors: ["Room size", "Material quality", "Appliance upgrades", "Structural changes", "Permit requirements"]
    },
    "Custom Carpentry": {
      range: "$12 - $35 per linear foot",
      details: "Custom trim work, built-ins, and finish carpentry services",
      factors: ["Wood species", "Design complexity", "Installation difficulty", "Project size", "Custom features"]
    },
    "Exterior Services": {
      range: "$8,000 - $45,000",
      details: "Deck construction, patio installation, and exterior improvements",
      factors: ["Deck size", "Material type", "Site conditions", "Railing style", "Additional features"]
    }
  };

  // Schema markup for services
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "LM Finishing & Construction",
      "url": "https://lmfinishingandconstruction.com"
    },
    "serviceType": "Construction Services",
    "areaServed": [
      "Washington DC",
      "Maryland", 
      "Virginia"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "DMV Construction Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  return (
    <div className="w-full">
      <SEOHead
        title="DMV Custom Carpentry & Remodeling Services - Finish Carpenter"
        description="Expert finish carpenter and custom remodeling contractor serving the DMV area. Specializing in basement finishing, custom carpentry, home renovations, and exterior services. Serving Washington DC, Maryland, and Virginia."
        canonicalUrl="https://lmfinishingandconstruction.com/services"
      />
      
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-[#213555]"
        aria-label="DMV Custom Carpentry and Remodeling Services"
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
              DMV Custom Carpentry & Remodeling Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-white max-w-3xl mx-auto"
            >
              Professional finish carpenter and custom remodeling contractor serving the DMV area with expert craftsmanship, proven systems, and attention to detail developed through years of custom home experience.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" aria-label="Detailed Utah Construction Services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => {
              const pricing = servicePricing[service.title as keyof typeof servicePricing];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
                >
                  {/* Service Image */}
                  <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-3'}`}>
                    <img
                      src={service.imageUrl}
                      alt={`DMV ${service.title.toLowerCase()} contractor showcasing professional craftsmanship in ${service.title.toLowerCase()} projects throughout Washington DC, Maryland, and Virginia`}
                      className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Service Details */}
                  <div className="order-2 lg:col-span-1">
                    <h2 className="text-3xl font-bold text-[#213555] mb-6">{service.title}</h2>
                    <p className="text-lg text-gray-700 mb-6">{service.description}</p>

                    <ul className="space-y-3 mb-8" aria-label={`Features of ${service.title}`}>
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-gray-700">
                          <CheckCircle className="h-5 w-5 text-[#213555] mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col gap-3">
                      <Link
                        to={getServicePageUrl(service.title)}
                        aria-label={`Learn more about ${service.title}`}
                        className="inline-flex items-center justify-center bg-[#213555] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#182943] transition-colors"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                      </Link>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          to="/contact"
                          aria-label={`Get started with ${service.title}`}
                          className="inline-flex items-center justify-center border-2 border-[#213555] text-[#213555] px-6 py-3 rounded-md text-lg font-medium hover:bg-[#213555] hover:text-white transition-colors"
                        >
                          Get Free Estimate
                        </Link>
                        <button
                          onClick={() => handlePortfolioClick(getCategoryFromTitle(service.title))}
                          aria-label={`View ${service.title} portfolio`}
                          className="inline-flex items-center justify-center border-2 border-[#213555] text-[#213555] px-6 py-3 rounded-md text-lg font-medium hover:bg-[#213555] hover:text-white transition-colors"
                        >
                          View Portfolio
                          <Image className="ml-2 h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Pricing Information */}
                  <div className={`order-3 ${index % 2 === 0 ? 'lg:order-3' : 'lg:order-1'}`}>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                      <div className="flex items-center mb-4">
                        <DollarSign className="h-6 w-6 text-[#213555] mr-2" aria-hidden="true" />
                        <h3 className="text-xl font-semibold text-[#213555]">General Pricing</h3>
                      </div>
                      
                      <div className="mb-4">
                        <div className="text-2xl font-bold text-[#213555] mb-2">{pricing.range}</div>
                        <p className="text-sm text-gray-600">{pricing.details}</p>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Pricing factors include:</h4>
                        <ul className="space-y-1">
                          {pricing.factors.map((factor, factorIndex) => (
                            <li key={factorIndex} className="flex items-center text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 bg-[#213555] rounded-full mr-2 flex-shrink-0" aria-hidden="true"></span>
                              {factor}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-3 rounded border-l-4 border-[#213555]">
                        <p className="text-sm text-gray-700">
                          <strong>Note:</strong> Prices vary based on project scope, materials, and site conditions. 
                          Contact us for a detailed estimate tailored to your specific DMV area project.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="why-choose-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="why-choose-heading" className="text-3xl font-bold text-[#213555] mb-4">
              Why Choose Our Finish Carpentry Team
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The advantages of hiring experienced finish carpenters versus general handymen for your custom remodeling project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Specialized Finish Carpentry Skills",
                description: "Our finish carpenters have years of specialized training in precision joinery, custom trim installation, and detailed woodwork that general handymen cannot match."
              },
              {
                title: "Licensed Contractors",
                description: "Fully licensed and insured residential contractors, ensuring your project meets all local building codes and regulations throughout the DMV area."
              },
              {
                title: "Quality Materials & Craftsmanship",
                description: "We use premium materials and proven techniques developed through years of custom home experience to ensure your remodeling project stands the test of time and adds lasting value to your home."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-[#213555] mb-4">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="process-heading" className="text-3xl font-bold text-[#213555] mb-4">Our Remodeling Process</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We follow a systematic approach developed through years of custom home experience to ensure your construction project is completed to the highest standards on time and within budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Free Consultation",
                description: "We meet at your DMV area property to discuss your vision, requirements, timeline, and budget for your remodeling project."
              },
              {
                step: "2",
                title: "Custom Design & Planning",
                description: "Our design team creates detailed plans and material specifications tailored to your specific needs and local building requirements."
              },
              {
                step: "3",
                title: "Expert Construction",
                description: "Our skilled craftsmen bring your vision to life using quality materials and proven construction techniques developed through years of custom home experience."
              },
              {
                step: "4",
                title: "Final Inspection & Completion",
                description: "Thorough quality inspection and final walkthrough to ensure your remodeling project exceeds expectations."
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

      {/* Service Areas FAQ */}
      <section className="py-20 bg-gray-50" aria-labelledby="service-areas-faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="service-areas-faq-heading" className="text-3xl font-bold text-[#213555] mb-4">
              DMV Service Areas & Common Questions
            </h2>
            <p className="text-lg text-gray-700">
              Frequently asked questions about our DMV construction services and coverage areas.
            </p>
          </div>
          <div className="space-y-8">
            {[
              {
                question: "Do you serve all areas of the DMV?",
                answer: "Yes! We serve Washington DC, Maryland, and Virginia, including all major metropolitan areas and surrounding communities throughout the DMV region."
              },
              {
                question: "What types of projects do you specialize in?",
                answer: "We specialize in basement finishing, custom carpentry, home renovations, and exterior services. Our expertise was developed through years of custom home construction experience."
              },
              {
                question: "How much does basement finishing cost in the DMV area?",
                answer: "DMV area basement finishing typically ranges from $30,000-$85,000 depending on size, features, and finishes. We provide free detailed estimates for all DMV area basement projects."
              },
              {
                question: "Do you work with general contractors in the DMV?",
                answer: "Absolutely! We partner with general contractors throughout the DMV area. We specialize in finish carpentry, custom trim work, and detailed millwork for residential projects."
              },
              {
                question: "What sets your basement finishing apart?",
                answer: "Our basement finishing expertise was developed through years of custom home construction. We understand proper moisture control techniques, local building codes, and insulation methods for lasting results."
              },
              {
                question: "Do you handle permits for DMV area projects?",
                answer: "Yes! We handle all permit applications and inspections for projects throughout Washington DC, Maryland, and Virginia, ensuring compliance with all local building codes and regulations."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-[#213555] mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;