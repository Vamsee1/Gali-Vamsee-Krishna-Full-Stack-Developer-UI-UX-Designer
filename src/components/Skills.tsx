
import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Cloud, Monitor, Server, Smartphone } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Monitor,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React/Next.js', level: 90, icon: '⚛️' },
        { name: 'JavaScript/TypeScript', level: 85, icon: '🟨' },
        { name: 'HTML5/CSS3', level: 90, icon: '🌐' },
        { name: 'Tailwind CSS', level: 85, icon: '🎨' }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 80, icon: '🟢' },
        { name: 'Python', level: 75, icon: '🐍' },
        { name: 'Express.js', level: 80, icon: '🚀' },
        { name: 'REST APIs', level: 85, icon: '🔗' }
      ]
    },
    {
      title: 'Database & Tools',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', level: 75, icon: '🍃' },
        { name: 'PostgreSQL', level: 70, icon: '🐘' },
        { name: 'Git/GitHub', level: 90, icon: '📦' },
        { name: 'VS Code', level: 95, icon: '💻' }
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS', level: 65, icon: '☁️' },
        { name: 'Docker', level: 60, icon: '🐳' },
        { name: 'Vercel/Netlify', level: 80, icon: '🚀' },
        { name: 'CI/CD', level: 65, icon: '🔄' }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-6 bg-white" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 stagger-children">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover-lift"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl animate-bounce-slow">{skill.icon}</span>
                        <span className="font-semibold text-gray-800">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${category.color} h-full rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Icons */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 animate-slide-up">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4 stagger-children">
            {['⚛️', '🟨', '🐍', '🟢', '🍃', '🐘', '☁️', '🐳', '📦', '🎨', '🚀', '💻', '🌐', '🔗', '🔄', '📱'].map((icon, index) => (
              <div 
                key={index}
                className="w-16 h-16 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center text-2xl cursor-pointer hover-lift hover-glow"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
