
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
import LazySection from '../components/LazySection';
import { LanguageProvider } from '../contexts/LanguageContext';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

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
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
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
    </LanguageProvider>
  );
};

export default Index;
