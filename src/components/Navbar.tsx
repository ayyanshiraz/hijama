'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link'; // <--- ADDED THIS IMPORT

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state to true if user scrolls down more than 10px
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled || isMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand Name */}
          <Link href="/" className={`text-2xl font-bold transition-colors ${isScrolled || isMenuOpen ? 'text-gray-800' : 'text-white'}`}>
            Al Madina Hijama Center
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors text-lg ${
                  isScrolled ? 'text-gray-600 hover:text-teal-600' : 'text-gray-200 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
             {/* This is an external link (tel:), so it correctly stays as an <a> tag */}
             <a
              href="tel:0333-482427"
              className="inline-flex items-center px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-xl animate-slideDown">
            <div className="flex flex-col items-center space-y-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-teal-600 text-lg"
                >
                  {link.name}
                </Link>
              ))}
              {/* This is an external link (tel:), so it correctly stays as an <a> tag */}
              <a
                href="tel:0333-482427"
                className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </div>
          </div>
        )}
      </nav>
      {/* We need a simple style tag for the mobile menu animation */}
        <style jsx global>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Navbar;