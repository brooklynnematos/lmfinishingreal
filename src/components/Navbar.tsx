import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Facebook, Instagram } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Locations', path: '/locations' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://i.postimg.cc/jdrRcPtd/Logo.png" 
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