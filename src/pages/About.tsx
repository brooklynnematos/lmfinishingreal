import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, ThumbsUp, Users } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const About = () => {
  return (
    <div className="w-full">
      <SEOHead
        title="About Us"
        description="Learn about LM Finishing and Construction, Utah's trusted experts in home renovation and construction. With over 8 years of experience serving Utah County, Salt Lake County, and surrounding areas."
        canonicalUrl="https://lmfinishingandconstruction.com/about"
      />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-[#213555]" 
        aria-label="About LM Finishing and Construction"
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
              About LM Finishing and Construction
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-white max-w-3xl mx-auto"
            >
              Building dreams and transforming spaces with expertise, dedication, and unmatched craftsmanship.
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
            <p className="text-xl text-gray-800 leading-relaxed">
              At LM Finishing and Construction, our mission is to elevate the art of home improvement through exceptional craftsmanship, innovative design, and unwavering commitment to customer satisfaction. We strive to transform every space into a masterpiece that reflects our clients' vision while maintaining the highest standards of quality and professionalism in every project we undertake.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="values-heading" className="text-3xl font-bold text-[#213555] mb-4">Our Values</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The principles that guide our work and relationships with clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description: "We never compromise on the quality of our work, using only the finest materials and proven techniques."
              },
              {
                title: "Integrity",
                description: "Honesty and transparency are at the core of everything we do, from pricing to project execution."
              },
              {
                title: "Innovation",
                description: "We stay ahead of industry trends and bring creative solutions to every renovation challenge."
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
                alt="Leonardo Matos, Owner of LM Finishing and Construction"
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
              <h3 className="text-xl text-gray-700">Owner & Master Craftsman</h3>
              <p className="text-lg text-gray-800">
                I am the owner and founder of LM Finishing and Construction, a Utah-based company established in 2021. With over eight years of experience in the industry, I specialize in a wide range of finishing and construction services. Known for my keen attention to detail and dedication to quality, I take pride in delivering exceptional craftsmanship that exceeds client expectations.
              </p>
              <p className="text-lg text-gray-800">
                My approach is built on reliability, integrity, and a deep understanding of each client's unique needs. I have fostered strong relationships with both clients and industry professionals, earning a reputation for excellence and trustworthiness. Whether you're looking for top-tier finishing services or a skilled contractor to bring your vision to life, my team and I are ready to deliver outstanding results.
              </p>

              {/* Experience & Projects Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-gray-50 p-6 rounded-lg text-center" role="status">
                  <div className="text-2xl font-bold text-[#213555] mb-2" aria-label="Years of Experience">8+</div>
                  <div className="text-gray-700">Years Experience</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center" role="status">
                  <div className="text-2xl font-bold text-[#213555] mb-2" aria-label="Completed Projects">500+</div>
                  <div className="text-gray-700">Projects Completed</div>
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