// src/components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
// 1. IMPORT THE NEW SWITCHER COMPONENT
import { LanguageSwitcher } from './LanguageSwitcher'; 

// Service links for the dropdown
const serviceLinks = [
  { name: 'Wet Cupping (Hijama)', href: '/services/wet-cupping' },
  { name: 'Dry & Massage Cupping', href: '/services/dry-cupping' },
  { name: 'Hijama for Pain Relief', href: '/services/hijama-for-pain-relief' },
  { name: 'Hijama for Internal Health', href: '/services/hijama-for-internal-health' },
  { name: 'Hijama for Sports Recovery', href: '/services/hijama-for-sports-recovery' },
  { name: 'Hijama for Detox & Wellness', href: '/services/hijama-for-detox' }
];

// Main navigation links
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services', subLinks: serviceLinks },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // For mobile dropdown
  // Removed isDesktopServicesOpen state, using CSS hover instead for simplicity
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showBackground = isScrolled || isMenuOpen; // Simplified state for background

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out ${
        showBackground ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand Name */}
          <Link href="/" className={`text-2xl font-bold transition-colors ${showBackground ? 'text-gray-800' : 'text-white'}`}>
            Al Madina Hijama Center
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group/service" // Use group/service for desktop hover
              >
                <Link
                  href={link.href}
                  className={`transition-colors text-lg flex items-center ${
                    showBackground ? 'text-gray-600 hover:text-teal-600' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {link.name}
                  {link.subLinks && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
                {link.subLinks && (
                  <div // REPLACED motion.div with standard div and hover classes
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-md shadow-lg overflow-hidden 
                                opacity-0 group-hover/service:opacity-100 transition-opacity duration-300 pointer-events-none group-hover/service:pointer-events-auto"
                  >
                    <div className="flex flex-col py-2">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className="px-4 py-2 text-gray-700 hover:bg-[#1E4137] hover:text-white transition-colors"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* 2. ADD LANGUAGE SWITCHER TO DESKTOP NAV */}
            <LanguageSwitcher showBackground={showBackground} /> 

            <a
              href="tel:+923007598000"
              className="inline-flex items-center px-4 py-2 bg-[#FF6900] text-white font-semibold rounded-lg shadow-md hover:brightness-90 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             {/* Mobile language switch is handled within the menu below */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`transition-colors ${showBackground ? 'text-gray-800' : 'text-white'}`}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="md:hidden mt-4 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="flex flex-col items-center space-y-2 py-4">
              
              {/* 3. ADD LANGUAGE SWITCHER TO MOBILE MENU */}
              <div className="w-full text-center py-2 border-b">
                <LanguageSwitcher showBackground={true} />
              </div>
              
              {navLinks.map((link) => (
                <div key={link.name} className="w-full text-center">
                  {link.subLinks ? (
                    <>
                      {/* Container for Link + Toggle Button */}
                      <div className="flex justify-center items-center w-full px-4 py-2">
                        {/* Link for the text part - Navigates to /services */}
                        <Link
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)} // Close menu on navigation
                          className="text-gray-700 hover:text-teal-600 text-lg flex-grow text-center" 
                        >
                          {link.name}
                        </Link>
                        {/* Button ONLY for the icon - Toggles dropdown */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); 
                            setIsServicesOpen(!isServicesOpen);
                          }}
                          className="text-gray-700 hover:text-teal-600 ml-2 p-1 flex-shrink-0" 
                          aria-label="Toggle services submenu" 
                        >
                          <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      {/* Dropdown remains the same */}
                      <AnimatePresence>
                        {isServicesOpen && (
                           <motion.div
                             initial={{ height: 0, opacity: 0 }}
                             animate={{ height: 'auto', opacity: 1 }}
                             exit={{ height: 0, opacity: 0 }}
                             className="overflow-hidden bg-gray-50/50" 
                           >
                             <div className="flex flex-col items-center space-y-2 py-2">
                               {link.subLinks.map((subLink) => (
                                 <Link
                                   key={subLink.name}
                                   href={subLink.href}
                                   onClick={() => setIsMenuOpen(false)} 
                                   className="text-gray-600 hover:text-white hover:bg-[#1E4137] text-base py-2 w-full transition-colors" 
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
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-gray-700 hover:text-teal-600 text-lg py-2 block w-full"
                      >
                        {link.name}
                      </Link>
                    )}
                </div>
              ))}
              <a
                href="tel:+923007598000"
                className="mt-4 inline-flex items-center px-6 py-3 bg-[#FF6900] text-white font-semibold rounded-lg shadow-md hover:brightness-90 transition-colors duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;