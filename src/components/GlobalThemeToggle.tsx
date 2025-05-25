
import React from 'react';
import { Settings } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const GlobalThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { translations } = useLanguage();

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className={`backdrop-blur-md rounded-lg shadow-lg p-3 border transition-all duration-300 ${
        isDarkMode ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-gray-200'
      }`}>
        <div className="flex items-center space-x-2">
          <Settings size={18} className={isDarkMode ? 'text-gray-300' : 'text-gray-700'} />
          <div className="flex flex-col space-y-2">
            <span className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {translations.contact.darkMode || 'Dark Mode'}
            </span>
            <Switch
              checked={isDarkMode}
              onCheckedChange={toggleDarkMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalThemeToggle;
