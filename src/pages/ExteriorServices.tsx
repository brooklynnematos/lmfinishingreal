import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Award,
  Shield,
  TreePine,
  Image as ImageIcon
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ImageOptimizer from '../components/ImageOptimizer';
import { portfolioImages } from '../data/images';
import { services as servicesData } from '../data/content';

const ExteriorServices = () => {
  const serviceData = servicesData.find((s) => s.title === 'Exterior Services');

  const heroImage =
    serviceData?.imageUrl ||
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c';

  const exteriorImages = portfolioImages?.Exterior ?? [];

  const services = [
    'Custom deck construction and design',
    'Patio installation and hardscaping',
    'Pergolas and outdoor structures',
    'Exterior trim work and siding',
    'Outdoor kitchen and entertainment areas',
    'Gazebos and pavilions',
    'Fence installation and repair',
    'Outdoor storage solutions'
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Site Assessment',
      description:
        'We evaluate your outdoor space, discuss your vision, and assess site conditions for optimal design.'
    },
    {
      step: '2',
      title: 'Custom Design',
      description:
        "Create detailed plans that maximize your outdoor space while complementing your home's architecture."
    },
    {
      step: '3',
      title: 'Expert Construction',
      description:
        'Professional construction using quality materials and proven techniques for lasting outdoor structures.'
    },
    {
      step: '4',
      title: 'Final Inspection',
      description:
        'Thorough inspection and walkthrough to ensure your outdoor space exceeds expectations.'
    }
  ];

  const benefits = [
    {
      icon: <TreePine className="h-8 w-8 text-emerald-600" />,
      title: 'Outdoor Living Expertise',
      description:
        'Specialized knowledge in creating functional and beautiful outdoor spaces'
    },
    {
      icon: <Award className="h-8 w-8 text-emerald-600" />,
      title: 'Quality Materials',
      description:
        'Premium materials selected for durability in all weather conditions'
    },
    {
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      title: 'Weather-Resistant Construction',
      description:
        'Built to withstand the elements with proper drainage and ventilation'
    }
  ];

  return (
    <div className="w-full">
      <SEOHead
        title="Exterior Construction Services - Decks, Patios & Outdoor Living"
        description="Expert exterior construction services. Custom deck construction, patio installation, pergolas, and outdoor living spaces. Quality materials and craftsmanship."
        canonicalUrl="https://lmfinishingandconstruction.com/exterior-services"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 to-emerald-700 py-24">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImage}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6 text-4xl font-bold text-white md:text-5xl"
              >
                Create Beautiful Outdoor Living Spaces
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8 text-xl text-emerald-100"
              >
                Expert exterior construction services for your home. Custom
                decks, patios, pergolas, and outdoor structures that enhance
                your home's value and your quality of life.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-center rounded-md bg-white px-8 py-3 text-lg font-medium text-emerald-900 transition-colors hover:bg-emerald-50"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <a
                  href="tel:+13855008437"
                  className="flex items-center justify-center rounded-md border-2 border-white px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-white hover:text-emerald-900"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (385) 500-8437
                </a>
              </motion.div>
            </div>

            <div className="relative">
              <ImageOptimizer
                src={heroImage}
                alt="Custom deck and outdoor living space"
                className="h-[400px] w-full rounded-lg object-cover shadow-2xl"
                width={800}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Why Choose Our Exterior Construction Team
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              Specialized expertise in creating outdoor spaces that stand the
              test of time
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="rounded-lg bg-white p-8 text-center shadow-lg"
              >
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Exterior Construction Services
              </h2>
              <p className="mb-8 text-lg text-gray-700">
                From custom decks to complete outdoor living spaces, we create
                exterior structures that enhance your home's functionality and
                curb appeal.
              </p>

              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 text-emerald-600" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                alt="Outdoor living space with pergola"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Our Exterior Construction Process
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              From concept to completion, we ensure your outdoor project is
              built to last
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="rounded-lg bg-white p-6 text-center shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Quote Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Quality Materials & Custom Pricing
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
              We work with a variety of decking materials to match your style,
              budget, and maintenance preferences. Pricing varies based on
              materials, deck size, design complexity, and site conditions.
            </p>
          </div>

          <div className="mb-8 rounded-lg bg-emerald-50 p-8">
            <h3 className="mb-6 text-center text-xl font-semibold text-emerald-900">
              Deck Material Options
            </h3>

            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-3 font-semibold text-emerald-800">
                  Natural Wood
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-600"></span>
                    <span className="text-gray-700">
                      Pressure-Treated Pine - Economical with natural appeal
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-600"></span>
                    <span className="text-gray-700">
                      Cedar - Natural resistance to insects and weather
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-emerald-800">
                  Composite Options
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-600"></span>
                    <span className="text-gray-700">
                      Composite Decking - Low maintenance with wood-like look
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-600"></span>
                    <span className="text-gray-700">
                      PVC Decking - Premium durability and minimal upkeep
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-emerald-200 pt-6">
              <h4 className="mb-3 text-center font-semibold text-emerald-900">
                Every Project Includes
              </h4>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <ul className="space-y-2">
                  <li className="flex items-center text-emerald-800">
                    <CheckCircle className="mr-2 h-5 w-5 text-emerald-600" />
                    Professional design and planning
                  </li>
                  <li className="flex items-center text-emerald-800">
                    <CheckCircle className="mr-2 h-5 w-5 text-emerald-600" />
                    All permits and inspections
                  </li>
                  <li className="flex items-center text-emerald-800">
                    <CheckCircle className="mr-2 h-5 w-5 text-emerald-600" />
                    Quality materials and hardware
                  </li>
                </ul>

                <ul className="space-y-2">
                  <li className="flex items-center text-emerald-800">
                    <CheckCircle className="mr-2 h-5 w-5 text-emerald-600" />
                    Expert construction and finishing
                  </li>
                  <li className="flex items-center text-emerald-800">
                    <CheckCircle className="mr-2 h-5 w-5 text-emerald-600" />
                    Complete cleanup and debris removal
                  </li>
                  <li className="flex items-center text-emerald-800">
                    <CheckCircle className="mr-2 h-5 w-5 text-emerald-600" />
                    1-year warranty on workmanship
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="mb-6 text-lg text-gray-700">
              Contact us to discuss your exterior construction project and
              receive a detailed estimate based on your specific needs.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center rounded-md bg-emerald-600 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-emerald-700"
            >
              Get Your Free Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Seasonal Considerations */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Best Times for Exterior Projects
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              Planning your outdoor construction for optimal results
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 text-center shadow-lg">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Spring
              </h3>
              <p className="mb-3 text-gray-600">March - May</p>
              <p className="text-sm text-gray-700">
                Ideal for planning and starting projects. Mild weather and
                longer days.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-lg">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Summer
              </h3>
              <p className="mb-3 text-gray-600">June - August</p>
              <p className="text-sm text-gray-700">
                Peak construction season. Best weather but highest demand.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-lg">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Fall
              </h3>
              <p className="mb-3 text-gray-600">September - November</p>
              <p className="text-sm text-gray-700">
                Excellent conditions and better availability. Great for
                completion before winter.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-lg">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Winter
              </h3>
              <p className="mb-3 text-gray-600">December - February</p>
              <p className="text-sm text-gray-700">
                Planning season. Design and permits for spring construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Our Exterior Construction Work
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              Explore our completed deck, patio, and outdoor living projects
            </p>
          </div>

          {exteriorImages.length > 0 ? (
            <>
              <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {exteriorImages.slice(0, 6).map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="overflow-hidden rounded-lg bg-white shadow-lg"
                  >
                    <ImageOptimizer
                      src={image.url}
                      alt={image.title}
                      className="h-80 w-full bg-gray-100 object-contain"
                      width={600}
                      height={400}
                    />
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-semibold text-gray-900">
                        {image.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {image.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  to="/portfolio?category=Exterior"
                  className="inline-flex items-center rounded-md bg-emerald-600 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-emerald-700"
                >
                  View All Exterior Projects
                  <ImageIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </>
          ) : (
            <div className="rounded-lg bg-gray-100 p-10 text-center">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Exterior project photos coming soon
              </h3>
              <p className="text-gray-600">
                Contact us to see examples of our exterior construction work.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-white">
            Ready to Enhance Your Outdoor Living Space?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-emerald-100">
            Contact us today to discuss your exterior construction project and
            get your detailed estimate
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-lg font-medium text-emerald-600 transition-colors hover:bg-emerald-50"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <a
              href="tel:+13855008437"
              className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-white hover:text-emerald-600"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (385) 500-8437
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExteriorServices;