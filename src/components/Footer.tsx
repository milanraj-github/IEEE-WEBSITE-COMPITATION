import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">IEEE</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">IEEE Student Branch</h3>
                <p className="text-gray-400">SMVITM, Bantakal</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Advancing technology for humanity through innovation, collaboration, and professional development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/events" className="text-gray-400 hover:text-white transition-colors">Events</a></li>
              <li><a href="/societies" className="text-gray-400 hover:text-white transition-colors">Societies</a></li>
              <li><a href="/publications" className="text-gray-400 hover:text-white transition-colors">Publications</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-500" />
                <span className="text-gray-400">ieee@smvitm.edu.in</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-500" />
                <span className="text-gray-400">+91 8242 266 234</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-blue-500 mt-1" />
                <span className="text-gray-400">
                  SMVITM, Bantakal, Udupi<br />
                  Karnataka 574115
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 IEEE Student Branch SMVITM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;