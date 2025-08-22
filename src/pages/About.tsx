import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, ThumbsUp, Users } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const About = () => {
  // Schema markup for About page
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Leonardo Matos",
    "jobTitle": "Owner & Master Craftsman",
    "worksFor": {
      "@type": "LocalBusiness",
      "name": "LM Finishing & Construction",
      "description": "Utah-based residential contractor specializing in custom woodwork, finish carpentry, and remodels"
    },
    "knowsAbout": [
      "Finish Carpentry",
      "Custom Trim Work", 
      "Basement Finishing",
      "Home Renovations",
      "Construction Management"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Finish Carpenter",
      "occupationLocation": {
        "@type": "State",
        "name": "Utah"
      }
    }
  };

  return (
    <div className="w-full">
      <SEOHead
        title="About Utah's Premier Finish Carpenter - Leonardo Matos"
        description="Learn about Leonardo Matos, owner of LM Finishing and Construction, Utah's trusted expert finish carpenter with over 8 years of experience in custom carpentry, basement finishing, and home renovations serving Utah County, Salt Lake County, and surrounding areas."
        canonicalUrl="https://lmfinishingandconstruction.com/about"
      />
      
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-[#213555]" 
        aria-label="About LM Finishing and Construction - Utah's Premier Finish Carpenter"
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
              About Utah's Premier Finish Carpenter
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-white max-w-3xl mx-auto"
            >
              Building dreams and transforming Utah homes with expert finish carpentry, custom woodwork, and unmatched craftsmanship since 2016.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 bg-white" aria-labelledby="mission-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 id="mission-heading" className="text-3xl font-bold text-[#213555] mb-6">Our Mission</h2>
            <p className="text-xl text-gray-800 leading-relaxed mb-6">
              LM Finishing and Construction is a Utah-based residential contractor specializing in custom woodwork, finish carpentry, basement finishing, and complete home remodels. Our mission is to elevate the art of home improvement through exceptional craftsmanship, innovative design, and unwavering commitment to customer satisfaction.
            </p>
            <p className="text-lg text-gray-700">
              We serve homeowners and general contractors across Utah County, Salt Lake County, Davis County, Wasatch County, and Summit County, transforming every space into a masterpiece that reflects our clients' vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="values-heading" className="text-3xl font-bold text-[#213555] mb-4">Why Utah Homeowners Choose Our Finish Carpentry Team</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The principles that guide our Utah finish carpentry work and relationships with clients throughout Northern Utah.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Utah Craftsmanship",
                description: "We never compromise on the quality of our Utah finish carpentry work, using only the finest materials and proven techniques."
              },
              {
                title: "Honest Utah Contractors",
                description: "Honesty and transparency are at the core of everything we do as Utah contractors, from accurate pricing to clear project timelines."
              },
              {
                title: "Innovative Utah Solutions",
                description: "We stay ahead of Utah construction trends and bring creative solutions to every renovation challenge."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
                role="article"
                aria-labelledby={`value-${index}`}
              >
                <h3 id={`value-${index}`} className="text-xl font-semibold text-[#213555] mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20" aria-labelledby="founder-heading">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-shrink-0"
            >
              <img
                src="/images/about/IMG_9924.JPG"
                alt="Leonardo Matos, Owner and Master Finish Carpenter at LM Finishing and Construction, Utah's premier custom carpentry contractor"
                className="rounded-lg shadow-xl w-[250px] h-[250px] object-cover mx-auto md:mx-0"
              />
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-center md:text-left space-y-6"
            >
              <h2 id="founder-heading" className="text-3xl font-bold text-[#213555]">Meet Leonardo Matos</h2>
              <h3 className="text-xl text-gray-700">Owner & Master Utah Finish Carpenter</h3>
              <p className="text-lg text-gray-800">
                I am the owner and founder of LM Finishing and Construction, a Utah-based residential contractor established in 2021. With over eight years of experience as a Utah finish carpenter, I specialize in custom woodwork, finish carpentry, basement finishing, and complete home remodels throughout Utah County, Salt Lake County, and surrounding areas.
              </p>
              <p className="text-lg text-gray-800">
                Known for my keen attention to detail and dedication to quality Utah craftsmanship, I take pride in delivering exceptional finish carpentry work that exceeds client expectations. Whether you're looking for top-tier finish carpentry services or a skilled Utah contractor to bring your remodeling vision to life, my team and I are ready to deliver outstanding results.
              </p>

              {/* Experience & Projects Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-gray-50 p-6 rounded-lg text-center" role="status">
                  <div className="text-2xl font-bold text-[#213555] mb-2" aria-label="Years of Utah Finish Carpentry Experience">8+</div>
                  <div className="text-gray-700">Years Utah Experience</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center" role="status">
                  <div className="text-2xl font-bold text-[#213555] mb-2" aria-label="Utah Projects Completed">500+</div>
                  <div className="text-gray-700">Utah Projects Completed</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;