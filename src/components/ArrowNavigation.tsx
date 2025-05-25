
import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const ArrowNavigation = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['hero', 'about', 'education', 'certificates', 'skills', 'projects', 'contact'];
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate which section we're currently viewing
      const newSection = Math.round(scrollPosition / windowHeight);
      setCurrentSection(Math.min(newSection, sections.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
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
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-4">
      <button
        onClick={() => scrollToSection('up')}
        disabled={currentSection === 0}
        className={`p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
          currentSection === 0 
            ? 'bg-gray-300 cursor-not-allowed' 
            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
        } text-white`}
      >
        <ChevronUp size={24} />
      </button>
      
      {/* Current section indicator */}
      <div className="text-center text-xs font-medium text-gray-600 bg-white rounded-full px-2 py-1 shadow">
        {currentSection + 1}/{sections.length}
      </div>
      
      <button
        onClick={() => scrollToSection('down')}
        disabled={currentSection === sections.length - 1}
        className={`p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
          currentSection === sections.length - 1 
            ? 'bg-gray-300 cursor-not-allowed' 
            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
        } text-white`}
      >
        <ChevronDown size={24} />
      </button>
    </div>
  );
};

export default ArrowNavigation;
