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
      "description": "DMV-area residential contractor specializing in custom woodwork, finish carpentry, and remodels"
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
        "@type": "Place",
        "name": "Washington DC Metro Area"
      }
    }
  };

  return (
    <div className="w-full">
      <SEOHead
        title="About DMV's Premier Finish Carpenter - Leonardo Matos"
        description="Learn about Leonardo Matos, owner of LM Finishing and Construction, DMV's trusted expert finish carpenter with over 8 years of experience in custom carpentry, basement finishing, and home renovations serving Washington DC, Maryland, and Virginia."
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
        aria-label="About LM Finishing and Construction - DMV's Premier Finish Carpenter"
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
              About DMV's Premier Finish Carpenter
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-white max-w-3xl mx-auto"
            >
              Building dreams and transforming DMV homes with expert finish carpentry, custom woodwork, and proven systems developed through years of custom home experience.
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
              LM Finishing and Construction is a residential contractor serving the DMV area, specializing in custom woodwork, finish carpentry, basement finishing, and complete home remodels. Our mission is to elevate the art of home improvement through exceptional craftsmanship, proven systems, and unwavering commitment to customer satisfaction.
            </p>
            <p className="text-lg text-gray-700">
              We serve homeowners and general contractors throughout Washington DC, Maryland, and Virginia, transforming every space into a masterpiece that reflects our clients' vision using systems and expertise developed through years of custom home experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="values-heading" className="text-3xl font-bold text-[#213555] mb-4">Why DMV Homeowners Choose Our Finish Carpentry Team</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The principles that guide our finish carpentry work and relationships with clients throughout the DMV area.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Craftsmanship",
                description: "We never compromise on the quality of our finish carpentry work, using only the finest materials and proven techniques developed through years of custom home experience."
              },
              {
                title: "Honest Contractors",
                description: "Honesty and transparency are at the core of everything we do as contractors, from accurate pricing to clear project timelines."
              },
              {
                title: "Proven Systems",
                description: "We bring established systems and creative solutions to every renovation challenge, refined through years of custom home construction experience."
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
                alt="Leonardo Matos, Owner and Master Finish Carpenter at LM Finishing and Construction, DMV's premier custom carpentry contractor"
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
              <h3 className="text-xl text-gray-700">Owner & Master Finish Carpenter</h3>
              <p className="text-lg text-gray-800">
                I am the owner and founder of LM Finishing and Construction, a residential contractor now serving the DMV area. With over eight years of experience as a finish carpenter, I specialize in custom woodwork, finish carpentry, basement finishing, and complete home remodels. My expertise was developed through years of custom home construction, creating the proven systems we bring to every project.
              </p>
              <p className="text-lg text-gray-800">
                Known for my keen attention to detail and dedication to quality craftsmanship, I take pride in delivering exceptional finish carpentry work that exceeds client expectations. Whether you're looking for top-tier finish carpentry services or a skilled contractor to bring your remodeling vision to life, my team and I are ready to deliver outstanding results throughout the DMV area.
              </p>

              {/* Experience & Projects Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-gray-50 p-6 rounded-lg text-center" role="status">
                  <div className="text-2xl font-bold text-[#213555] mb-2" aria-label="Years of Finish Carpentry Experience">8+</div>
                  <div className="text-gray-700">Years Experience</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center" role="status">
                  <div className="text-2xl font-bold text-[#213555] mb-2" aria-label="Projects Completed">500+</div>
                  <div className="text-gray-700">Projects Completed</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Expertise Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="expertise-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="expertise-heading" className="text-3xl font-bold text-[#213555] mb-4">
              Proven Systems & Expertise
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our extensive experience in custom home construction has developed proven systems and expertise that we bring to every DMV area project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Home Experience",
                description: "Years of experience in custom home construction, developing systems and expertise for high-end residential projects.",
                icon: "🏔️"
              },
              {
                title: "Building Code Knowledge",
                description: "Extensive knowledge of residential building codes and requirements across multiple jurisdictions and project types.",
                icon: "📋"
              },
              {
                title: "Material Expertise",
                description: "Deep understanding of material selection, quality standards, and installation techniques for lasting results.",
                icon: "🏗️"
              },
              {
                title: "Project Management",
                description: "Proven project management systems ensuring timely completion and clear communication throughout the process.",
                icon: "🌤️"
              },
              {
                title: "Quality Systems",
                description: "Established quality control systems and processes refined through hundreds of successful projects.",
                icon: "🚛"
              },
              {
                title: "Client Relationships",
                description: "Strong relationships with homeowners and general contractors built on reliability, quality, and clear communication.",
                icon: "🤝"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                <h3 className="text-xl font-semibold text-[#213555] mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20" aria-labelledby="testimonials-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="testimonials-heading" className="text-3xl font-bold text-[#213555] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-700">
              Hear from satisfied customers who have experienced our quality craftsmanship and reliable service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Katie G.",
                location: "Homeowner",
                text: "We had a great experience with L&M Construction. Leo was great at communicating and always responded to messages and questions. Through every step of the framing process he made sure we were on the same page. We always felt in the loop and very happy with his work."
              },
              {
                name: "Mark C.",
                location: "Homeowner",
                text: "Leo and his team are wonderful. They did a great job for framing and dry wall in our bedroom. His price is very reasonable and he knows exactly what he is doing. Very organized and a really respectful person."
              },
              {
                name: "Jeff T.",
                location: "Homeowner",
                text: "We are so happy with the work that Leo and his team did on our house! Leo took great care to understand exactly what we wanted and was quick to schedule out his team. The team did phenomenal work and kept in close communication throughout."
              },
              {
                name: "Suzette V.",
                location: "Homeowner",
                text: "Leo was professional, responsive, on time and his work was of high quality. Great communication from start to finish. He installed a residential remodel stair railing. He listened to what I wanted, I got exactly what I wanted."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <div className="font-semibold text-[#213555]">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.location}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;