
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { translations } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { key: 'about', id: 'about' },
    { key: 'education', id: 'education' },
    { key: 'certificates', id: 'certificates' },
    { key: 'skills', id: 'skills' },
    { key: 'projects', id: 'projects' },
    { key: 'contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
            Vamsee Krishna
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group text-sm lg:text-base"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {translations.nav[item.key]}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageSelector />
            <button
              className="transition-transform duration-300 hover:scale-110 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-up bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 text-sm"
              >
                {translations.nav[item.key]}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
