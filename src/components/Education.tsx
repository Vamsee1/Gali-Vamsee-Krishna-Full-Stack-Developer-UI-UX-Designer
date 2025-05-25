
import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Star } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Jawaharlal Nehru Technological University',
      location: 'Hyderabad, India',
      year: '2018 - 2022',
      grade: 'CGPA: 8.5/10',
      description: 'Specialized in Software Engineering, Data Structures, Algorithms, Database Management Systems, and Web Technologies',
      highlights: ['Software Engineering', 'Data Structures & Algorithms', 'Database Systems', 'Web Development', 'Computer Networks']
    },
    {
      degree: 'Intermediate (12th Grade)',
      institution: 'Sri Chaitanya Junior College',
      location: 'Hyderabad, India',
      year: '2016 - 2018',
      grade: 'Percentage: 92%',
      description: 'Mathematics, Physics, Chemistry with Computer Science as optional subject',
      highlights: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science', 'English']
    },
    {
      degree: 'Secondary School Certificate (10th Grade)',
      institution: 'Bhashyam Public School',
      location: 'Hyderabad, India',
      year: '2015 - 2016',
      grade: 'Percentage: 95%',
      description: 'Completed secondary education with distinction in all subjects',
      highlights: ['Mathematics', 'Science', 'Social Studies', 'English', 'Telugu']
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Developer Associate',
      issuer: 'Amazon Web Services',
      year: '2023',
      icon: '☁️'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB Inc.',
      year: '2022',
      icon: '🍃'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      year: '2022',
      icon: '⚛️'
    },
    {
      name: 'Google Analytics Certified',
      issuer: 'Google',
      year: '2023',
      icon: '📊'
    },
    {
      name: 'GitHub Actions Certification',
      issuer: 'GitHub',
      year: '2023',
      icon: '🔄'
    }
  ];

  const achievements = [
    'Dean\'s List for Academic Excellence (2020-2022)',
    'Best Project Award for E-Commerce Platform',
    'Hackathon Winner - Smart City Solutions',
    'Open Source Contributor with 50+ commits',
    'Technical Lead for College Tech Festival'
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My educational journey and professional certifications that shaped my expertise
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <div className="flex items-center mb-8 animate-slide-left">
            <GraduationCap className="text-blue-600 mr-3" size={32} />
            <h3 className="text-3xl font-bold text-gray-800">Academic Background</h3>
          </div>
          
          <div className="space-y-8 stagger-children">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300 hover-lift"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h4 className="text-2xl font-bold text-gray-800 mb-3">{edu.degree}</h4>
                    <div className="flex items-center text-blue-600 font-semibold mb-2">
                      <BookOpen size={18} className="mr-2" />
                      {edu.institution}
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin size={16} className="mr-2" />
                      {edu.location}
                    </div>
                    <p className="text-gray-600 mb-4">{edu.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center md:text-right">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg inline-block mb-4">
                      <Calendar size={16} className="inline mr-2" />
                      {edu.year}
                    </div>
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold">
                      <Star size={16} className="inline mr-2" />
                      {edu.grade}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div className="flex items-center mb-8 animate-slide-right">
            <Award className="text-purple-600 mr-3" size={32} />
            <h3 className="text-3xl font-bold text-gray-800">Professional Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift hover-glow"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{cert.icon}</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium">
                    {cert.year}
                  </span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{cert.name}</h4>
                <p className="text-purple-600 font-medium">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <div className="flex items-center mb-8 animate-slide-up">
            <Star className="text-yellow-600 mr-3" size={32} />
            <h3 className="text-3xl font-bold text-gray-800">Achievements & Recognition</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 stagger-children">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200 hover:shadow-md transition-all duration-300 hover-lift"
              >
                <div className="flex items-center">
                  <Award className="text-yellow-600 mr-3 flex-shrink-0" size={20} />
                  <span className="font-medium text-gray-800">{achievement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
