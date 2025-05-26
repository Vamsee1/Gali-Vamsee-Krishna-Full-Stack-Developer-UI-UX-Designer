
import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Certificates = () => {
  const { translations } = useLanguage();
  const { isDarkMode } = useTheme();

  return (
    <section id="certificates" className={`py-20 px-6 transition-all duration-300 relative overflow-hidden ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Enhanced Background Animation Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute top-16 left-16 w-24 h-24 rounded-full animate-float ${
          isDarkMode ? 'bg-gradient-to-r from-blue-400 to-purple-400' : 'bg-gradient-to-r from-blue-500 to-purple-500'
        }`}></div>
        <div className={`absolute top-1/4 right-12 w-20 h-20 rounded-full animate-bounce-slow ${
          isDarkMode ? 'bg-gradient-to-r from-purple-400 to-pink-400' : 'bg-gradient-to-r from-purple-500 to-pink-500'
        }`}></div>
        <div className={`absolute bottom-24 left-20 w-16 h-16 rounded-full animate-pulse-slow ${
          isDarkMode ? 'bg-gradient-to-r from-pink-400 to-red-400' : 'bg-gradient-to-r from-pink-500 to-red-500'
        }`}></div>
        <div className={`absolute bottom-1/3 right-16 w-18 h-18 rounded-full animate-wiggle ${
          isDarkMode ? 'bg-gradient-to-r from-green-400 to-blue-400' : 'bg-gradient-to-r from-green-500 to-blue-500'
        }`}></div>
        <div className={`absolute top-1/2 left-1/3 w-12 h-12 rounded-full animate-float ${
          isDarkMode ? 'bg-gradient-to-r from-orange-400 to-yellow-400' : 'bg-gradient-to-r from-orange-500 to-yellow-500'
        }`}></div>
        
        {/* Certificate-themed animated shapes */}
        <div className={`absolute top-32 right-1/4 w-8 h-8 rotate-45 animate-slow-spin ${
          isDarkMode ? 'bg-yellow-400' : 'bg-yellow-500'
        }`}></div>
        <div className={`absolute bottom-40 left-1/4 w-14 h-14 rounded-full animate-gentle-sway ${
          isDarkMode ? 'bg-red-400' : 'bg-red-500'
        }`}></div>
        <div className={`absolute top-2/3 right-1/3 w-10 h-10 rotate-12 animate-pulse-slow ${
          isDarkMode ? 'bg-teal-400' : 'bg-teal-500'
        }`}></div>

        {/* Animated gradient lines */}
        <div className={`absolute top-1/4 left-0 w-full h-px animate-pulse-slow ${
          isDarkMode ? 'bg-gradient-to-r from-transparent via-blue-400 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-500 to-transparent'
        }`}></div>
        <div className={`absolute bottom-1/3 left-0 w-full h-px animate-pulse-slow ${
          isDarkMode ? 'bg-gradient-to-r from-transparent via-purple-400 to-transparent' : 'bg-gradient-to-r from-transparent via-purple-500 to-transparent'
        }`}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {translations.certificates.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-scale-in"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto stagger-children">
          {translations.certificates.list.map((cert: any, index: number) => (
            <div 
              key={index}
              className={`border rounded-xl p-6 hover:shadow-xl transition-all duration-500 hover-lift hover-glow animate-fade-in ${
                isDarkMode 
                  ? 'bg-gray-800/90 border-gray-700 backdrop-blur-sm' 
                  : 'bg-gradient-to-br from-gray-50/90 to-white/90 border-gray-200 backdrop-blur-sm'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg animate-bounce-slow">
                  <Award className="text-white" size={24} />
                </div>
                <a 
                  href={cert.link}
                  className="text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-110"
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
