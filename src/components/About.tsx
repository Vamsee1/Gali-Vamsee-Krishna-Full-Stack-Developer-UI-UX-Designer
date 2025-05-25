
import React from 'react';
import { Code, Palette, Zap, Users, Target, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { translations } = useLanguage();
  const { isDarkMode } = useTheme();

  const highlights = [
    {
      icon: Code,
      title: translations.about.cleanCode || 'Clean Code',
      description: translations.about.cleanCodeDesc || 'Writing maintainable and scalable code'
    },
    {
      icon: Palette,
      title: translations.about.uiux || 'UI/UX Design',
      description: translations.about.uiuxDesc || 'Creating beautiful user experiences'
    },
    {
      icon: Zap,
      title: translations.about.performance || 'Performance',
      description: translations.about.performanceDesc || 'Optimizing for speed and efficiency'
    },
    {
      icon: Users,
      title: translations.about.collaboration || 'Collaboration',
      description: translations.about.collaborationDesc || 'Working effectively in teams'
    }
  ];

  return (
    <section id="about" className={`py-20 px-6 transition-all duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
            {translations.about.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-left">
            <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              {translations.about.subtitle}
            </h3>
            <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {translations.about.description1 || "With over 3 years of experience in web development, I specialize in creating modern, responsive applications using cutting-edge technologies. I'm passionate about writing clean, efficient code and creating intuitive user experiences."}
            </p>
            <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {translations.about.description2 || "My journey in technology started with curiosity and has evolved into a deep love for solving complex problems through elegant solutions. I believe in continuous learning and staying updated with the latest industry trends."}
            </p>
            <p className={`mb-8 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {translations.about.description3 || "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community."}
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg hover-lift ${isDarkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
                <div className="flex items-center mb-2">
                  <Target className="text-blue-600 mr-2" size={20} />
                  <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    {translations.about.projects || 'Projects'}
                  </span>
                </div>
                <span className="text-2xl font-bold text-blue-600">15+</span>
              </div>
              <div className={`p-4 rounded-lg hover-lift ${isDarkMode ? 'bg-gray-800' : 'bg-purple-50'}`}>
                <div className="flex items-center mb-2">
                  <Award className="text-purple-600 mr-2" size={20} />
                  <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    {translations.about.experience || 'Experience'}
                  </span>
                </div>
                <span className="text-2xl font-bold text-purple-600">3+ Years</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 stagger-children">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <div 
                key={title}
                className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover-lift ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h4 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{title}</h4>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
