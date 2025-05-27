
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
    <section className={`min-h-screen flex items-center justify-center pt-20 px-6 transition-all duration-500 ${
      isDarkMode ? 'text-white' : ''
    }`}>
      <div className="container mx-auto text-center">
        <div className="space-y-8">
          {/* Profile Image with enhanced animation */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                alt={translations.hero.name}
                className="relative w-40 h-40 rounded-full mx-auto shadow-2xl border-4 border-white/20 group-hover:scale-110 transition-all duration-500 animate-float"
              />
            </div>
          </div>
          
          {/* Name with typewriter effect */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-gradient-shift">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-[length:200%_auto]">
                {translations.hero.name}
              </span>
            </h1>
          </div>
          
          {/* Title with slide animation */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {translations.hero.title}
            </p>
          </div>
          
          {/* Description with enhanced entrance */}
          <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className={`text-lg mb-12 max-w-2xl mx-auto leading-relaxed hover:text-blue-600 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {translations.hero.description}
            </p>
          </div>

          {/* Buttons with staggered animation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <div className="animate-fade-in" style={{ animationDelay: '1.0s' }}>
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 group"
              >
                <Mail className="mr-2 group-hover:animate-bounce" size={20} />
                {translations.contact.title}
              </Button>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <Button 
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25 group"
              >
                <Download className="mr-2 group-hover:animate-bounce" size={20} />
                Download CV
              </Button>
            </div>
          </div>

          {/* Social Links with enhanced hover effects */}
          <div className="flex justify-center space-x-8">
            {[
              { icon: Github, href: 'https://github.com/vamsee1', label: 'GitHub', delay: '1.4s', color: 'hover:bg-gray-800' },
              { icon: Linkedin, href: 'https://linkedin.com/in/vamsee', label: 'LinkedIn', delay: '1.6s', color: 'hover:bg-blue-600' },
              { icon: Mail, href: 'mailto:vamsee@example.com', label: 'Email', delay: '1.8s', color: 'hover:bg-red-500' }
            ].map(({ icon: Icon, href, label, delay, color }) => (
              <div key={label} className="animate-fade-in" style={{ animationDelay: delay }}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-500 hover:scale-125 hover:-translate-y-2 hover:shadow-2xl group ${color}`}
                >
                  <Icon size={28} className="text-gray-600 group-hover:text-white transition-colors duration-300" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-float opacity-40" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-float opacity-30" style={{ animationDelay: '6s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
