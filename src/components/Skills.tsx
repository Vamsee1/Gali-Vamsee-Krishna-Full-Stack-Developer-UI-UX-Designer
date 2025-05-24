
import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'React/Next.js', level: 90, category: 'Frontend' },
    { name: 'JavaScript/TypeScript', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Python', level: 75, category: 'Backend' },
    { name: 'MongoDB/PostgreSQL', level: 70, category: 'Database' },
    { name: 'AWS/Docker', level: 65, category: 'DevOps' },
    { name: 'UI/UX Design', level: 80, category: 'Design' },
    { name: 'Git/GitHub', level: 90, category: 'Tools' }
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-gray-800">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.category}</span>
              </div>
              <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 0.1}s`
                  }}
                ></div>
              </div>
              <div className="text-right mt-2">
                <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
