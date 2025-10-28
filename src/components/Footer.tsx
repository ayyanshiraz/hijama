'use client';

import { Facebook, Instagram, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const footerNavLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
   { name: 'Blog', href: '/blog' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
];

const serviceLinks = [
  { name: 'Wet Cupping (Hijama)', href: '/services/wet-cupping' },
  { name: 'Dry & Massage Cupping', href: '/services/dry-cupping' },
  { name: 'Pain Relief', href: '/services/hijama-for-pain-relief' },
  { name: 'Internal Health', href: '/services/hijama-for-internal-health' },
  { name: 'Sports Recovery', href: '/services/hijama-for-sports-recovery' },
  { name: 'Detox & Wellness', href: '/services/hijama-for-detox' }
];

const socialLinks = [
  // Add actual links when available
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const Footer = () => {
  return (
    // Adjusted padding
    <footer className="bg-[#1E4137] text-white pt-12 sm:pt-16 pb-8">
      {/* Adjusted padding */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        {/* Grid adapts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">

          {/* Column 1: Brand Info & Socials */}
          {/* Adjusted alignment and text sizes */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide">Al Madina Hijama Center</h2>
            <div className="mt-2 max-w-xs">
              <p className="text-base sm:text-lg font-light text-gray-200">
                Prophetic Healing for a Modern World.
              </p>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Reviving the Sunnah of natural healing.
              </p>
            </div>

            <blockquote className="mt-4 sm:mt-6 border-l-4 border-orange-500 pl-3 sm:pl-4 text-left w-full max-w-xs mx-auto md:mx-0">
              <p className="italic text-gray-300 text-xs sm:text-sm">Whoever performs Hijama on the 17th, 19th or 21st of the lunar month, it is a cure, by Allahs permission.</p>
              <cite className="mt-1 sm:mt-2 block text-xs text-gray-400 not-italic">(Sunan Abi Dawud, 3861)</cite>
            </blockquote>

            {/* Adjusted margin */}
            <div className="flex space-x-3 sm:space-x-4 mt-4 sm:mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  // Reduced padding to p-1.5
                  className="bg-[#FF6900] p-1.5 rounded-full text-white hover:brightness-90 transition-all transform hover:scale-110"
                >
                  {/* Reduced icon size to 18 */}
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          {/* Adjusted alignment, padding */}
          <div className="flex flex-col items-center md:items-start lg:pl-8 xl:pl-16">
            <h3 className="text-base sm:text-lg font-semibold uppercase tracking-wider mb-3 sm:mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2 sm:space-y-3">
              {footerNavLinks.map((link) => (
                 // Adjusted text size
                <Link key={link.name} href={link.href} className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-1.5 sm:gap-2">
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Services */}
          {/* Adjusted alignment */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-base sm:text-lg font-semibold uppercase tracking-wider mb-3 sm:mb-4">Our Services</h3>
            <nav className="flex flex-col space-y-2 sm:space-y-3">
              {serviceLinks.map((link) => (
                 // Adjusted text size
                <Link key={link.name} href={link.href} className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-1.5 sm:gap-2">
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>{link.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Hijama Center Contact */}
           {/* Adjusted alignment */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-base sm:text-lg font-semibold uppercase tracking-wider mb-3 sm:mb-4">Contact Us</h3>
             {/* Adjusted spacing and text size */}
            <div className="flex flex-col space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
              <a href="tel:+923007598000" className="hover:text-white transition-colors flex items-center justify-center md:justify-start gap-1.5 sm:gap-2">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0"/>
                <span>+92 300 7598000</span>
              </a>
              <a href="mailto:almadinahijamaclinic1400@gmail.com" className="hover:text-white transition-colors flex items-center justify-center md:justify-start gap-1.5 sm:gap-2 break-all">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0"/>
                <span>almadinahijamaclinic1400@gmail.com</span>
              </a>
              <div className="flex items-start justify-center md:justify-start gap-1.5 sm:gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 flex-shrink-0"/>
                {/* Wrapped address lines in spans for potentially better wrapping control */}
                <span>
                    <span>MashaAllah Center, 213-A, opp. Car Parking Grand Mosque,</span><br className="sm:hidden"/> {/* Line break on mobile */}
                    <span>Commercial Sector C Bahria Town, Lahore, 53720</span>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        {/* Adjusted margin and text size */}
        <div className="mt-8 sm:mt-12 pt-4 border-t border-gray-200/20 text-center text-xs sm:text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Al Madina Hijama Center - All Rights Reserved</p> {/* Dynamic year */}
        </div>

      </div>
    </footer>
  );
};

export default Footer;