import React from 'react';
import { motion } from 'framer-motion';
import { locations } from '../data/content';
import { MapPin } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const countyImages = {
  'Utah County': 'https://lh5.googleusercontent.com/proxy/WeODBklMdcyQN_QEnv1VWfSq30yl9nOm0vJ7lNAe_BOGFTpvV0kpY7wY_xEp-nXXlxWTRS5fPOp-P44O6vXCGDgNxjVBSJE',
  'Salt Lake County': 'https://lh4.googleusercontent.com/proxy/2Mx6SwczX6t-LblXx1eLFquYdl3bZis0M3HdffzHx78SU4A5dYAcD6PzHDhuZBVVmFe7x4VXJ2xbNKT2Aaf7QyETm3-t9sGUuEAllbQZXUtglQ',
  'Davis County': 'https://lh5.googleusercontent.com/proxy/x1BT1KrErD6UBRtJnXJOCVD5U0xMoK1YbLkYt_Fxk0IkDsENvzhENm5AvN0ui-YqnAOMf-x4fbL1Rhj2226F-w',
  'Wasatch County': 'https://lh4.googleusercontent.com/proxy/DT0OWOM90_25BcynV5SLF2rrstEjBDT_Q_b4OE0_LouwZjvwj9YDiLyg-nnOYfTWd6robgjrrz23IYJM7hc',
  'Summit County': 'https://lh5.googleusercontent.com/proxy/S9Novg-7BjUln7kwpNtIkrLGJZcVSP8oLpYY902EbrNtXo4wW-xK6uzr5Xfv6mW73ct3X-pzHudQ'
};

const Locations = () => {
  return (
    <div className="w-full">
      <SEOHead
        title="Service Areas"
        description="LM Finishing and Construction serves Utah County, Salt Lake County, Davis County, Wasatch County, and Summit County. Quality home renovation services throughout Northern Utah."
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
              Proudly serving communities across Northern Utah
            </motion.p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-gray-50" aria-label="Service Locations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:shadow-xl transition-shadow duration-300"
                role="region"
                aria-labelledby={`location-${index}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8">
                    <div className="flex items-start mb-6">
                      <MapPin className="h-6 w-6 text-[#213555] mt-1" aria-hidden="true" />
                      <h2 
                        id={`location-${index}`}
                        className="text-2xl font-bold text-[#213555] ml-3"
                      >
                        {location.county}
                      </h2>
                    </div>
                    <p className="text-gray-700 mb-6">{location.description}</p>
                    <div 
                      className="grid grid-cols-2 gap-4"
                      role="list"
                      aria-label={`Cities served in ${location.county}`}
                    >
                      {location.cities.map((city, cityIndex) => (
                        <div
                          key={cityIndex}
                          className="flex items-center text-gray-700"
                          role="listitem"
                        >
                          <span className="w-2 h-2 bg-[#213555] rounded-full mr-2" aria-hidden="true"></span>
                          {city}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="h-[400px] relative overflow-hidden bg-white flex items-center justify-center p-4">
                    <img 
                      src={countyImages[location.county as keyof typeof countyImages]}
                      alt={`Map of ${location.county}`}
                      className="max-w-full max-h-full object-contain rounded-lg shadow-md"
                    />
                  </div>
                </div>
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