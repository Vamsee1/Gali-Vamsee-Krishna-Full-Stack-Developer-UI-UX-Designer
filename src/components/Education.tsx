
import React, { useState } from 'react';
import { GraduationCap, Calendar, MapPin, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Education = () => {
  const { translations } = useLanguage();
  const { isDarkMode } = useTheme();
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const educationData = [
    {
      degree: translations.education.btech.degree,
      institution: translations.education.btech.institution,
      location: translations.education.btech.location, 
      duration: translations.education.btech.duration,
      grade: translations.education.btech.grade,
      description: translations.education.btech.description,
      year: "2023"
    },
    {
      degree: translations.education.intermediate.degree,
      institution: translations.education.intermediate.institution,
      location: translations.education.intermediate.location,
      duration: translations.education.intermediate.duration, 
      grade: translations.education.intermediate.grade,
      description: translations.education.intermediate.description,
      year: "2019"
    }
  ];

  return (
    <section id="education" className={`py-20 px-6 transition-all duration-300 ${
      isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {translations.education.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 to-purple-600 h-full"></div>
          
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {/* Timeline Icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <button
                  onClick={() => toggleExpanded(index)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <GraduationCap className="text-white" size={28} />
                </button>
              </div>

              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className={`rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover-lift ${
                  isDarkMode ? 'bg-gray-700' : 'bg-white'
                }`}>
                  {/* Year Badge */}
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 ${
                    index % 2 === 0 ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'
                  }`}>
                    {edu.year}
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    {edu.degree}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">{edu.institution}</p>
                  
                  <button
                    onClick={() => toggleExpanded(index)}
                    className={`flex items-center gap-2 text-sm transition-colors duration-200 ${
                      index % 2 === 0 ? 'justify-end' : 'justify-start'
                    } ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}
                  >
                    {expandedItems.includes(index) ? (
                      <>
                        {translations.education.showLess} <ChevronUp size={16} />
                      </>
                    ) : (
                      <>
                        {translations.education.showMore} <ChevronDown size={16} />
                      </>
                    )}
                  </button>

                  {/* Expandable Details */}
                  {expandedItems.includes(index) && (
                    <div className="mt-4 pt-4 border-t border-gray-200 animate-fade-in">
                      <div className={`flex flex-wrap gap-4 mb-4 text-sm ${
                        index % 2 === 0 ? 'justify-end' : 'justify-start'
                      } ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Award size={16} className="mr-2" />
                          <span>{edu.grade}</span>
                        </div>
                      </div>
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {edu.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
