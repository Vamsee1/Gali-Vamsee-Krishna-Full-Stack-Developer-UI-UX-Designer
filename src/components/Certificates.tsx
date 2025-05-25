
import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      description: "Advanced React concepts, hooks, and state management",
      link: "#"
    },
    {
      title: "JavaScript Algorithms and Data Structures", 
      issuer: "freeCodeCamp",
      date: "2023",
      description: "Comprehensive JavaScript programming and algorithms",
      link: "#"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Coursera",
      date: "2022",
      description: "End-to-end web application development",
      link: "#"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Cloud computing fundamentals and AWS services",
      link: "#"
    }
  ];

  return (
    <section id="certificates" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Certificates & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto stagger-children">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover-lift"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                  <Award className="text-white" size={24} />
                </div>
                <a 
                  href={cert.link}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h3>
              <p className="text-blue-600 font-semibold mb-3">{cert.issuer}</p>
              
              <div className="flex items-center mb-3 text-gray-600">
                <Calendar size={16} className="mr-2" />
                <span>{cert.date}</span>
              </div>
              
              <p className="text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
