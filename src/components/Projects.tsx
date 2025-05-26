
import React, { useState } from 'react';
import { ExternalLink, Github, Filter, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const { translations } = useLanguage();
  const { isDarkMode } = useTheme();

  const scrollToSection = (direction: 'up' | 'down') => {
    const currentSection = document.getElementById('projects');
    let targetSection: HTMLElement | null = null;

    if (direction === 'up') {
      targetSection = document.getElementById('skills');
    } else {
      targetSection = document.getElementById('contact');
    }

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: translations.projects.ecommerce.title,
      description: translations.projects.ecommerce.description,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Full Stack',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: translations.projects.weather.title,
      description: translations.projects.weather.description,
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      technologies: ['React', 'APIs', 'Charts.js', 'CSS'],
      category: 'Frontend',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: translations.projects.taskapi.title,
      description: translations.projects.taskapi.description,
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Socket.io'],
      category: 'Backend',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: translations.projects.portfolio.title,
      description: translations.projects.portfolio.description,
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      technologies: ['React', 'Tailwind', 'Framer Motion', 'Vercel'],
      category: 'Frontend',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const categories = [
    translations.projects.filters.all,
    translations.projects.filters.frontend,
    translations.projects.filters.backend,
    translations.projects.filters.fullstack
  ];
  
  const filteredProjects = filter === translations.projects.filters.all ? projects : projects.filter(p => {
    if (filter === translations.projects.filters.frontend) return p.category === 'Frontend';
    if (filter === translations.projects.filters.backend) return p.category === 'Backend';
    if (filter === translations.projects.filters.fullstack) return p.category === 'Full Stack';
    return true;
  });

  return (
    <section id="projects" className={`py-20 px-6 transition-all duration-300 relative ${
      isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
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
            {translations.projects.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className={`max-w-2xl mx-auto mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {translations.projects.subtitle}
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "outline"}
                className={`${
                  filter === category 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                    : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                } transition-all duration-300 hover:scale-105`}
              >
                <Filter size={16} className="mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 stagger-children">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title}
              className={`rounded-xl overflow-hidden shadow-lg hover-lift hover-glow transition-all duration-300 ${
                isDarkMode ? 'bg-gray-700' : 'bg-white'
              }`}
            >
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{project.title}</h3>
                <p className={`mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-full hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex-1 hover:scale-105 transition-transform duration-200"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    {translations.projects.liveDemo}
                  </Button>
                  <Button 
                    size="sm"
                    variant="outline"
                    className="border-gray-300 hover:bg-gray-50 hover:scale-105 transition-transform duration-200"
                  >
                    <Github size={16} className="mr-2" />
                    {translations.projects.code}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
