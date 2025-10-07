'use client';

import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white z-40 h-16">
      <div className="container mx-auto px-6 h-full flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-gray-300 text-center sm:text-left">
          &copy; {new Date().getFullYear()} Al Madina Hijama Center. All Rights Reserved.
        </p>
        <div className="flex space-x-6 mt-2 sm:mt-0">
          <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
