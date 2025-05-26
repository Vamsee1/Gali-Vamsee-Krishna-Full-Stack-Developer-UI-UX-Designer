
import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const { translations } = useLanguage();
  const { isDarkMode } = useTheme();

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
    <section id="projects" className={`py-20 px-6 transition-all duration-300 relative overflow-hidden ${
      isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      {/* Enhanced Background Animations */}
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute top-16 left-16 w-28 h-28 rounded-full animate-float ${
          isDarkMode ? 'bg-gradient-to-r from-purple-400 to-pink-400' : 'bg-gradient-to-r from-purple-500 to-pink-500'
        }`}></div>
        <div className={`absolute top-1/3 right-20 w-24 h-24 rounded-full animate-bounce-slow ${
          isDarkMode ? 'bg-gradient-to-r from-blue-400 to-purple-400' : 'bg-gradient-to-r from-blue-500 to-purple-500'
        }`}></div>
        <div className={`absolute bottom-1/4 left-1/4 w-20 h-20 rounded-full animate-pulse-slow ${
          isDarkMode ? 'bg-gradient-to-r from-green-400 to-blue-400' : 'bg-gradient-to-r from-green-500 to-blue-500'
        }`}></div>
        <div className={`absolute bottom-32 right-1/3 w-32 h-32 rounded-full animate-gentle-sway ${
          isDarkMode ? 'bg-gradient-to-r from-orange-400 to-yellow-400' : 'bg-gradient-to-r from-orange-500 to-yellow-500'
        }`}></div>

        {/* Project-themed shapes */}
        <div className={`absolute top-1/4 left-1/3 w-16 h-16 rotate-45 animate-slow-spin ${
          isDarkMode ? 'bg-gradient-to-r from-red-400 to-pink-400' : 'bg-gradient-to-r from-red-500 to-pink-500'
        }`}></div>
        <div className={`absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full animate-wiggle ${
          isDarkMode ? 'bg-gradient-to-r from-cyan-400 to-blue-400' : 'bg-gradient-to-r from-cyan-500 to-blue-500'
        }`}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {translations.projects.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-scale-in"></div>
          <p className={`max-w-2xl mx-auto mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {translations.projects.subtitle}
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 stagger-children">
            {categories.map((category, index) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "outline"}
                className={`${
                  filter === category 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white animate-bounce-slow' 
                    : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                } transition-all duration-300 hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
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
              className={`rounded-xl overflow-hidden shadow-lg hover-lift hover-glow transition-all duration-500 animate-fade-in ${
                isDarkMode ? 'bg-gray-700/90 backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative group overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{project.title}</h3>
                <p className={`mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-full hover:scale-105 transition-all duration-300 animate-bounce-slow"
                      style={{ animationDelay: `${techIndex * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex-1 hover:scale-105 transition-all duration-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    {translations.projects.liveDemo}
                  </Button>
                  <Button 
                    size="sm"
                    variant="outline"
                    className="border-gray-300 hover:bg-gray-50 hover:scale-105 transition-all duration-300"
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
