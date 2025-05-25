
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
    education: {
      title: "Education",
      subtitle: "My Academic Journey"
    },
    certificates: {
      title: "Certificates",
      subtitle: "Professional Certifications & Achievements"
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies I Work With"
    },
    projects: {
      title: "Projects",
      subtitle: "Some of My Recent Work"
    },
    contact: {
      title: "Get In Touch",
      subtitle: "I'm always open to discussing new opportunities and interesting projects. Let's connect and bring your ideas to life!",
      name: "Your Name",
      namePlaceholder: "John Doe",
      email: "Email Address",
      emailPlaceholder: "john@example.com",
      subject: "Subject",
      subjectPlaceholder: "Project Discussion",
      message: "Message",
      messagePlaceholder: "Tell me about your project...",
      send: "Send Message",
      sending: "Sending...",
      settings: "Settings",
      darkMode: "Dark Mode",
      letsConnect: "Let's Connect",
      description: "Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. Feel free to reach out through any of the channels below.",
      quickResponse: "Quick Response",
      responseTime: "I typically respond to messages within 24 hours. For urgent matters, feel free to call or send a direct email.",
      emailTitle: "Email",
      phoneTitle: "Phone",
      locationTitle: "Location",
      location: "Hyderabad, India 🇮🇳",
      messageSuccess: "Message Sent!",
      messageDescription: "Thank you for your message. I'll get back to you soon."
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
    education: {
      title: "शिक्षा",
      subtitle: "मेरी शैक्षणिक यात्रा"
    },
    certificates: {
      title: "प्रमाणपत्र",
      subtitle: "व्यावसायिक प्रमाणन और उपलब्धियां"
    },
    skills: {
      title: "कौशल",
      subtitle: "तकनीकें जिनके साथ मैं काम करता हूं"
    },
    projects: {
      title: "परियोजनाएं",
      subtitle: "मेरे कुछ हालिया काम"
    },
    contact: {
      title: "संपर्क करें",
      subtitle: "मैं हमेशा नए अवसरों और दिलचस्प परियोजनाओं पर चर्चा करने के लिए तैयार हूं। आइए जुड़ें और आपके विचारों को जीवंत बनाएं!",
      name: "आपका नाम",
      namePlaceholder: "जॉन डो",
      email: "ईमेल पता",
      emailPlaceholder: "john@example.com",
      subject: "विषय",
      subjectPlaceholder: "परियोजना चर्चा",
      message: "संदेश",
      messagePlaceholder: "अपनी परियोजना के बारे में बताएं...",
      send: "संदेश भेजें",
      sending: "भेजा जा रहा है...",
      settings: "सेटिंग्स",
      darkMode: "डार्क मोड",
      letsConnect: "आइए जुड़ें",
      description: "चाहे आपके मन में कोई परियोजना हो, सहयोग करना चाहते हों, या बस हैलो कहना चाहते हों, मुझे आपसे सुनना अच्छा लगेगा। नीचे दिए गए किसी भी चैनल के माध्यम से बेझिझक संपर्क करें।",
      quickResponse: "त्वरित प्रतिक्रिया",
      responseTime: "मैं आमतौर पर 24 घंटों के भीतर संदेशों का जवाब देता हूं। तत्काल मामलों के लिए, बेझिझक कॉल करें या सीधा ईमेल भेजें।",
      emailTitle: "ईमेल",
      phoneTitle: "फोन",
      locationTitle: "स्थान",
      location: "हैदराबाद, भारत 🇮🇳",
      messageSuccess: "संदेश भेजा गया!",
      messageDescription: "आपके संदेश के लिए धन्यवाद। मैं जल्द ही आपसे संपर्क करूंगा।"
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
    education: {
      title: "విద్య",
      subtitle: "నా విద్యా ప్రయాణం"
    },
    certificates: {
      title: "ప్రమాణపత్రాలు",
      subtitle: "వృత్తిపరమైన ధృవీకరణలు మరియు విజయాలు"
    },
    skills: {
      title: "నైపుణ్యాలు",
      subtitle: "నేను పనిచేసే సాంకేతికతలు"
    },
    projects: {
      title: "ప్రాజెక్టులు",
      subtitle: "నా కొన్ని ఇటీవలి పనులు"
    },
    contact: {
      title: "సంప్రదించండి",
      subtitle: "కొత్త అవకాశాలు మరియు ఆసక్తికరమైన ప్రాజెక్టుల గురించి చర్చించడానికి నేను ఎల్లప్పుడూ సిద్ధంగా ఉంటాను. కనెక్ట్ అవ్వండి మరియు మీ ఆలోచనలను జీవం పోద్దాం!",
      name: "మీ పేరు",
      namePlaceholder: "జాన్ డో",
      email: "ఇమెయిల్ చిరునామా",
      emailPlaceholder: "john@example.com",
      subject: "విషయం",
      subjectPlaceholder: "ప్రాజెక్ట్ చర్చ",
      message: "సందేశం",
      messagePlaceholder: "మీ ప్రాజెక్ట్ గురించి చెప్పండి...",
      send: "సందేశం పంపండి",
      sending: "పంపుతున్నాం...",
      settings: "సెట్టింగ్స్",
      darkMode: "డార్క్ మోడ్",
      letsConnect: "కనెక్ట్ అవ్వండి",
      description: "మీకు ఏదైనా ప్రాజెక్ట్ ఉందా, సహకరించాలని అనుకుంటున్నారా, లేదా కేవలం హలో చెప్పాలని అనుకుంటున్నారా, మీ నుండి వినడానికి నేను ఆసక్తిగా ఉంటాను. క్రింద ఉన్న ఏదైనా చానెల్ ద్వారా సంకోచం లేకుండా సంప్రదించండి।",
      quickResponse: "త్వరిత ప్రతిస్పందన",
      responseTime: "నేను సాధారణంగా 24 గంటల్లోనే సందేశాలకు సమాధానం ఇస్తాను. అత్యవసర విషయాల కోసం, సంకోచం లేకుండా కాల్ చేయండి లేదా ప్రత్యక్ష ఇమెయిల్ పంపండి।",
      emailTitle: "ఇమెయిల్",
      phoneTitle: "ఫోన్",
      locationTitle: "స్థానం",
      location: "హైదరాబాద్, భారతదేశం 🇮🇳",
      messageSuccess: "సందేశం పంపబడింది!",
      messageDescription: "మీ సందేశానికి ధన్యవాదాలు. నేను త్వరలో మీతో సంప్రదిస్తాను."
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
