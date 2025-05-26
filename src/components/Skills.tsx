
import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Cloud, Monitor, Server, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { translations } = useLanguage();
  const { isDarkMode } = useTheme();

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
    <section id="skills" className={`py-20 px-6 transition-all duration-300 relative overflow-hidden ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    }`} ref={sectionRef}>
      {/* Enhanced Background Animations */}
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute top-20 left-20 w-32 h-32 rounded-full animate-float ${
          isDarkMode ? 'bg-gradient-to-r from-blue-400 to-purple-400' : 'bg-gradient-to-r from-blue-500 to-purple-500'
        }`}></div>
        <div className={`absolute top-1/3 right-16 w-24 h-24 rounded-full animate-bounce-slow ${
          isDarkMode ? 'bg-gradient-to-r from-purple-400 to-pink-400' : 'bg-gradient-to-r from-purple-500 to-pink-500'
        }`}></div>
        <div className={`absolute bottom-20 left-1/4 w-20 h-20 rounded-full animate-pulse-slow ${
          isDarkMode ? 'bg-gradient-to-r from-green-400 to-blue-400' : 'bg-gradient-to-r from-green-500 to-blue-500'
        }`}></div>
        <div className={`absolute bottom-1/4 right-20 w-28 h-28 rounded-full animate-gentle-sway ${
          isDarkMode ? 'bg-gradient-to-r from-orange-400 to-yellow-400' : 'bg-gradient-to-r from-orange-500 to-yellow-500'
        }`}></div>

        {/* Tech-themed shapes */}
        <div className={`absolute top-1/4 left-1/3 w-16 h-16 rotate-45 animate-slow-spin ${
          isDarkMode ? 'bg-gradient-to-r from-cyan-400 to-blue-400' : 'bg-gradient-to-r from-cyan-500 to-blue-500'
        }`}></div>
        <div className={`absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full animate-wiggle ${
          isDarkMode ? 'bg-gradient-to-r from-red-400 to-pink-400' : 'bg-gradient-to-r from-red-500 to-pink-500'
        }`}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {translations.skills.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-scale-in"></div>
          <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {translations.skills.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 stagger-children">
          {translations.skills.categories.map((category: any, categoryIndex: number) => (
            <div 
              key={category.title}
              className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border hover-lift hover-glow animate-fade-in ${
                isDarkMode 
                  ? 'bg-gray-800/90 border-gray-700 backdrop-blur-sm' 
                  : 'bg-gradient-to-br from-gray-50/90 to-white/90 border-gray-100 backdrop-blur-sm'
              }`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4 animate-bounce-slow`}>
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
                        className={`bg-gradient-to-r ${category.color} h-full rounded-full transition-all duration-1000 ease-out hover:animate-pulse`}
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
                className={`w-16 h-16 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center text-2xl cursor-pointer hover-lift hover-glow animate-bounce-slow ${
                  isDarkMode ? 'bg-gray-800/90 backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
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
