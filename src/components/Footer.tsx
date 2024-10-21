import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Our Mandir</h3>
            <p>A place of peace, devotion, and spiritual growth.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:text-orange-300">About Us</a></li>
              <li><a href="#" className="hover:text-orange-300">Services</a></li>
              <li><a href="#" className="hover:text-orange-300">Events</a></li>
              <li><a href="#" className="hover:text-orange-300">Donate</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-300"><Facebook /></a>
              <a href="#" className="hover:text-orange-300"><Twitter /></a>
              <a href="#" className="hover:text-orange-300"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Our Mandir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;