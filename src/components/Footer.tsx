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
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const Footer = () => {
  return (
    <footer className="bg-[#1E4137] text-white pt-16 pb-8">
      <div className="container mx-auto px-8 sm:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">

          {/* Column 1: Brand Info & Socials */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h2 className="text-2xl font-bold tracking-wide">Al Madina Hijama Center</h2>
            <div className="mt-2 max-w-xs">
              <p className="text-lg font-light text-gray-200">
                Prophetic Healing for a Modern World.
              </p>
              <p className="text-sm text-gray-300 mt-1">
                Reviving the Sunnah of natural healing.
              </p>
            </div>
            
            <blockquote className="mt-6 border-l-4 border-orange-500 pl-4 text-left w-full">
              <p className="italic text-gray-300 text-sm">Whoever performs Hijama on the 17th, 19th or 21st of the lunar month, it is a cure, by Allahs permission.</p>
              <cite className="mt-2 block text-xs text-gray-400 not-italic">(Sunan Abi Dawud, 3861)</cite>
            </blockquote>

            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF6900] p-2 rounded-full text-white hover:brightness-90 transition-all transform hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center sm:items-start lg:pl-16">
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              {footerNavLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors flex items-center justify-center sm:justify-start gap-2">
                  <ChevronRight className="w-4 h-4 flex-shrink-0" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-4">Our Services</h3>
            <nav className="flex flex-col space-y-3">
              {serviceLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors flex items-center justify-center sm:justify-start gap-2">
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    <span>{link.name}</span>
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Column 4: Hijama Center Contact */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-3 text-gray-300">
              <a href="tel:+923007598000" className="hover:text-white transition-colors flex items-center justify-center sm:justify-start gap-2">
                <Phone className="w-4 h-4 flex-shrink-0"/>
                <span>+92 300 7598000</span>
              </a>
              <a href="mailto:almadinahijamaclinic1400@gmail.com" className="hover:text-white transition-colors flex items-center justify-center sm:justify-start gap-2">
                <Mail className="w-4 h-4 flex-shrink-0"/>
                <span>almadinahijamaclinic1400@gmail.com</span>
              </a>
              <div className="flex items-start justify-center sm:justify-start gap-2 pt-1">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0"/>
                <span>MashaAllah Center, 213-A, opp. Car Parking Grand Mosque, Commercial Sector C Bahria Town, Lahore, 53720</span>
              </div>
            </div>
          </div>
          
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-4 border-t border-gray-200/20 text-center text-sm text-gray-400">
          <p>&copy;  Al Madina Hijama Center - All Rights Reserved</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

