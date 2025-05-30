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
      subtitle: "Passionate Developer & Creative Problem Solver",
      cleanCode: "Clean Code",
      cleanCodeDesc: "Writing maintainable and scalable code",
      uiux: "UI/UX Design",
      uiuxDesc: "Creating beautiful user experiences",
      performance: "Performance",
      performanceDesc: "Optimizing for speed and efficiency",
      collaboration: "Collaboration",
      collaborationDesc: "Working effectively in teams",
      projects: "Projects",
      experience: "Experience",
      description1: "With over 3 years of experience in web development, I specialize in creating modern, responsive applications using cutting-edge technologies. I'm passionate about writing clean, efficient code and creating intuitive user experiences.",
      description2: "My journey in technology started with curiosity and has evolved into a deep love for solving complex problems through elegant solutions. I believe in continuous learning and staying updated with the latest industry trends.",
      description3: "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community."
    },
    education: {
      title: "Education",
      subtitle: "My Academic Journey",
      showMore: "Show Details",
      showLess: "Hide Details",
      btech: {
        degree: "Bachelor of Technology in Computer Science",
        institution: "JNTUH University",
        location: "Hyderabad, India", 
        duration: "2019 - 2023",
        grade: "8.5 CGPA",
        description: "Specialized in Software Engineering, Data Structures, and Web Development"
      },
      intermediate: {
        degree: "Intermediate (12th Grade)",
        institution: "Narayana Junior College",
        location: "Hyderabad, India",
        duration: "2017 - 2019", 
        grade: "92%",
        description: "Mathematics, Physics, Chemistry (MPC)"
      }
    },
    certificates: {
      title: "Certificates",
      subtitle: "Professional Certifications & Achievements",
      list: [
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
      ]
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies I Work With",
      techTitle: "Technologies I Work With",
      technologies: ['⚛️', '🟨', '🐍', '🟢', '🍃', '🐘', '☁️', '🐳', '📦', '🎨', '🚀', '💻', '🌐', '🔗', '🔄', '📱'],
      categories: [
        {
          title: 'Frontend Development',
          icon: 'Monitor',
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
          icon: 'Server',
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
          icon: 'Database',
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
          icon: 'Cloud',
          color: 'from-orange-500 to-red-500',
          skills: [
            { name: 'AWS', level: 65, icon: '☁️' },
            { name: 'Docker', level: 60, icon: '🐳' },
            { name: 'Vercel/Netlify', level: 80, icon: '🚀' },
            { name: 'CI/CD', level: 65, icon: '🔄' }
          ]
        }
      ]
    },
    projects: {
      title: "Projects",
      subtitle: "Some of My Recent Work",
      liveDemo: "Live Demo",
      code: "Code",
      filters: {
        all: "All",
        frontend: "Frontend",
        backend: "Backend",
        fullstack: "Full Stack"
      },
      ecommerce: {
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard."
      },
      weather: {
        title: "Weather Dashboard",
        description: "Beautiful weather application with real-time data, forecasts, and interactive maps. Built with React and integrated with weather APIs."
      },
      taskapi: {
        title: "Task Management API",
        description: "RESTful API for task management with user authentication, CRUD operations, and real-time notifications using WebSockets."
      },
      portfolio: {
        title: "Portfolio Website",
        description: "Modern, responsive portfolio website with smooth animations and optimal performance. Built with React and Tailwind CSS."
      }
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
      phoneTitle: "Location",
      locationTitle: "Location",
      location: "Hyderabad, India 🇮🇳",
      messageSuccess: "Message Sent!",
      messageDescription: "Thank you for your message. I'll get back to you soon."
    },
    footer: {
      description: "Full Stack Developer passionate about creating amazing digital experiences. Always learning, always building.",
      quickLinks: "Quick Links",
      getInTouch: "Get In Touch",
      madeWith: "Made with",
      andCoffee: "and lots of coffee"
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
      subtitle: "जुनूनी डेवलपर और रचनात्मक समस्या समाधानकर्ता",
      cleanCode: "स्वच्छ कोड",
      cleanCodeDesc: "रखरखाव योग्य और स्केलेबल कोड लिखना",
      uiux: "UI/UX डिजाइन",
      uiuxDesc: "सुंदर उपयोगकर्ता अनुभव बनाना",
      performance: "प्रदर्शन",
      performanceDesc: "गति और दक्षता के लिए अनुकूलन",
      collaboration: "सहयोग",
      collaborationDesc: "टीमों में प्रभावी रूप से काम करना",
      projects: "परियोजनाएं",
      experience: "अनुभव",
      description1: "वेब डेवलपमेंट में 3 से अधिक वर्षों के अनुभव के साथ, मैं अत्याधुनिक तकनीकों का उपयोग करके आधुनिक, रेस्पॉन्सिव एप्लिकेशन बनाने में विशेषज्ञ हूं। मैं स्वच्छ, कुशल कोड लिखने और सहज उपयोगकर्ता अनुभव बनाने के बारे में भावुक हूं।",
      description2: "प्रौद्योगिकी में मेरी यात्रा जिज्ञासा के साथ शुरू हुई और सुरुचिपूर्ण समाधानों के माध्यम से जटिल समस्याओं को हल करने के गहरे प्रेम में विकसित हुई है। मैं निरंतर सीखने और नवीनतम उद्योग रुझानों के साथ अपडेट रहने में विश्वास करता हूं।",
      description3: "जब मैं कोडिंग नहीं कर रहा होता, तो आप मुझे नई तकनीकों की खोज करते, ओपन-सोर्स प्रोजेक्ट्स में योगदान करते, या डेवलपर समुदाय के साथ ज्ञान साझा करते हुए पाएंगे।"
    },
    education: {
      title: "शिक्षा",
      subtitle: "मेरी शैक्षणिक यात्रा",
      showMore: "विवरण दिखाएं",
      showLess: "विवरण छुपाएं",
      btech: {
        degree: "कंप्यूटर साइंस में प्रौद्योगिकी स्नातक",
        institution: "जेएनटीयूएच विश्वविद्यालय",
        location: "हैदराबाद, भारत",
        duration: "2019 - 2023",
        grade: "8.5 सीजीपीए",
        description: "सॉफ्टवेयर इंजीनियरिंग, डेटा स्ट्रक्चर्स और वेब डेवलपमेंट में विशेषज्ञता"
      },
      intermediate: {
        degree: "इंटरमीडिएट (12वीं कक्षा)",
        institution: "नारायणा जूनियर कॉलेज",
        location: "हैदराबाद, भारत",
        duration: "2017 - 2019",
        grade: "92%",
        description: "गणित, भौतिकी, रसायन विज्ञान (एमपीसी)"
      }
    },
    certificates: {
      title: "प्रमाणपत्र",
      subtitle: "व्यावसायिक प्रमाणन और उपलब्धियां",
      list: [
        {
          title: "रिएक्ट डेवलपर प्रमाणन",
          issuer: "मेटा",
          date: "2023",
          description: "उन्नत रिएक्ट अवधारणाएं, हुक्स और स्टेट मैनेजमेंट",
          link: "#"
        },
        {
          title: "जावास्क्रिप्ट एल्गोरिदम और डेटा स्ट्रक्चर्स",
          issuer: "freeCodeCamp",
          date: "2023",
          description: "व्यापक जावास्क्रिप्ट प्रोग्रामिंग और एल्गोरिदम",
          link: "#"
        },
        {
          title: "फुल स्टैक वेब डेवलपमेंट",
          issuer: "Coursera",
          date: "2022",
          description: "एंड-टू-एंड वेब एप्लिकेशन डेवलपमेंट",
          link: "#"
        },
        {
          title: "AWS क्लाउड प्रैक्टिशनर",
          issuer: "Amazon Web Services",
          date: "2023",
          description: "क्लाउड कंप्यूटिंग फंडामेंटल्स और AWS सेवाएं",
          link: "#"
        }
      ]
    },
    skills: {
      title: "कौशल",
      subtitle: "तकनीकें जिनके साथ मैं काम करता हूं",
      techTitle: "तकनीकें जिनके साथ मैं काम करता हूं",
      technologies: ['⚛️', '🟨', '🐍', '🟢', '🍃', '🐘', '☁️', '🐳', '📦', '🎨', '🚀', '💻', '🌐', '🔗', '🔄', '📱'],
      categories: [
        {
          title: 'फ्रंटएंड डेवलपमेंट',
          icon: 'Monitor',
          color: 'from-blue-500 to-cyan-500',
          skills: [
            { name: 'React/Next.js', level: 90, icon: '⚛️' },
            { name: 'JavaScript/TypeScript', level: 85, icon: '🟨' },
            { name: 'HTML5/CSS3', level: 90, icon: '🌐' },
            { name: 'Tailwind CSS', level: 85, icon: '🎨' }
          ]
        },
        {
          title: 'बैकएंड डेवलपमेंट',
          icon: 'Server',
          color: 'from-green-500 to-emerald-500',
          skills: [
            { name: 'Node.js', level: 80, icon: '🟢' },
            { name: 'Python', level: 75, icon: '🐍' },
            { name: 'Express.js', level: 80, icon: '🚀' },
            { name: 'REST APIs', level: 85, icon: '🔗' }
          ]
        },
        {
          title: 'डेटाबेस और टूल्स',
          icon: 'Database',
          color: 'from-purple-500 to-pink-500',
          skills: [
            { name: 'MongoDB', level: 75, icon: '🍃' },
            { name: 'PostgreSQL', level: 70, icon: '🐘' },
            { name: 'Git/GitHub', level: 90, icon: '📦' },
            { name: 'VS Code', level: 95, icon: '💻' }
          ]
        },
        {
          title: 'DevOps और क्लाउड',
          icon: 'Cloud',
          color: 'from-orange-500 to-red-500',
          skills: [
            { name: 'AWS', level: 65, icon: '☁️' },
            { name: 'Docker', level: 60, icon: '🐳' },
            { name: 'Vercel/Netlify', level: 80, icon: '🚀' },
            { name: 'CI/CD', level: 65, icon: '🔄' }
          ]
        }
      ]
    },
    projects: {
      title: "परियोजनाएं",
      subtitle: "मेरे कुछ हालिया काम",
      liveDemo: "लाइव डेमो",
      code: "कोड",
      filters: {
        all: "सभी",
        frontend: "फ्रंटएंड",
        backend: "बैकएंड",
        fullstack: "फुल स्टैक"
      },
      ecommerce: {
        title: "ई-कॉमर्स प्लेटफॉर्म",
        description: "React, Node.js और MongoDB के साथ फुल-स्टैक ई-कॉमर्स समाधान। सुविधाओं में उपयोगकर्ता प्रमाणीकरण, भुगतान एकीकरण और व्यवस्थापक डैशबोर्ड शामिल हैं।"
      },
      weather: {
        title: "मौसम डैशबोर्ड",
        description: "रियल-टाइम डेटा, पूर्वानुमान और इंटरैक्टिव मैप्स के साथ सुंदर मौसम एप्लिकेशन। React के साथ बनाया गया और मौसम APIs के साथ एकीकृत।"
      },
      taskapi: {
        title: "कार्य प्रबंधन API",
        description: "उपयोगकर्ता प्रमाणीकरण, CRUD संचालन और WebSockets का उपयोग करके रियल-टाइम अधिसूचनाओं के साथ कार्य प्रबंधन के लिए RESTful API।"
      },
      portfolio: {
        title: "पोर्टफोलियो वेबसाइट",
        description: "सुचारू एनिमेशन और इष्टतम प्रदर्शन के साथ आधुनिक, रेस्पॉन्सिव पोर्टफोलियो वेबसाइट। React और Tailwind CSS के साथ बनाया गया।"
      }
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
    },
    footer: {
      description: "फुल स्टैक डेवलपर जो अद्भुत डिजिटल अनुभव बनाने के बारे में भावुक है। हमेशा सीखते रहना, हमेशा बनाते रहना।",
      quickLinks: "त्वरित लिंक",
      getInTouch: "संपर्क करें",
      madeWith: "के साथ बनाया गया",
      andCoffee: "और बहुत सारी कॉफी"
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
      subtitle: "అభిరుచిగల డెవలపర్ మరియు సృజనాత్మక సమస్య పరిష్కర్త",
      cleanCode: "క్లీన్ కోడ్",
      cleanCodeDesc: "నిర్వహణ మరియు స్కేలబుల్ కోడ్ రాయడం",
      uiux: "UI/UX డిజైన్",
      uiuxDesc: "అందమైన వినియోగదారు అనుభవాలను సృష్టించడం",
      performance: "పనితీరు",
      performanceDesc: "వేగం మరియు సామర్థ్యం కోసం అనుకూలీకరణ",
      collaboration: "సహకారం",
      collaborationDesc: "జట్లలో సమర్థవంతంగా పనిచేయడం",
      projects: "ప్రాజెక్టులు",
      experience: "అనుభవం",
      description1: "వెబ్ డెవలప్‌మెంట్‌లో 3 సంవత్సరాలకు మించిన అనుభవంతో, నేను అత్యాధునిక సాంకేతికతలను ఉపయోగించి ఆధునిక, రెస్పాన్సివ్ అప్లికేషన్లను సృష్టించడంలో నిపుణుడిని। నేను క్లీన్, సమర్థవంతమైన కోడ్ రాయడం మరియు సహజమైన వినియోగదారు అనుభవాలను సృష్టించడంలో ఆసక్తిని కలిగి ఉన్నాను।",
      description2: "సాంకేతికతలో నా ప్రయాణం ఉత్సుకతతో ప్రారంభమైంది మరియు సొగసైన పరిష్కారాల ద్వారా సంక్లిష్ట సమస్యలను పరిష్కరించే లోతైన ప్రేమగా అభివృద్ధి చెందింది। నేను నిరంతర అభ్యాసం మరియు తాజా పరిశ్రమ ధోరణులతో అప్‌డేట్‌గా ఉండటంలో నమ్మకం కలిగి ఉన్నాను।",
      description3: "నేను కోడింగ్ చేయనప్పుడు, మీరు నన్ను కొత్త సాంకేతికతలను అన్వేషిస్తూ, ఓపెన్-సోర్స్ ప్రాజెక్ట్‌లకు సహకరిస్తూ, లేదా డెవలపర్ కమ్యూనిటీతో జ్ఞానాన్ని పంచుకుంటూ కనుగొంటారు।"
    },
    education: {
      title: "విద్య",
      subtitle: "నా విద్యా ప్రయాణం",
      showMore: "వివరాలు చూపించండి",
      showLess: "వివరాలు దాచండి",
      btech: {
        degree: "కంప్యూటర్ సైన్స్‌లో టెక్నాలజీ బ్యాచిలర్",
        institution: "జెఎన్‌టీయూహెచ్ విశ్వవిద్యాలయం",
        location: "హైదరాబాద్, భారతదేశం",
        duration: "2019 - 2023",
        grade: "8.5 సీజీపీఏ",
        description: "సాఫ్ట్‌వేర్ ఇంజనీరింగ్, డేటా స్ట్రక్చర్స్ మరియు వెబ్ డెవలప్‌మెంట్‌లో ప్రత్యేకత"
      },
      intermediate: {
        degree: "ఇంటర్మీడియట్ (12వ తరగతి)",
        institution: "నారాయణ జూనియర్ కాలేజ్",
        location: "హైదరాబాద్, భారతదేశం",
        duration: "2017 - 2019",
        grade: "92%",
        description: "గణితం, భౌతికశాస్త్రం, రసాయనశాస్త్రం (ఎంపీసీ)"
      }
    },
    certificates: {
      title: "ప్రమాణపత్రాలు",
      subtitle: "వృత్తిపరమైన ధృవీకరణలు మరియు విజయాలు",
      list: [
        {
          title: "రియాక్ట్ డెవలపర్ సర్టిఫికేషన్",
          issuer: "మెటా",
          date: "2023",
          description: "అధునాతన రియాక్ట్ కాన్సెప్ట్స్, హుక్స్ మరియు స్టేట్ మేనేజ్‌మెంట్",
          link: "#"
        },
        {
          title: "జావాస్క్రిప్ట్ ఆల్గోరిథమ్స్ మరియు డేటా స్ట్రక్చర్స్",
          issuer: "freeCodeCamp",
          date: "2023",
          description: "సమగ్ర జావాస్క్రిప్ట్ ప్రోగ్రామింగ్ మరియు ఆల్గోరిథమ్స్",
          link: "#"
        },
        {
          title: "ఫుల్ స్టాక్ వెబ్ డెవలప్‌మెంట్",
          issuer: "Coursera",
          date: "2022",
          description: "ఎండ్-టు-ఎండ్ వెబ్ అప్లికేషన్ డెవలప్‌మెంట్",
          link: "#"
        },
        {
          title: "AWS క్లౌడ్ ప్రాక్టిషనర్",
          issuer: "Amazon Web Services",
          date: "2023",
          description: "క్లౌడ్ కంప్యూటింగ్ ఫండమెంటల్స్ మరియు AWS సేవలు",
          link: "#"
        }
      ]
    },
    skills: {
      title: "నైపుణ్యాలు",
      subtitle: "నేను పనిచేసే సాంకేతికతలు",
      techTitle: "నేను పనిచేసే సాంకేతికతలు",
      technologies: ['⚛️', '🟨', '🐍', '🟢', '🍃', '🐘', '☁️', '🐳', '📦', '🎨', '🚀', '💻', '🌐', '🔗', '🔄', '📱'],
      categories: [
        {
          title: 'ఫ్రంట్‌ఎండ్ డెవలప్‌మెంట్',
          icon: 'Monitor',
          color: 'from-blue-500 to-cyan-500',
          skills: [
            { name: 'React/Next.js', level: 90, icon: '⚛️' },
            { name: 'JavaScript/TypeScript', level: 85, icon: '🟨' },
            { name: 'HTML5/CSS3', level: 90, icon: '🌐' },
            { name: 'Tailwind CSS', level: 85, icon: '🎨' }
          ]
        },
        {
          title: 'బ్యాక్‌ఎండ్ డెవలప్‌మెంట్',
          icon: 'Server',
          color: 'from-green-500 to-emerald-500',
          skills: [
            { name: 'Node.js', level: 80, icon: '🟢' },
            { name: 'Python', level: 75, icon: '🐍' },
            { name: 'Express.js', level: 80, icon: '🚀' },
            { name: 'REST APIs', level: 85, icon: '🔗' }
          ]
        },
        {
          title: 'డేటాబేస్ & టూల్స్',
          icon: 'Database',
          color: 'from-purple-500 to-pink-500',
          skills: [
            { name: 'MongoDB', level: 75, icon: '🍃' },
            { name: 'PostgreSQL', level: 70, icon: '🐘' },
            { name: 'Git/GitHub', level: 90, icon: '📦' },
            { name: 'VS Code', level: 95, icon: '💻' }
          ]
        },
        {
          title: 'DevOps & క్లౌడ్',
          icon: 'Cloud',
          color: 'from-orange-500 to-red-500',
          skills: [
            { name: 'AWS', level: 65, icon: '☁️' },
            { name: 'Docker', level: 60, icon: '🐳' },
            { name: 'Vercel/Netlify', level: 80, icon: '🚀' },
            { name: 'CI/CD', level: 65, icon: '🔄' }
          ]
        }
      ]
    },
    projects: {
      title: "ప్రాజెక్టులు",
      subtitle: "నా కొన్ని ఇటీవలి పనులు",
      liveDemo: "లైవ్ డెమో",
      code: "కోడ్",
      filters: {
        all: "అన్నీ",
        frontend: "ఫ్రంట్‌ఎండ్",
        backend: "బ్యాక్‌ఎండ్",
        fullstack: "ఫుల్ స్టాక్"
      },
      ecommerce: {
        title: "ఈ-కామర్స్ ప్లాట్‌ఫారమ్",
        description: "React, Node.js మరియు MongoDB తో ఫుల్-స్టాక్ ఈ-కామర్స్ పరిష్కారం। వినియోగదారు ప్రమాణీకరణ, చెల్లింపు ఏకీకరణ మరియు అడ్మిన్ డ్యాష్‌బోర్డ్ వంటి లక్షణాలు ఉన్నాయి।"
      },
      weather: {
        title: "వాతావరణ డ్యాష్‌బోర్డ్",
        description: "రియల్-టైమ్ డేటా, అంచనాలు మరియు ఇంటరాక్టివ్ మ్యాప్‌లతో అందమైన వాతావరణ అప్లికేషన్. React తో నిర్మించబడింది మరియు వాతావరణ APIలతో ఏకీకృతం చేయబడింది।"
      },
      taskapi: {
        title: "టాస్క్ మేనేజ్‌మెంట్ API",
        description: "వినియోగదారు ప్రమాణీకరణ, CRUD కార్యకలాపాలు మరియు WebSockets ఉపయోగించి రియల్-టైమ్ నోటిఫికేషన్లతో టాస్క్ మేనేజ్‌మెంట్ కోసం RESTful API."
      },
      portfolio: {
        title: "పోర్ట్‌ఫోలియో వెబ్‌సైట్",
        description: "మృదువైన యానిమేషన్లు మరియు సరైన పనితీరుతో ఆధునిక, రెస్పాన్సివ్ పోర్ట్‌ఫోలియో వెబ్‌సైట్. React మరియు Tailwind CSS తో నిర్మించబడింది."
      }
    },
    contact: {
      title: "సంప్రదించండి",
      subtitle: "కొత్త అవకాశాలు మరియు ఆసక్తికరమైన ప్రాజెక్టుల గురించి చర్చించడానికి నేను ఎల్లప్పుడూ సిద్ధంగా ఉంటాను। కనెక్ట్ అవ్వండి మరియు మీ ఆలోచనలను జీవం పోద్దాం!",
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
      description: "మీకు ఏదైనా ప్రాజెక్ట్ ఉందా, సహకరించాలని అనుకుంటున్నారా, లేదా కేవలం హలో చెప్పాలని అనుకుంటున్నారా, మీ నుండి వినడానికి నేను ఆసక్తిగా ఉంటాను। క్రింద ఉన్న ఏదైనా చానెల్ ద్వారా సంకోచం లేకుండా సంప్రదించండి।",
      quickResponse: "త్వరిత ప్రతిస్పందన",
      responseTime: "నేను సాధారణంగా 24 గంటల్లోనే సందేశాలకు సమాధానం ఇస్తాను। అత్యవసర విషయాల కోసం, సంకోచం లేకుండా కాల్ చేయండి లేదా ప్రత్యక్ష ఇమెయిల్ పంపండి।",
      emailTitle: "ఇమెయిల్",
      phoneTitle: "ఫోన్",
      locationTitle: "స్థానం",
      location: "హైదరాబాద్, భారతదేశం 🇮🇳",
      messageSuccess: "సందేశం పంపబడింది!",
      messageDescription: "మీ సందేశానికి ధన్యవాదాలు. నేను త్వరలో మీతో సంప్రదిస్తాను."
    },
    footer: {
      description: "అద్భుతమైన డిజిటల్ అనుభవాలను సృష్టించడంలో అభిరుచిగల ఫుల్ స్టాక్ డెవలపర్. ఎల్లప్పుడూ నేర్చుకుంటూ, ఎల్లప్పుడూ నిర్మిస్తూ.",
      quickLinks: "త్వరిత లింకులు",
      getInTouch: "సంప్రదించండి",
      madeWith: "తో తయారు చేయబడింది",
      andCoffee: "మరియు చాలా కాఫీ"
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
