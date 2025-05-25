
import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const ArrowNavigation = () => {
  const sections = ['hero', 'about', 'education', 'certificates', 'skills', 'projects', 'contact'];
  
  const scrollToSection = (direction: 'up' | 'down') => {
    const currentScrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const currentSection = Math.round(currentScrollY / windowHeight);
    
    let targetSection = direction === 'down' 
      ? Math.min(currentSection + 1, sections.length - 1)
      : Math.max(currentSection - 1, 0);
    
    const element = document.getElementById(sections[targetSection]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-4">
      <button
        onClick={() => scrollToSection('up')}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <ChevronUp size={24} />
      </button>
      <button
        onClick={() => scrollToSection('down')}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <ChevronDown size={24} />
      </button>
    </div>
  );
};

export default ArrowNavigation;
