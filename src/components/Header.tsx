import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
    <header className="bg-blue-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <img 
                src="/license-to-work-logo.jpeg" 
                alt="License To Work™" 
                className="h-10 w-auto mr-3 bg-transparent mix-blend-multiply"
              />
              <span className="text-sm text-blue-200 hidden sm:inline">
                Graduate Employability Programme
              </span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-200 transition-colors">About</a>
            <a href="#pillars" className="hover:text-blue-200 transition-colors">Programme</a>
            <a href="#features" className="hover:text-blue-200 transition-colors">Features</a>
            <a href="#apply" className="hover:text-blue-200 transition-colors">Apply</a>
            <a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-800">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="hover:text-blue-200 transition-colors">About</a>
              <a href="#pillars" className="hover:text-blue-200 transition-colors">Programme</a>
              <a href="#features" className="hover:text-blue-200 transition-colors">Features</a>
              <a href="#apply" className="hover:text-blue-200 transition-colors">Apply</a>
              <a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}