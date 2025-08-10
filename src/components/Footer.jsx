import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <p className="text-xl font-bold tracking-wider text-gray-900">MLD<span className="text-amber-600">LUXURY</span></p>
            <p className="mt-4 text-gray-700">
              Experience unparalleled luxury transportation in New York City.
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg text-amber-600 tracking-wider">Quick Links</p>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-amber-600 transition-colors">About Us</Link></li>
              <li><Link to="/fleet" className="text-gray-600 hover:text-amber-600 transition-colors">Our Fleet</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-amber-600 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-amber-600 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
             <p className="font-semibold text-lg text-amber-600 tracking-wider">Contact Us</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>123 Luxury Lane, New York, NY</li>
              <li>(123) 456-7890</li>
              <li>contact@mldluxury.com</li>
            </ul>
          </div>
          <div>
             <p className="font-semibold text-lg text-amber-600 tracking-wider">Follow Us</p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-500 hover:text-amber-600 transition-colors"><Facebook /></a>
              <a href="#" className="text-gray-500 hover:text-amber-600 transition-colors"><Twitter /></a>
              <a href="#" className="text-gray-500 hover:text-amber-600 transition-colors"><Instagram /></a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-lg text-amber-600 tracking-wider">Service Areas</p>
            <div className="mt-4 text-sm text-gray-700">
              <p className="mb-3 font-medium text-gray-800">Complete Coverage</p>
              <div className="grid grid-cols-1 gap-1">
                <span>Manhattan • Brooklyn • Queens</span>
                <span>The Bronx • Staten Island</span>
                <span>Westchester • Long Island</span>
                <span>Hudson Valley • New Jersey</span>
                <span>Connecticut • Pennsylvania</span>
                <span>Upstate NY</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} MLDLUXURY. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;