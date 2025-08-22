import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      category: "Utah Service Areas & Coverage",
      questions: [
        {
          question: "What areas in Utah do you serve?",
          answer: "We proudly serve Utah County (Provo, Orem, American Fork, Pleasant Grove, Lehi, Spanish Fork, Saratoga Springs, Eagle Mountain), Salt Lake County (Salt Lake City, Sandy, West Valley City, South Jordan, Draper, Millcreek, Murray, Cottonwood Heights), Davis County (Layton, Bountiful, Farmington, Kaysville, Syracuse, Centerville), Wasatch County (Heber City, Midway, Charleston), and Summit County (Park City, Coalville, Kamas)."
        },
        {
          question: "Do you travel to rural Utah areas?",
          answer: "Yes! We serve rural areas within our coverage zones including mountain communities in Wasatch and Summit Counties. Travel fees may apply for locations more than 45 minutes from our Utah County base, but we're happy to discuss your project regardless of location."
        },
        {
          question: "What's your response time for different Utah areas?",
          answer: "24-hour response"
        }
      ]
    },
    {
      category: "Utah Basement Finishing",
      questions: [
        {
          question: "How much does basement finishing cost in Utah?",
          answer: "Utah basement finishing typically ranges from $25,000-$75,000 depending on size, features, and finishes. A basic 1,000 sq ft basement runs $25-35k, while luxury finishes with bathrooms and bars can reach $50-75k. We provide detailed free estimates for all Utah basement projects."
        },
        {
          question: "How long does basement finishing take in Utah?",
          answer: "Most Utah basement finishing projects take 4-8 weeks. Timeline depends on square footage, complexity, permit approval, and weather. We handle all Utah County, Salt Lake County, and other local permits to keep your project on schedule."
        },
        {
          question: "Do you handle Utah basement permits and inspections?",
          answer: "Absolutely! We handle all permit applications and coordinate inspections with Utah County, Salt Lake County, Davis County, Wasatch County, and Summit County building departments. Our team knows all local codes and ensures compliance."
        },
        {
          question: "Can you finish basements in older Utah homes?",
          answer: "Yes! We specialize in finishing basements in older Utah homes, including those built in the 1960s-1980s. We address common issues like low ceilings, outdated electrical, and moisture concerns while bringing everything up to current Utah building codes."
        }
      ]
    },
    {
      category: "Utah Custom Carpentry & Trim Work",
      questions: [
        {
          question: "How much does custom trim cost in Utah?",
          answer: "Utah custom trim costs range from $8-25 per linear foot installed. Basic baseboards: $8-12/ft, standard crown molding: $15-25/ft, complex multi-piece crown: $25-45/ft. Material choice (pine vs. hardwood) and complexity significantly affect pricing."
        },
        {
          question: "What's the difference between a Utah finish carpenter and handyman?",
          answer: "Utah finish carpenters have specialized training in precision joinery, custom trim installation, and detailed woodwork. They use professional-grade tools and understand Utah's climate effects on wood. Handymen handle basic repairs but lack the expertise for complex custom carpentry."
        },
        {
          question: "Do you work with other Utah contractors?",
          answer: "Yes! We partner with general contractors throughout Utah County, Salt Lake County, and surrounding areas. We specialize in finish carpentry, custom trim work, and detailed millwork for residential projects. Many Utah contractors rely on our expertise."
        },
        {
          question: "How does Utah's climate affect custom trim work?",
          answer: "Utah's dry climate causes wood movement and expansion/contraction. Our experienced Utah finish carpenters account for this in material selection, installation techniques, and joint design to prevent gaps and ensure long-lasting results."
        }
      ]
    },
    {
      category: "Utah Home Renovations",
      questions: [
        {
          question: "What home renovations add the most value in Utah?",
          answer: "In Utah's market, kitchen remodels (70-80% ROI), bathroom upgrades (60-70% ROI), basement finishing (60-80% ROI), and quality trim work (70-85% ROI) add the most value. Utah's competitive real estate market rewards quality improvements."
        },
        {
          question: "Do you handle Utah building permits for renovations?",
          answer: "Yes! We handle all permit applications for Utah County, Salt Lake County, Davis County, Wasatch County, and Summit County. We're familiar with each jurisdiction's requirements and ensure your renovation meets all Utah building standards."
        },
        {
          question: "Can you work around my family's schedule?",
          answer: "Absolutely! We understand Utah families need flexibility. We offer evening and weekend consultations, work around school schedules, and can phase projects to minimize disruption. Communication is key to successful Utah home renovations."
        },
        {
          question: "How do you handle dust and cleanup during Utah renovations?",
          answer: "We use dust barriers, HEPA filtration, and daily cleanup protocols. Utah's dry climate means extra attention to dust control. We protect your belongings, maintain clean work areas, and do thorough final cleanup."
        }
      ]
    },
    {
      category: "Pricing & Estimates",
      questions: [
        {
          question: "Do you provide free estimates in Utah?",
          answer: "Yes! We provide detailed free estimates for all Utah projects. Our estimates include materials, labor, timeline, permits, and all costs upfront. We serve Utah County, Salt Lake County, and surrounding areas with no-obligation consultations."
        },
        {
          question: "How accurate are your Utah project estimates?",
          answer: "Our estimates are typically within 5-10% of final costs. We provide detailed breakdowns and only adjust for client-requested changes or unforeseen conditions. Our Utah experience helps us anticipate potential issues and price accordingly."
        },
      ]
    },
    {
      category: "Licensing & Insurance",
      questions: [
        {
          question: "Are you licensed in Utah?",
          answer: "Yes! We're fully licensed residential contractors in Utah. Our license covers all work we perform in Utah County, Salt Lake County, Davis County, Wasatch County, and Summit County. You can verify our license with Utah Division of Occupational and Professional Licensing."
        },
        {
          question: "What insurance do you carry for Utah projects?",
          answer: "We carry comprehensive liability insurance ($1M+), workers' compensation, and bonding. This protects Utah homeowners from liability if accidents occur on your property. We provide certificates of insurance upon request."
        },
        {
          question: "Do your subcontractors have Utah licenses?",
          answer: "Yes! All our subcontractors are licensed and insured Utah professionals. We only work with electricians, plumbers, and other trades who meet Utah licensing requirements and carry proper insurance."
        }
      ]
    },
    {
      category: "Project Process & Timeline",
      questions: [
        {
          question: "What's your typical Utah project process?",
          answer: "1) Free consultation at your Utah property, 2) Custom design and detailed estimate, 3) Permit applications (if needed), 4) Material ordering and scheduling, 5) Construction with regular updates, 6) Final inspection and walkthrough. We keep Utah homeowners informed throughout."
        },
        {
          question: "How do Utah weather conditions affect project timelines?",
          answer: "Utah's generally favorable weather allows year-round interior work. Winter projects may have slight delays for exterior work, but basement finishing and interior renovations continue normally. We plan around Utah's seasonal patterns."
        },
        {
          question: "What happens if there are delays on my Utah project?",
          answer: "We communicate immediately about any delays and provide updated timelines. Common Utah delays include permit processing, material delivery, or weather for exterior work. We work to minimize impact and keep projects moving."
        },
        {
          question: "Do you clean up after Utah construction projects?",
          answer: "Yes! Daily cleanup and thorough final cleanup are included. We remove all debris, vacuum/sweep work areas, and leave your Utah home clean and ready to enjoy. Dumpster rental and disposal fees are included in our estimates."
        }
      ]
    }
  ];

  // Schema markup for FAQ page
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category => 
      category.questions.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  };

  return (
    <div className="w-full">
      <SEOHead
        title="Utah Contractor FAQ - Basement Finishing, Custom Carpentry & Home Renovation Questions"
        description="Get answers to frequently asked questions about Utah basement finishing, custom carpentry, home renovations, and contractor services. Serving Utah County, Salt Lake County, and surrounding areas."
        canonicalUrl="https://lmfinishingandconstruction.com/faq"
      />
      
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-[#213555]"
        aria-label="Frequently Asked Questions About Utah Construction Services"
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
              Utah Contractor FAQ
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-white max-w-3xl mx-auto"
            >
              Get answers to common questions about basement finishing, custom carpentry, home renovations, and contractor services throughout Utah County, Salt Lake County, and surrounding areas.
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-[#213555] mb-6 border-b-2 border-[#213555] pb-2">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div
                      key={questionIndex}
                      className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${globalIndex}`}
                      >
                        <h3 className="text-lg font-semibold text-[#213555] pr-4">
                          {faq.question}
                        </h3>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-[#213555] flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-[#213555] flex-shrink-0" />
                        )}
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            id={`faq-answer-${globalIndex}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4">
                              <p className="text-gray-700 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#213555]" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-3xl font-bold text-white mb-6">
            Still Have Questions About Your Utah Project?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Contact us for personalized answers and your free estimate.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-[#213555] px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Your Free Estimate
            </a>
            <a
              href="tel:+13855008437"
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-[#213555] transition-colors"
            >
              Call (385) 500-8437
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;