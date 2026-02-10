import React from 'react';
import { motion } from 'framer-motion';
import { serviceAreas } from '../data/content';
import SEOHead from '../components/SEOHead';
import { MapPin } from 'lucide-react';

const areaImages = {
  'Utah': 'https://images.unsplash.com/photo-1605538883669-825200433431',
  'DMV Area': 'https://images.unsplash.com/photo-1617581629397-a72507c3de9e'
};

const Locations = () => {
  return (
    <div className="w-full">
      <SEOHead
        title="Service Areas"
        description="LM Finishing and Construction serves multiple markets including Washington DC, Maryland, Virginia, and Utah. Quality home renovation services with proven systems and expert craftsmanship."
        canonicalUrl="https://lmfinishingandconstruction.com/locations"
      />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-[#213555]"
        aria-label="Service Areas Overview"
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
              Service Areas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-white max-w-3xl mx-auto"
            >
              Proudly serving communities with proven systems and expert craftsmanship
            </motion.p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-gray-50" aria-label="Service Locations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {serviceAreas.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                role="region"
                aria-labelledby={`location-${index}`}
              >
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={areaImages[location.area as keyof typeof areaImages]}
                    alt={`${location.area} service area`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <MapPin className="h-6 w-6 text-[#213555] mt-1" aria-hidden="true" />
                    <h2 
                      id={`location-${index}`}
                      className="text-2xl font-bold text-[#213555] ml-3"
                    >
                      {location.area}
                    </h2>
                  </div>
                  <p className="text-gray-700 mb-6">{location.description}</p>
                  
                  {location.cities && location.cities.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-[#213555] mb-3">Areas Served:</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {location.cities.map((city, cityIndex) => (
                          <div key={cityIndex} className="flex items-center">
                            <span className="w-2 h-2 bg-[#213555] rounded-full mr-3 flex-shrink-0" aria-hidden="true"></span>
                            <span className="text-gray-700">{city}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#213555]" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            id="cta-heading"
            className="text-3xl font-bold text-white mb-6"
          >
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a free consultation in your area.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-[#213555] px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
              aria-label="Get a free estimate for your project"
            >
              Get Your Free Estimate
              <MapPin className="ml-2 h-5 w-5" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Locations;