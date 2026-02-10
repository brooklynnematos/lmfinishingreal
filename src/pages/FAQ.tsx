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
      category: "Service Areas & Coverage",
      questions: [
        {
          question: "What areas do you serve?",
          answer: "We proudly serve multiple markets across the country. Our primary areas include the Washington DC Metro Area (DC, Northern Virginia, Maryland), and Utah (Utah County, Salt Lake County, Davis County, Wasatch County, and Summit County). Contact us to confirm service availability in your specific location."
        },
        {
          question: "Do you travel to areas outside your primary markets?",
          answer: "Yes! We serve areas within our coverage zones. Travel fees may apply for locations outside our primary service areas, but we're happy to discuss your project regardless of location. Contact us to learn more about service availability in your area."
        },
        {
          question: "What's your typical response time?",
          answer: "Response times vary by location. Primary market areas: Same-day to 24-hour response. Extended service areas: 24-48 hour response. Emergency repairs receive priority scheduling across all areas. Contact us for specific response times in your location."
        }
      ]
    },
    {
      category: "Basement Finishing",
      questions: [
        {
          question: "How much does basement finishing cost?",
          answer: "Basement finishing typically ranges from $25,000-$75,000 depending on size, features, and finishes. A basic 1,000 sq ft basement runs $25-35k, while luxury finishes with bathrooms and bars can reach $50-75k. We provide detailed free estimates for all basement projects in our service areas."
        },
        {
          question: "How long does basement finishing take?",
          answer: "Most basement finishing projects take 4-8 weeks. Timeline depends on square footage, complexity, permit approval, and local conditions. We handle all permit applications and coordinate with local building departments to keep your project on schedule."
        },
        {
          question: "What makes professional basement finishing important?",
          answer: "Professional basement finishing requires understanding of local building codes, proper moisture control techniques, appropriate insulation for your climate, and compliance with regional requirements. Our experienced contractors understand the unique conditions in each market we serve."
        },
        {
          question: "Do you handle basement permits and inspections?",
          answer: "Absolutely! We handle all permit applications and coordinate inspections with local building departments in our service areas. Our team is familiar with local codes and ensures your project meets all requirements."
        },
        {
          question: "Can you finish basements in older homes?",
          answer: "Yes! We specialize in finishing basements in older homes, including those built in the 1960s-1980s. We address common issues like low ceilings, outdated electrical, and moisture concerns while bringing everything up to current building codes."
        }
      ]
    },
    {
      category: "Custom Carpentry & Trim Work",
      questions: [
        {
          question: "How much does custom trim cost?",
          answer: "Custom trim costs typically range from $8-25 per linear foot installed. Basic baseboards: $8-12/ft, standard crown molding: $15-25/ft, complex multi-piece crown: $25-45/ft. Material choice (pine vs. hardwood) and complexity significantly affect pricing. Costs may vary by region."
        },
        {
          question: "What's the difference between a finish carpenter and handyman?",
          answer: "Finish carpenters have specialized training in precision joinery, custom trim installation, and detailed woodwork. They use professional-grade tools and understand how climate affects wood materials. Handymen handle basic repairs but lack the expertise for complex custom carpentry projects."
        },
        {
          question: "Do you work with other contractors?",
          answer: "Yes! We partner with general contractors throughout our service areas. We specialize in finish carpentry, custom trim work, and detailed millwork for residential projects. Many contractors rely on our expertise for their high-end projects."
        },
        {
          question: "How does climate affect custom trim work?",
          answer: "Climate conditions cause wood movement and expansion/contraction. Our experienced finish carpenters account for regional climate in material selection, installation techniques, and joint design to prevent gaps and ensure long-lasting results."
        }
      ]
    },
    {
      category: "Home Renovations",
      questions: [
        {
          question: "What home renovations add the most value?",
          answer: "Kitchen remodels (70-80% ROI), bathroom upgrades (60-70% ROI), basement finishing (60-80% ROI), and quality trim work (70-85% ROI) typically add the most value. Competitive real estate markets reward quality improvements and professional craftsmanship."
        },
        {
          question: "Do you handle building permits for renovations?",
          answer: "Yes! We handle all permit applications and coordinate with local building departments in our service areas. We're familiar with jurisdictional requirements and ensure your renovation meets all building standards."
        },
        {
          question: "Can you work around my family's schedule?",
          answer: "Absolutely! We understand families need flexibility. We offer evening and weekend consultations, work around busy schedules, and can phase projects to minimize disruption. Clear communication is key to successful home renovations."
        },
        {
          question: "How do you handle dust and cleanup during renovations?",
          answer: "We use dust barriers, HEPA filtration, and daily cleanup protocols to minimize mess. We protect your belongings, maintain clean work areas, and perform thorough final cleanup when the project is complete."
        }
      ]
    },
    {
      category: "Pricing & Estimates",
      questions: [
        {
          question: "Do you provide free estimates?",
          answer: "Yes! We provide detailed free estimates for all projects in our service areas. Our estimates include materials, labor, timeline, permits, and all costs upfront with no-obligation consultations."
        },
        {
          question: "How accurate are your project estimates?",
          answer: "Our estimates are typically within 5-10% of final costs. We provide detailed breakdowns and only adjust for client-requested changes or unforeseen conditions. Our experience helps us anticipate potential issues and price accordingly."
        },
        {
          question: "Do you offer financing for home projects?",
          answer: "We work with financing partners and can help connect you with options. Many homeowners use home equity loans, personal loans, or contractor financing programs for larger renovation projects."
        },
        {
          question: "What payment schedule do you use?",
          answer: "We follow industry best practices and local regulations for payment schedules. Payments are tied to project milestones, not calendar dates. Final payment is due upon completion and your satisfaction."
        }
      ]
    },
    {
      category: "Licensing & Insurance",
      questions: [
        {
          question: "Are you properly licensed?",
          answer: "Yes! We're fully licensed residential contractors in all markets we serve. Our licenses cover all work we perform, and you can verify our credentials with local licensing authorities. We maintain all required state and local licenses."
        },
        {
          question: "What insurance do you carry?",
          answer: "We carry comprehensive liability insurance ($1M+), workers' compensation, and bonding. This protects homeowners from liability if accidents occur on your property. We provide certificates of insurance upon request."
        },
        {
          question: "Do your subcontractors have proper licenses?",
          answer: "Yes! All our subcontractors are licensed and insured professionals. We only work with electricians, plumbers, and other trades who meet local licensing requirements and carry proper insurance."
        }
      ]
    },
    {
      category: "Project Process & Timeline",
      questions: [
        {
          question: "What's your typical project process?",
          answer: "1) Free consultation at your property, 2) Custom design and detailed estimate, 3) Permit applications (if needed), 4) Material ordering and scheduling, 5) Construction with regular updates, 6) Final inspection and walkthrough. We keep homeowners informed throughout the entire process."
        },
        {
          question: "How do weather conditions affect project timelines?",
          answer: "Interior work can typically continue year-round in most climates. Winter projects may have slight delays for exterior work, but basement finishing and interior renovations continue normally. We plan around seasonal patterns and weather conditions in your area."
        },
        {
          question: "What happens if there are delays on my project?",
          answer: "We communicate immediately about any delays and provide updated timelines. Common delays include permit processing, material delivery, or weather for exterior work. We work to minimize impact and keep projects moving forward."
        },
        {
          question: "Do you clean up after construction projects?",
          answer: "Yes! Daily cleanup and thorough final cleanup are included in all projects. We remove all debris, vacuum/sweep work areas, and leave your home clean and ready to enjoy. Dumpster rental and disposal fees are included in our estimates."
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
        title="Contractor FAQ - Basement Finishing, Custom Carpentry & Home Renovation Questions"
        description="Get answers to frequently asked questions about basement finishing, custom carpentry, home renovations, and contractor services. Professional craftsmanship across all our service areas."
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
        aria-label="Frequently Asked Questions About Construction Services"
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
              Contractor FAQ
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-white max-w-3xl mx-auto"
            >
              Get answers to common questions about basement finishing, custom carpentry, home renovations, and contractor services throughout our service areas.
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
            Still Have Questions About Your Project?
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