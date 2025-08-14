import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              License To Work<span className="text-red-500">™</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Transforming graduates into workplace-ready professionals through comprehensive career development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">About Programme</a></li>
              <li><a href="#pillars" className="hover:text-white transition-colors">5 Pillars</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#apply" className="hover:text-white transition-colors">Apply Now</a></li>
            </ul>
          </div>

          {/* Programme Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programme</h4>
            <ul className="space-y-2 text-gray-300">
              <li>6-Month Duration</li>
              <li>Hybrid Learning</li>
              <li>Industry Partnerships</li>
              <li>Career Certification</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span className="text-sm">info@licensetowork.ng</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span className="text-sm">+234 (0) 800 542-3673</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span className="text-sm">Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              <p>© 2025 License To Work™. All rights reserved.</p>
              <p className="mt-1">
                Designed by{' '}
                <a 
                  href="https://cactusdigitalmedia.ng/portfolio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Cactus Digital Media
                </a>
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}