import React from 'react';
import { motion } from 'framer-motion';
import { dmvAreas } from '../data/content';
import SEOHead from '../components/SEOHead';
import { MapPin } from 'lucide-react';

const dmvAreas = [
  {
    area: "Washington DC",
    description: "Serving all districts and neighborhoods throughout the nation's capital with expert finish carpentry and custom remodeling services.",
    cities: ["Northwest DC", "Northeast DC", "Southeast DC", "Southwest DC", "Capitol Hill", "Dupont Circle", "Georgetown", "Adams Morgan"]
  },
  {
    area: "Northern Virginia",
    description: "Complete coverage of Northern Virginia including Arlington, Fairfax, and Loudoun Counties with professional finish carpentry services.",
    cities: ["Arlington", "Alexandria", "Fairfax", "McLean", "Tysons", "Reston", "Falls Church", "Vienna"]
  },
  {
    area: "Maryland",
    description: "Serving Maryland communities including Montgomery and Prince George's Counties with quality custom carpentry and home renovation services.",
    cities: ["Bethesda", "Silver Spring", "Rockville", "Gaithersburg", "College Park", "Hyattsville", "Bowie", "Annapolis"]
  }
];

const areaImages = {
  'Washington DC': 'https://images.unsplash.com/photo-1617581629397-a72507c3de9e',
  'Northern Virginia': 'https://images.unsplash.com/photo-1582407947304-fd86f028f716',
  'Maryland': 'https://images.unsplash.com/photo-1590736969955-71cc94901144',
  'Salt Lake City': 'https://images.unsplash.com/photo-1605538883669-825200433431'
};

const Locations = () => {
  return (
    <div className="w-full">
      <SEOHead
        title="Service Areas"
        description="LM Finishing and Construction serves Washington DC, Maryland, Virginia, and Salt Lake City. Quality home renovation services throughout the DMV area and Utah."
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
               Proudly serving communities across the DMV area and Salt Lake City
            </motion.p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-gray-50" aria-label="Service Locations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {dmvAreas.map((location, index) => (
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
                        {location.area}
                      </h2>
                    </div>
                    <p className="text-gray-700 mb-6">{location.description}</p>
                    <div 
                      className="grid grid-cols-2 gap-4"
                      role="list"
                      aria-label={`Cities served in ${location.area}`}
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
                      src={areaImages[location.area as keyof typeof areaImages]}
                      alt={`${location.area} area`}
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