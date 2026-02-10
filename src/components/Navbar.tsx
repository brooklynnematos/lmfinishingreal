import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceItems = [
    { name: 'All Services', path: '/services' },
    { name: 'Basement Finishing', path: '/basement-finishing' },
    { name: 'Custom Carpentry', path: '/custom-carpentry' },
    { name: 'Home Renovations', path: '/home-renovations' },
    { name: 'Exterior Services', path: '/exterior-services' },
  ];

  const resourceItems = [
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Locations', path: '/locations' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/public/favicon.png"
                alt="LM Finishing and Construction Logo"
                className="h-14 w-auto"
              />
              <span className="ml-2 text-lg font-bold text-black">
                LM Finishing & Construction
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button
                className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                aria-expanded={isResourcesOpen}
                aria-haspopup="true"
              >
                Resources
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isResourcesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                  {resourceItems.map((resource) => (
                    <Link
                      key={resource.name}
                      to={resource.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center ml-2">
              <Link
                to="/contact"
                className="bg-[#4A90E2] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#357ABD] transition-colors ml-2"
              >
                Free Estimate
              </Link>
              <div className="flex space-x-2 ml-2">
                <a href="https://www.facebook.com/lm.fconstruction/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/lm.fconstruction/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Services Menu */}
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="px-3 py-2 text-sm font-medium text-gray-500 uppercase tracking-wide">
                Services
              </div>
              {serviceItems.map((service) => (
                <Link
                  key={service.name}
                  to={service.path}
                  className="text-gray-700 hover:text-primary-600 block px-6 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>

            {/* Mobile Resources Menu */}
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="px-3 py-2 text-sm font-medium text-gray-500 uppercase tracking-wide">
                Resources
              </div>
              {resourceItems.map((resource) => (
                <Link
                  key={resource.name}
                  to={resource.path}
                  className="text-gray-700 hover:text-primary-600 block px-6 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {resource.name}
                </Link>
              ))}
            </div>

            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium bg-[#4A90E2] text-white hover:bg-[#357ABD]"
              onClick={() => setIsOpen(false)}
            >
              Get a Free Estimate
            </Link>
            <div className="flex space-x-4 px-3 py-2">
              <a href="https://www.facebook.com/lm.fconstruction/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/lm.fconstruction/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;