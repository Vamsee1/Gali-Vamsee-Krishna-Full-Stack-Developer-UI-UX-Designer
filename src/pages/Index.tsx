
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
import ArrowNavigation from '../components/ArrowNavigation';
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
    <div className={`min-h-screen transition-all duration-300 ${
      isDarkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-slate-50 to-blue-50'
    }`}>
      <Header />
      <ArrowNavigation />
      <GlobalThemeToggle />
      
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
