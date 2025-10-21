'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react'; // <-- Import the X icon

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const cookieConsent = localStorage.getItem('cookie_consent');
      if (cookieConsent === null) {
        setShowBanner(true);
      }
    } catch (error) {
      console.error("Could not access localStorage:", error);
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

  // Renamed handleDecline to handleDismiss for clarity with the icon
  const handleDismiss = () => {
    try {
      // Still store 'false' or another indicator that consent wasn't given
      localStorage.setItem('cookie_consent', 'false');
      setShowBanner(false);
      // Optional: Disable non-essential cookies/scripts here
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
          {/* --- MODIFICATION: Added padding-right for close button spacing --- */}
          <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 relative sm:pr-12 md:pr-16">
            <p className="text-sm text-center sm:text-left flex-grow">
              We use cookies to enhance your browsing experience and analyze our traffic. By clicking “Accept”, you consent to our use of cookies. Read our{' '}
              <a href="/privacy-policy" className="font-semibold underline hover:text-teal-300 transition-colors">
                Privacy Policy
              </a>.
            </p>
            {/* --- MODIFICATION: Added container for just the Accept button --- */}
            <div className="flex-shrink-0 mt-2 sm:mt-0">
               <button
                 onClick={handleAccept}
                 className="px-6 py-2 bg-[#FF6900] text-white font-bold rounded-lg shadow-md hover:brightness-90 transition-all duration-300"
               >
                 Accept
               </button>
             </div>
             {/* --- MODIFICATION: Moved X button outside the flex group, positioned absolutely on larger screens --- */}
            <button
              onClick={handleDismiss}
              aria-label="Dismiss cookie notice" // Accessibility label
              className="absolute top-2 right-2 sm:top-1/2 sm:-translate-y-1/2 sm:right-4 p-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/10" // Icon button styling
            >
              <X size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;