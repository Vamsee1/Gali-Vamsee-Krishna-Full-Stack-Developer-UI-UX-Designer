
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { translations } = useLanguage();
  const { isDarkMode } = useTheme();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/vamsee1', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/vamsee', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vamsee@example.com', label: 'Email' }
  ];

  return (
    <footer className={`py-12 px-6 transition-all duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-900 text-white'
    }`}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {translations.hero.name}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {translations.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{translations.footer.quickLinks}</h4>
            <div className="space-y-2">
              {[
                { key: 'about', id: 'about' },
                { key: 'skills', id: 'skills' },
                { key: 'projects', id: 'projects' },
                { key: 'contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.key}
                  onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {translations.nav[link.key]}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{translations.footer.getInTouch}</h4>
            <div className="space-y-2 text-gray-400">
              <p>vamsee.krishna@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>{translations.contact.location}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0 flex items-center">
              © {currentYear} {translations.hero.name}. {translations.footer.madeWith}
              <Heart size={16} className="mx-1 text-red-500" /> 
              {translations.footer.andCoffee}
            </p>

            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
