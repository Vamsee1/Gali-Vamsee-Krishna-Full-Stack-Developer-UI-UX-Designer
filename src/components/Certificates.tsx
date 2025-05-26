
import React from 'react';
import { Award, ExternalLink, Calendar, ChevronUp, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Certificates = () => {
  const { translations } = useLanguage();
  const { isDarkMode } = useTheme();

  const scrollToSection = (direction: 'up' | 'down') => {
    const currentSection = document.getElementById('certificates');
    let targetSection: HTMLElement | null = null;

    if (direction === 'up') {
      targetSection = document.getElementById('education');
    } else {
      targetSection = document.getElementById('skills');
    }

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="certificates" className={`py-20 px-6 transition-all duration-300 relative ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Navigation Arrows */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
        <button
          onClick={() => scrollToSection('up')}
          className={`p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${
            isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          <ChevronUp size={20} />
        </button>
        <button
          onClick={() => scrollToSection('down')}
          className={`p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${
            isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          <ChevronDown size={20} />
        </button>
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {translations.certificates.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto stagger-children">
          {translations.certificates.list.map((cert: any, index: number) => (
            <div 
              key={index}
              className={`border rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover-lift ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-gradient-to-br from-gray-50 to-white border-gray-200'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                  <Award className="text-white" size={24} />
                </div>
                <a 
                  href={cert.link}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{cert.title}</h3>
              <p className="text-blue-600 font-semibold mb-3">{cert.issuer}</p>
              
              <div className={`flex items-center mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Calendar size={16} className="mr-2" />
                <span>{cert.date}</span>
              </div>
              
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
