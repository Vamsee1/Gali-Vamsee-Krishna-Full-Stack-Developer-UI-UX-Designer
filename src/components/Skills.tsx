
import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Cloud, Monitor, Server, Smartphone, ChevronUp, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { translations } = useLanguage();
  const { isDarkMode } = useTheme();

  const scrollToSection = (direction: 'up' | 'down') => {
    const currentSection = document.getElementById('skills');
    let targetSection: HTMLElement | null = null;

    if (direction === 'up') {
      targetSection = document.getElementById('certificates');
    } else {
      targetSection = document.getElementById('projects');
    }

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className={`py-20 px-6 transition-all duration-300 relative ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    }`} ref={sectionRef}>
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
            {translations.skills.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {translations.skills.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 stagger-children">
          {translations.skills.categories.map((category: any, categoryIndex: number) => (
            <div 
              key={category.title}
              className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border hover-lift ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-gradient-to-br from-gray-50 to-white border-gray-100'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                  {category.icon === 'Monitor' && <Monitor size={24} className="text-white" />}
                  {category.icon === 'Server' && <Server size={24} className="text-white" />}
                  {category.icon === 'Database' && <Database size={24} className="text-white" />}
                  {category.icon === 'Cloud' && <Cloud size={24} className="text-white" />}
                </div>
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill: any, skillIndex: number) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl animate-bounce-slow">{skill.icon}</span>
                        <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{skill.name}</span>
                      </div>
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{skill.level}%</span>
                    </div>
                    <div className={`rounded-full h-3 overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div 
                        className={`bg-gradient-to-r ${category.color} h-full rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className={`text-2xl font-bold mb-8 animate-slide-up ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translations.skills.techTitle}</h3>
          <div className="flex flex-wrap justify-center gap-4 stagger-children">
            {translations.skills.technologies.map((tech: string, index: number) => (
              <div 
                key={index}
                className={`w-16 h-16 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center text-2xl cursor-pointer hover-lift hover-glow ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
