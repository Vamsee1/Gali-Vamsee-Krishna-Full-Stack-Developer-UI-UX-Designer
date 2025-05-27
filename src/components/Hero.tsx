import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { translations } = useLanguage();
  const { isDarkMode } = useTheme();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 transition-all duration-500 ${
      isDarkMode ? 'text-white' : ''
    }`}>
      <div className="container mx-auto text-center max-w-6xl">
        <div className="space-y-6 sm:space-y-8">
          {/* Profile Image */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative group mx-auto w-32 h-32 sm:w-40 sm:h-40">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="Vamsee Profile.jpg"
                alt={translations.hero.name}
                className="relative w-full h-full rounded-full shadow-2xl border-4 border-white/20 group-hover:scale-110 transition-all duration-500 object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
          
          {/* Name */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {translations.hero.name}
              </span>
            </h1>
          </div>
          
          {/* Title */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className={`text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {translations.hero.title}
            </p>
          </div>
          
          {/* Description */}
          <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className={`text-sm sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {translations.hero.description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <div className="animate-fade-in" style={{ animationDelay: '1.0s' }}>
              <Button 
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                {translations.contact.title}
              </Button>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <Button 
                variant="outline"
                className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-8">
            {[
              { icon: Github, href: 'https://github.com/Vamsee1', label: 'GitHub', delay: '1.4s' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/vamsee-krishna-gali-746097257', label: 'LinkedIn', delay: '1.6s' },
              { icon: Mail, href: 'mailto:gvks.2003@gmail.com', label: 'Email', delay: '1.8s' }
            ].map(({ icon: Icon, href, label, delay }) => (
              <div key={label} className="animate-fade-in" style={{ animationDelay: delay }}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-300 hover:scale-125 hover:-translate-y-2 flex items-center justify-center"
                  aria-label={label}
                >
                  <Icon size={20} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 sm:w-6 sm:h-6" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
