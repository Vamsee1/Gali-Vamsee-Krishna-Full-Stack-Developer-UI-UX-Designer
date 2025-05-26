
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
import ArrowNavigation from '../components/ArrowNavigation';
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
      {/* Beautiful Background Animations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className={`absolute top-10 left-10 w-32 h-32 rounded-full opacity-20 animate-float ${
          isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
        }`}></div>
        <div className={`absolute top-1/4 right-20 w-24 h-24 rounded-full opacity-30 animate-bounce-slow ${
          isDarkMode ? 'bg-purple-400' : 'bg-purple-500'
        }`}></div>
        <div className={`absolute bottom-1/4 left-1/4 w-20 h-20 rounded-full opacity-25 animate-pulse-slow ${
          isDarkMode ? 'bg-pink-400' : 'bg-pink-500'
        }`}></div>
        <div className={`absolute bottom-32 right-1/3 w-28 h-28 rounded-full opacity-20 animate-wiggle ${
          isDarkMode ? 'bg-green-400' : 'bg-green-500'
        }`}></div>
        <div className={`absolute top-1/2 left-1/6 w-16 h-16 rounded-full opacity-30 animate-float ${
          isDarkMode ? 'bg-orange-400' : 'bg-orange-500'
        }`}></div>
        <div className={`absolute top-3/4 right-10 w-12 h-12 rounded-full opacity-25 animate-bounce-slow ${
          isDarkMode ? 'bg-indigo-400' : 'bg-indigo-500'
        }`}></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 animate-pulse-slow blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-10 animate-float blur-3xl"></div>
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-10 animate-wiggle blur-3xl"></div>
        
        {/* Animated lines */}
        <div className={`absolute top-1/4 left-0 w-full h-px opacity-20 animate-pulse-slow ${
          isDarkMode ? 'bg-gradient-to-r from-transparent via-blue-400 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-500 to-transparent'
        }`}></div>
        <div className={`absolute bottom-1/3 left-0 w-full h-px opacity-15 animate-pulse-slow ${
          isDarkMode ? 'bg-gradient-to-r from-transparent via-purple-400 to-transparent' : 'bg-gradient-to-r from-transparent via-purple-500 to-transparent'
        }`}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <GlobalThemeToggle />
        <ArrowNavigation />
        
        <div id="hero">
          <Hero />
        </div>
        
        <LazySection>
          <About />
        </LazySection>
        
        <LazySection>
          <Education />
        </LazySection>
        
        <LazySection>
          <Certificates />
        </LazySection>
        
        <LazySection>
          <Skills />
        </LazySection>
        
        <LazySection>
          <Projects />
        </LazySection>
        
        <LazySection>
          <Contact />
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
