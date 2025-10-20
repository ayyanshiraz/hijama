'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if the user has already consented.
    // We wrap this in a try-catch block for environments where localStorage might not be available.
    try {
      const cookieConsent = localStorage.getItem('cookie_consent');
      if (!cookieConsent) {
        setShowBanner(true);
      }
    } catch (error) {
      console.error("Could not access localStorage:", error);
      // Decide on a fallback behavior if localStorage is not accessible
      // For now, we'll just show the banner.
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('cookie_consent', 'true');
      setShowBanner(false);
    } catch (error) {
       console.error("Could not set item in localStorage:", error);
    }
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#1E4137] text-white shadow-lg"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-center sm:text-left">
              We use cookies to enhance your browsing experience and analyze our traffic. By clicking “Accept”, you consent to our use of cookies. Read our{' '}
              <a href="/privacy-policy" className="font-semibold underline hover:text-teal-300 transition-colors">
                Privacy Policy
              </a>.
            </p>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-[#FF6900] text-white font-bold rounded-lg shadow-md hover:brightness-90 transition-all duration-300 flex-shrink-0"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;

