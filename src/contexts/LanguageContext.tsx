
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'te';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: any;
}

const translations = {
  en: {
    hero: {
      greeting: "Hi, I'm",
      name: "Vamsee Krishna",
      title: "Full Stack Developer",
      description: "I create amazing web applications with modern technologies"
    },
    nav: {
      about: "About",
      education: "Education", 
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      certificates: "Certificates"
    },
    about: {
      title: "About Me",
      subtitle: "Passionate Developer & Creative Problem Solver"
    },
    contact: {
      title: "Get In Touch",
      name: "Your Name",
      email: "Email Address", 
      subject: "Subject",
      message: "Message",
      send: "Send Message"
    }
  },
  hi: {
    hero: {
      greeting: "नमस्ते, मैं हूँ",
      name: "वामसी कृष्ण",
      title: "फुल स्टैक डेवलपर",
      description: "मैं आधुनिक तकनीकों के साथ अद्भुत वेब एप्लिकेशन बनाता हूँ"
    },
    nav: {
      about: "परिचय",
      education: "शिक्षा",
      skills: "कौशल", 
      projects: "परियोजनाएं",
      contact: "संपर्क",
      certificates: "प्रमाणपत्र"
    },
    about: {
      title: "मेरे बारे में",
      subtitle: "जुनूनी डेवलपर और रचनात्मक समस्या समाधानकर्ता"
    },
    contact: {
      title: "संपर्क करें",
      name: "आपका नाम",
      email: "ईमेल पता",
      subject: "विषय", 
      message: "संदेश",
      send: "संदेश भेजें"
    }
  },
  te: {
    hero: {
      greeting: "నమస్కారం, నేను",
      name: "వంశీ కృష్ణ",
      title: "ఫుల్ స్టాక్ డెవలపర్",
      description: "నేను ఆధునిక సాంకేతికతతలతో అద్భుతమైన వెబ్ అప్లికేషన్లను సృష్టిస్తాను"
    },
    nav: {
      about: "గురించి",
      education: "విద్య",
      skills: "నైపుణ్యాలు",
      projects: "ప్రాజెక్టులు", 
      contact: "సంప్రదింపు",
      certificates: "ప్రమాణపత్రాలు"
    },
    about: {
      title: "నా గురించి",
      subtitle: "అభిరుచిగల డెవలపర్ మరియు సృజనాత్మక సమస్య పరిష్కర్త"
    },
    contact: {
      title: "సంప్రదించండి",
      name: "మీ పేరు",
      email: "ఇమెయిల్ చిరునామా",
      subject: "విషయం",
      message: "సందేశం", 
      send: "సందేశం పంపండి"
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
