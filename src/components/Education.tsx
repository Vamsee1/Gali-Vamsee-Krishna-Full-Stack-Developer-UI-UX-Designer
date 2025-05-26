
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
      year: "2023",
      color: "from-blue-600 to-purple-600"
    },
    {
      degree: translations.education.intermediate.degree,
      institution: translations.education.intermediate.institution,
      location: translations.education.intermediate.location,
      duration: translations.education.intermediate.duration, 
      grade: translations.education.intermediate.grade,
      description: translations.education.intermediate.description,
      year: "2019",
      color: "from-purple-600 to-pink-600"
    },
    {
      degree: translations.education.certification?.degree || "Professional Certification",
      institution: translations.education.certification?.institution || "Tech Institute",
      location: translations.education.certification?.location || "Online",
      duration: translations.education.certification?.duration || "2022 - 2023", 
      grade: translations.education.certification?.grade || "Distinction",
      description: translations.education.certification?.description || "Advanced programming and development skills",
      year: "2022",
      color: "from-green-600 to-blue-600"
    },
    {
      degree: translations.education.diploma?.degree || "Diploma in Computer Science",
      institution: translations.education.diploma?.institution || "Polytechnic College",
      location: translations.education.diploma?.location || "Local Campus",
      duration: translations.education.diploma?.duration || "2017 - 2019", 
      grade: translations.education.diploma?.grade || "First Class",
      description: translations.education.diploma?.description || "Foundation in computer science and programming",
      year: "2017",
      color: "from-orange-600 to-red-600"
    },
    {
      degree: translations.education.school?.degree || "Higher Secondary Education",
      institution: translations.education.school?.institution || "High School",
      location: translations.education.school?.location || "Home Town",
      duration: translations.education.school?.duration || "2015 - 2017", 
      grade: translations.education.school?.grade || "A Grade",
      description: translations.education.school?.description || "Science stream with focus on mathematics and physics",
      year: "2015",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  return (
    <section id="education" className={`py-20 px-6 transition-all duration-300 relative overflow-hidden ${
      isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      {/* Enhanced Background Animation Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className={`absolute top-10 left-10 w-20 h-20 rounded-full animate-float ${
          isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
        }`}></div>
        <div className={`absolute top-32 right-20 w-16 h-16 rounded-full animate-bounce-slow ${
          isDarkMode ? 'bg-purple-400' : 'bg-purple-500'
        }`}></div>
        <div className={`absolute bottom-20 left-32 w-12 h-12 rounded-full animate-pulse-slow ${
          isDarkMode ? 'bg-pink-400' : 'bg-pink-500'
        }`}></div>
        <div className={`absolute bottom-40 right-10 w-14 h-14 rounded-full animate-wiggle ${
          isDarkMode ? 'bg-green-400' : 'bg-green-500'
        }`}></div>
        <div className={`absolute top-1/2 left-1/4 w-8 h-8 rounded-full animate-float ${
          isDarkMode ? 'bg-orange-400' : 'bg-orange-500'
        }`}></div>
        
        {/* Additional geometric shapes */}
        <div className={`absolute top-20 right-1/3 w-6 h-6 rotate-45 animate-wiggle ${
          isDarkMode ? 'bg-yellow-400' : 'bg-yellow-500'
        }`}></div>
        <div className={`absolute bottom-32 left-1/6 w-10 h-10 rounded-full animate-bounce-slow ${
          isDarkMode ? 'bg-red-400' : 'bg-red-500'
        }`}></div>
        <div className={`absolute top-3/4 right-1/4 w-8 h-8 rotate-12 animate-pulse-slow ${
          isDarkMode ? 'bg-teal-400' : 'bg-teal-500'
        }`}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {translations.education.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            My educational journey and academic achievements
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Enhanced Timeline Line with Gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 h-full rounded-full shadow-lg"></div>
          
          {/* Animated Timeline Dots */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full">
            {educationData.map((_, index) => (
              <div 
                key={index}
                className={`absolute w-4 h-4 bg-gradient-to-r ${educationData[index].color} rounded-full animate-pulse-slow`}
                style={{ top: `${(index * 100) / (educationData.length - 1)}%` }}
              ></div>
            ))}
          </div>
          
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className={`relative flex items-center mb-20 ${
                index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
              } animate-slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Enhanced Timeline Icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                <button
                  onClick={() => toggleExpanded(index)}
                  className={`bg-gradient-to-r ${edu.color} p-4 rounded-full hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl animate-bounce-slow`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <GraduationCap className="text-white" size={28} />
                </button>
              </div>

              {/* Enhanced Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className={`rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 hover-lift hover-glow backdrop-blur-sm border ${
                  isDarkMode 
                    ? 'bg-gray-700/80 border-gray-600' 
                    : 'bg-white/90 border-gray-200'
                }`}>
                  {/* Enhanced Year Badge */}
                  <div className={`inline-block px-6 py-3 rounded-full text-sm font-bold mb-6 bg-gradient-to-r ${edu.color} text-white shadow-lg`}>
                    {edu.year}
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    {edu.degree}
                  </h3>
                  <p className={`font-semibold mb-3 bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                    {edu.institution}
                  </p>
                  
                  <button
                    onClick={() => toggleExpanded(index)}
                    className={`flex items-center gap-2 text-sm transition-all duration-300 hover:scale-105 ${
                      index % 2 === 0 ? 'justify-end' : 'justify-start'
                    } ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}
                  >
                    {expandedItems.includes(index) ? (
                      <>
                        {translations.education.showLess} <ChevronUp size={16} className="animate-bounce" />
                      </>
                    ) : (
                      <>
                        {translations.education.showMore} <ChevronDown size={16} className="animate-bounce" />
                      </>
                    )}
                  </button>

                  {/* Enhanced Expandable Details */}
                  {expandedItems.includes(index) && (
                    <div className="mt-6 pt-6 border-t border-gray-200 animate-fade-in">
                      <div className={`flex flex-wrap gap-6 mb-6 text-sm ${
                        index % 2 === 0 ? 'justify-end' : 'justify-start'
                      } ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <div className="flex items-center bg-blue-100 px-3 py-2 rounded-lg">
                          <Calendar size={16} className="mr-2 text-blue-600" />
                          <span className="text-blue-800">{edu.duration}</span>
                        </div>
                        <div className="flex items-center bg-green-100 px-3 py-2 rounded-lg">
                          <MapPin size={16} className="mr-2 text-green-600" />
                          <span className="text-green-800">{edu.location}</span>
                        </div>
                        <div className="flex items-center bg-purple-100 px-3 py-2 rounded-lg">
                          <Award size={16} className="mr-2 text-purple-600" />
                          <span className="text-purple-800">{edu.grade}</span>
                        </div>
                      </div>
                      <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
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
