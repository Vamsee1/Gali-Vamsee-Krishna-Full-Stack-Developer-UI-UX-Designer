
import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
              alt="Vamsee Krishna"
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-xl animate-scale-in"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Vamsee Krishna Gali
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional, and user-friendly applications. 
            I love turning complex problems into simple, beautiful designs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2" size={20} />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: 'https://github.com/vamsee1', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/vamsee', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:vamsee@example.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
              >
                <Icon size={24} className="text-gray-600 group-hover:text-blue-600 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
