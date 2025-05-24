
import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful user experiences'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed and efficiency'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Passionate Developer & Creative Problem Solver
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 3 years of experience in web development, I specialize in creating 
              modern, responsive applications using cutting-edge technologies. I'm passionate 
              about writing clean, efficient code and creating intuitive user experiences.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My journey in technology started with curiosity and has evolved into a deep 
              love for solving complex problems through elegant solutions. I believe in 
              continuous learning and staying updated with the latest industry trends.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <div 
                key={title}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{title}</h4>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
