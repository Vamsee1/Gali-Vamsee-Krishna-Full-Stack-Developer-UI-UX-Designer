
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Loader3D from '../components/Loader3D';
import GlobalThemeToggle from '../components/GlobalThemeToggle';
import LazySection from '../components/LazySection';
import { LanguageProvider } from '../contexts/LanguageContext';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';

const IndexContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader3D />;
  }

  return (
    <div className={`min-h-screen transition-all duration-300 relative overflow-hidden ${
      isDarkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50'
    }`}>
      {/* Enhanced Global Background Animations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Floating geometric shapes with enhanced animations */}
        <div className={`absolute top-10 left-10 w-32 h-32 rounded-full opacity-20 animate-float ${
          isDarkMode ? 'bg-gradient-to-r from-blue-400 to-purple-400' : 'bg-gradient-to-r from-blue-500 to-purple-500'
        }`}></div>
        <div className={`absolute top-1/4 right-20 w-24 h-24 rounded-full opacity-30 animate-bounce-slow ${
          isDarkMode ? 'bg-gradient-to-r from-purple-400 to-pink-400' : 'bg-gradient-to-r from-purple-500 to-pink-500'
        }`}></div>
        <div className={`absolute bottom-1/4 left-1/4 w-20 h-20 rounded-full opacity-25 animate-pulse-slow ${
          isDarkMode ? 'bg-gradient-to-r from-pink-400 to-red-400' : 'bg-gradient-to-r from-pink-500 to-red-500'
        }`}></div>
        <div className={`absolute bottom-32 right-1/3 w-28 h-28 rounded-full opacity-20 animate-wiggle ${
          isDarkMode ? 'bg-gradient-to-r from-green-400 to-blue-400' : 'bg-gradient-to-r from-green-500 to-blue-500'
        }`}></div>
        <div className={`absolute top-1/2 left-1/6 w-16 h-16 rounded-full opacity-30 animate-float ${
          isDarkMode ? 'bg-gradient-to-r from-orange-400 to-yellow-400' : 'bg-gradient-to-r from-orange-500 to-yellow-500'
        }`}></div>
        <div className={`absolute top-3/4 right-10 w-12 h-12 rounded-full opacity-25 animate-bounce-slow ${
          isDarkMode ? 'bg-gradient-to-r from-indigo-400 to-purple-400' : 'bg-gradient-to-r from-indigo-500 to-purple-500'
        }`}></div>
        
        {/* Enhanced gradient orbs with animations */}
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 animate-pulse-slow blur-3xl animate-gentle-sway"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-10 animate-float blur-3xl"></div>
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-10 animate-wiggle blur-3xl"></div>
        <div className="absolute bottom-1/2 right-0 w-64 h-64 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-10 animate-bounce-slow blur-3xl"></div>
        
        {/* Animated lines and patterns */}
        <div className={`absolute top-1/4 left-0 w-full h-px opacity-20 animate-pulse-slow ${
          isDarkMode ? 'bg-gradient-to-r from-transparent via-blue-400 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-500 to-transparent'
        }`}></div>
        <div className={`absolute bottom-1/3 left-0 w-full h-px opacity-15 animate-pulse-slow ${
          isDarkMode ? 'bg-gradient-to-r from-transparent via-purple-400 to-transparent' : 'bg-gradient-to-r from-transparent via-purple-500 to-transparent'
        }`}></div>
        <div className={`absolute top-2/3 left-0 w-full h-px opacity-10 animate-pulse-slow ${
          isDarkMode ? 'bg-gradient-to-r from-transparent via-pink-400 to-transparent' : 'bg-gradient-to-r from-transparent via-pink-500 to-transparent'
        }`}></div>

        {/* Animated squares and triangles */}
        <div className={`absolute top-16 right-1/4 w-8 h-8 rotate-45 animate-slow-spin opacity-20 ${
          isDarkMode ? 'bg-yellow-400' : 'bg-yellow-500'
        }`}></div>
        <div className={`absolute bottom-40 left-1/4 w-14 h-14 rotate-12 animate-gentle-sway opacity-15 ${
          isDarkMode ? 'bg-red-400' : 'bg-red-500'
        }`}></div>
        <div className={`absolute top-2/3 right-1/3 w-10 h-10 rotate-45 animate-wiggle opacity-25 ${
          isDarkMode ? 'bg-teal-400' : 'bg-teal-500'
        }`}></div>
      </div>

      {/* Content with enhanced z-index */}
      <div className="relative z-10">
        <Header />
        <GlobalThemeToggle />
        
        <div id="hero" className="animate-fade-in">
          <Hero />
        </div>
        
        <LazySection>
          <div className="animate-slide-up">
            <About />
          </div>
        </LazySection>
        
        <LazySection>
          <div className="animate-slide-left">
            <Education />
          </div>
        </LazySection>
        
        <LazySection>
          <div className="animate-slide-right">
            <Certificates />
          </div>
        </LazySection>
        
        <LazySection>
          <div className="animate-scale-in">
            <Skills />
          </div>
        </LazySection>
        
        <LazySection>
          <div className="animate-slide-up">
            <Projects />
          </div>
        </LazySection>
        
        <LazySection>
          <div className="animate-fade-in">
            <Contact />
          </div>
        </LazySection>
        
        <Footer />
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <IndexContent />
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default Index;
