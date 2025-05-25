
import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "JNTUH University",
      location: "Hyderabad, India", 
      duration: "2019 - 2023",
      grade: "8.5 CGPA",
      description: "Specialized in Software Engineering, Data Structures, and Web Development"
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "Narayana Junior College",
      location: "Hyderabad, India",
      duration: "2017 - 2019", 
      grade: "92%",
      description: "Mathematics, Physics, Chemistry (MPC)"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-all duration-300 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg mr-4">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                    <p className="text-blue-600 font-semibold">{edu.institution}</p>
                  </div>
                </div>
                <div className="bg-blue-50 px-4 py-2 rounded-lg">
                  <span className="text-blue-600 font-semibold">{edu.grade}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>{edu.duration}</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  <span>{edu.location}</span>
                </div>
              </div>
              
              <p className="text-gray-600">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
