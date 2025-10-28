// src/components/CookieBanner.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const cookieConsent = localStorage.getItem('cookie_consent');
      // Show banner only if consent has not been recorded yet
      if (cookieConsent === null) {
        setShowBanner(true);
      }
    } catch (error) {
      console.error("Could not access localStorage:", error);
      // Optionally show banner even if localStorage fails, depending on requirements
      // setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('cookie_consent', 'true');
      setShowBanner(false);
    } catch (error) {
       console.error("Could not set item in localStorage:", error);
       // Hide banner anyway for user experience, although consent isn't stored
       setShowBanner(false);
    }
  };

  const handleDismiss = () => {
    try {
      // Store 'false' or another indicator that consent wasn't given or banner was dismissed
      localStorage.setItem('cookie_consent', 'dismissed'); // Changed from 'false'
      setShowBanner(false);
      // Optional: Disable non-essential cookies/scripts here if consent is implicitly denied by dismissal
    } catch (error) {
       console.error("Could not set item in localStorage:", error);
        // Hide banner anyway for user experience
       setShowBanner(false);
    }
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }} // Start fully below
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }} // Exit fully below
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#1E4137] text-white shadow-lg"
          role="region" // Added role for accessibility
          aria-label="Cookie Consent Banner"
        >
           {/* Adjusted padding for responsiveness */}
          <div className="container mx-auto px-4 py-3 sm:px-6 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 relative">
             {/* Adjusted text size and alignment */}
            <p className="text-xs sm:text-sm text-center sm:text-left flex-grow mb-2 sm:mb-0">
              We use cookies to enhance your browsing experience and analyze our traffic. By clicking “Accept”, you consent to our use of cookies. Read our{' '}
              <a href="/privacy-policy" className="font-semibold underline hover:text-teal-300 transition-colors">
                Privacy Policy
              </a>.
            </p>
            {/* Flex container for button(s) */}
            <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto justify-center sm:justify-end">
              <button
                onClick={handleAccept}
                // Adjusted padding and text size
                className="px-4 py-1.5 sm:px-6 sm:py-2 bg-[#FF6900] text-white text-sm sm:text-base font-bold rounded-lg shadow-md hover:brightness-90 transition-all duration-300"
              >
                Accept
              </button>
               {/* Dismiss button - positioned absolutely within the relative parent */}
              <button
                onClick={handleDismiss}
                aria-label="Dismiss cookie notice"
                 // Adjusted positioning and padding
                className="absolute top-1 right-1 sm:static sm:ml-2 p-1.5 text-gray-300 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/10"
              >
                <X size={18} className="sm:size-20" /> {/* Adjusted icon size */}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;