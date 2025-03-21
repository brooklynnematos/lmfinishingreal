import React from 'react';
import { motion } from 'framer-motion';
import { locations } from '../data/content';
import { MapPin } from 'lucide-react';

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
      <section className="py-20 bg-primary-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8">
                    <div className="flex items-start mb-6">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <h2 className="text-2xl font-bold text-primary ml-3">{location.county}</h2>
                    </div>
                    <p className="text-primary-muted mb-6">{location.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      {location.cities.map((city, cityIndex) => (
                        <div
                          key={cityIndex}
                          className="flex items-center text-primary-medium"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {city}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="h-[400px] relative overflow-hidden bg-white flex items-center justify-center p-4">
                    <img 
                      src={countyImages[location.county as keyof typeof countyImages]}
                      alt={`${location.county} map`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;