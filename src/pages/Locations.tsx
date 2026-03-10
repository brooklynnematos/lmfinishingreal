import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { serviceAreas } from '../data/content';
import SEOHead from '../components/SEOHead';
import { MapPin } from 'lucide-react';

const areaImages: Record<string, string> = {
  Utah: '/images/Utah.png',
  'DMV Area':
    'https://images.unsplash.com/photo-1617581629397-a72507c3de9e?auto=format&fit=crop&w=1200&q=80'
};

const fallbackImage =
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80';

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
        className="relative bg-[#213555] py-24"
        aria-label="Service Areas Overview"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#213555] bg-opacity-85"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 text-5xl font-bold text-white md:text-6xl"
            >
              Service Areas
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto max-w-3xl text-2xl text-white"
            >
              Proudly serving communities with proven systems and expert craftsmanship
            </motion.p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="bg-gray-50 py-20" aria-label="Service Locations">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {serviceAreas.map((location, index) => {
              const areaKey = location.area?.trim();
              const imageSrc = areaImages[areaKey] || fallbackImage;

              return (
                <motion.div
                  key={areaKey || index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden rounded-lg bg-white shadow-lg"
                  role="region"
                  aria-labelledby={`location-${index}`}
                >
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    <img
                      src={imageSrc}
                      alt={`${location.area} service area`}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = fallbackImage;
                      }}
                    />
                  </div>

                  <div className="p-8">
                    <div className="mb-6 flex items-start">
                      <MapPin
                        className="mt-1 h-6 w-6 text-[#213555]"
                        aria-hidden="true"
                      />
                      <h2
                        id={`location-${index}`}
                        className="ml-3 text-2xl font-bold text-[#213555]"
                      >
                        {location.area}
                      </h2>
                    </div>

                    <p className="mb-6 text-gray-700">{location.description}</p>

                    {location.cities && location.cities.length > 0 && (
                      <div>
                        <h3 className="mb-3 text-lg font-semibold text-[#213555]">
                          Areas Served:
                        </h3>
                        <div className="grid grid-cols-1 gap-2">
                          {location.cities.map((city, cityIndex) => (
                            <div key={cityIndex} className="flex items-center">
                              <span
                                className="mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-[#213555]"
                                aria-hidden="true"
                              ></span>
                              <span className="text-gray-700">{city}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#213555] py-16" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 id="cta-heading" className="mb-6 text-3xl font-bold text-white">
            Ready to Start Your Project?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-xl text-white">
            Contact us today to schedule a free consultation in your area.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md bg-white px-8 py-3 text-lg font-medium text-[#213555] transition-colors hover:bg-gray-100"
              aria-label="Get a free estimate for your project"
            >
              Get Your Free Estimate
              <MapPin className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Locations;