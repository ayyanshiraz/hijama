// src/components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Service links for the dropdown
const serviceLinks = [
  { name: 'Blood Cupping (Hijama)', href: '/services/blood-cupping' },
  { name: 'Dry & Massage Cupping', href: '/services/dry-cupping' },
  { name: 'Hijama for Pain Relief', href: '/services/hijama-for-pain-relief' },
  { name: 'Hijama for Internal Health', href: '/services/hijama-for-internal-health' },
  { name: 'Hijama for Sports Recovery', href: '/services/hijama-for-sports-recovery' }, // Corrected href
  { name: 'Hijama for Detox & Wellness', href: '/services/hijama-for-detox' },
  { name: 'Fire Cupping', href: '/services/fire-cupping' },
  { name: 'Female Face Hijama (Jonk)', href: '/services/female-face-hijama' },
  { name: 'Beauty Hijama', href: '/services/beauty-hijama' },
  { name: 'Hijama for Breast Cysts', href: '/services/breast-cysts' },
  { name: 'Hijama for Baldness', href: '/services/hijama-for-baldness' },
  { name: 'Hijama for Fistula', href: '/services/hijama-for-fistula' },
  { name: 'Hijama for PCOS', href: '/services/pcos' },
];

// Main navigation links
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services', subLinks: serviceLinks },
  { name: 'Contact', href: '/contact' },
  // { name: 'Blog', href: '/blog' }, // Example if Blog link is needed
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // For mobile dropdown
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false); // For desktop dropdown

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    // Close mobile menu on resize if screen becomes larger
    const handleResize = () => {
        if (window.innerWidth >= 768) { // md breakpoint
            setIsMenuOpen(false);
            setIsServicesOpen(false);
        }
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
    }
  }, []);

  const showBackground = isScrolled || isMenuOpen || isDesktopServicesOpen;

  // Function to close all menus
  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsDesktopServicesOpen(false); // Also close desktop dropdown if needed
  };


  return (
    <header
      // Added min-h-[60px] or similar if needed to prevent layout shift when bg appears
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out ${
        showBackground ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      {/* Adjusted padding */}
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand Name - Responsive Text Size */}
          <Link href="/" onClick={closeAllMenus} className={`text-xl sm:text-2xl font-bold transition-colors ${showBackground ? 'text-gray-800' : 'text-white'}`}>
            Al Madina Hijama Center
          </Link>

          {/* Desktop Navigation */}
          {/* Adjusted spacing */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group" // Use group hover for dropdown
                onMouseEnter={() => link.subLinks && setIsDesktopServicesOpen(true)}
                onMouseLeave={() => link.subLinks && setIsDesktopServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  onClick={() => !link.subLinks && closeAllMenus()} // Close if not a dropdown trigger
                  // Adjusted text size and hover effect
                  className={`transition-colors text-base lg:text-lg flex items-center py-1 ${
                    showBackground ? 'text-gray-600 hover:text-teal-600' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {link.name}
                  {link.subLinks && <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDesktopServicesOpen ? 'rotate-180' : ''}`} />}
                </Link>
                {/* Desktop Dropdown */}
                {link.subLinks && (
                  <AnimatePresence>
                    {isDesktopServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        // Adjusted width and positioning
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 bg-white rounded-md shadow-lg overflow-hidden ring-1 ring-black ring-opacity-5"
                      >
                        <div className="flex flex-col py-1">
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              onClick={closeAllMenus} // Close all menus on sublink click
                               // Adjusted padding and text size
                              className="px-4 py-2 text-sm text-gray-700 hover:bg-teal-600 hover:text-white transition-colors"
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            {/* Call Us Button - Responsive Styles */}
            <a
              href="tel:+923007598000"
               // Adjusted padding and text size
              className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-[#FF6900] text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:brightness-90 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Call Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          {/* Adjusted padding/margin if needed */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`transition-colors p-1 ${showBackground ? 'text-gray-800' : 'text-white'}`}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />} {/* Adjusted size */}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            // Ensure background color is set when open
            className="md:hidden mt-2 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="flex flex-col items-stretch divide-y divide-gray-100"> {/* Use items-stretch */}
              {navLinks.map((link) => (
                <div key={link.name} className="w-full text-center">
                  {link.subLinks ? (
                    <>
                      {/* Container for Link + Toggle Button */}
                       {/* Adjusted padding */}
                      <div className="flex justify-between items-center w-full px-4 py-3">
                         {/* Link for the text part - Navigates to /services */}
                        <Link
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)} // Close menu on navigation
                           // Adjusted text size
                          className="text-gray-700 hover:text-teal-600 text-base font-medium flex-grow text-center mr-2"
                        >
                          {link.name}
                        </Link>
                         {/* Button ONLY for the icon - Toggles dropdown */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsServicesOpen(!isServicesOpen);
                          }}
                          className="text-gray-700 hover:text-teal-600 p-1 flex-shrink-0"
                          aria-label="Toggle services submenu"
                        >
                          <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                       {/* Mobile Submenu Dropdown */}
                      <AnimatePresence>
                        {isServicesOpen && (
                            <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden bg-gray-50 border-t border-gray-100" // Background for dropdown items
                            >
                            <div className="flex flex-col items-stretch space-y-0 py-2"> {/* Removed space-y */}
                                {link.subLinks.map((subLink) => (
                                <Link
                                    key={subLink.name}
                                    href={subLink.href}
                                    onClick={closeAllMenus} // Close menu when sub-link clicked
                                     // Adjusted text size and padding
                                    className="text-gray-600 hover:text-white hover:bg-teal-600 text-sm py-2.5 px-4 text-center transition-colors"
                                >
                                    {subLink.name}
                                </Link>
                                ))}
                            </div>
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </>
                  ) : (
                       // Regular link rendering (Home, About Us, Contact)
                       // Adjusted text size and padding
                      <Link
                      href={link.href}
                      onClick={closeAllMenus}
                      className="text-gray-700 hover:text-teal-600 text-base font-medium py-3 block w-full"
                      >
                      {link.name}
                      </Link>
                  )}
                </div>
              ))}
              {/* Call Us Button for Mobile Menu */}
              <div className="p-4">
                  <a
                    href="tel:+923007598000"
                    // Adjusted padding and text size
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-[#FF6900] text-white text-base font-semibold rounded-lg shadow-md hover:brightness-90 transition-colors duration-300"
                    onClick={closeAllMenus} // Close menu on click
                 >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us Now
                  </a>
              </div>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;