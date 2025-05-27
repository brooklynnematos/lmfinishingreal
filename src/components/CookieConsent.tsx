import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = Cookies.get('cookieConsent');
    if (!hasConsented) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    // Set cookie consent for 1 year
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    setShowBanner(false);
    
    // Initialize Google Analytics after consent
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const handleDecline = () => {
    // Set cookie to remember user's choice but don't enable analytics
    Cookies.set('cookieConsent', 'false', { expires: 365 });
    setShowBanner(false);
    
    // Disable Google Analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50"
          role="alert"
          aria-live="polite"
        >
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <p className="text-gray-700">
                  We use cookies to enhance your browsing experience and analyze site traffic. 
                  By clicking "Accept", you consent to our use of cookies. 
                  See our <a href="/privacy-policy" className="text-[#213555] hover:underline">Privacy Policy</a> for more information.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
                  aria-label="Decline cookies"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="px-6 py-2 bg-[#213555] text-white rounded-md hover:bg-[#182943] transition-colors"
                  aria-label="Accept cookies"
                >
                  Accept
                </button>
                <button
                  onClick={handleDecline}
                  className="text-gray-400 hover:text-gray-600 transition-colors sm:hidden"
                  aria-label="Close cookie banner"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;