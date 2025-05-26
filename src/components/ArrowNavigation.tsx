
import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ArrowNavigation = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const { isDarkMode } = useTheme();
  const sections = ['hero', 'about', 'education', 'certificates', 'skills', 'projects', 'contact'];
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate which section we're currently viewing
      const sectionElements = sections.map(id => document.getElementById(id));
      let currentIndex = 0;
      
      for (let i = 0; i < sectionElements.length; i++) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            currentIndex = i;
            break;
          }
        }
      }
      
      setCurrentSection(currentIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (direction: 'up' | 'down') => {
    let targetSection;
    
    if (direction === 'down') {
      targetSection = Math.min(currentSection + 1, sections.length - 1);
    } else {
      targetSection = Math.max(currentSection - 1, 0);
    }
    
    const element = document.getElementById(sections[targetSection]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4">
      {/* Up Arrow - only show if not on first section */}
      {currentSection > 0 && (
        <button
          onClick={() => scrollToSection('up')}
          className={`p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in ${
            isDarkMode 
              ? 'bg-gray-800/90 text-white hover:bg-gray-700 border border-gray-600' 
              : 'bg-white/90 text-gray-700 hover:bg-gray-50 border border-gray-200'
          } backdrop-blur-sm`}
        >
          <ChevronUp size={24} />
        </button>
      )}
      
      {/* Current section indicator */}
      <div className={`text-center text-xs font-medium rounded-full px-3 py-2 shadow-lg backdrop-blur-sm ${
        isDarkMode 
          ? 'text-white bg-gray-800/90 border border-gray-600' 
          : 'text-gray-600 bg-white/90 border border-gray-200'
      }`}>
        {currentSection + 1}/{sections.length}
      </div>
      
      {/* Down Arrow - only show if not on last section */}
      {currentSection < sections.length - 1 && (
        <button
          onClick={() => scrollToSection('down')}
          className={`p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in ${
            isDarkMode 
              ? 'bg-gray-800/90 text-white hover:bg-gray-700 border border-gray-600' 
              : 'bg-white/90 text-gray-700 hover:bg-gray-50 border border-gray-200'
          } backdrop-blur-sm`}
        >
          <ChevronDown size={24} />
        </button>
      )}
    </div>
  );
};

export default ArrowNavigation;
