
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { toast } = useToast();
  const { translations } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: translations.contact.messageSuccess || "Message Sent!",
        description: translations.contact.messageDescription || "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: translations.contact.emailTitle || 'Email',
      value: 'vamsee.krishna@example.com',
      href: 'mailto:vamsee.krishna@example.com'
    },
    {
      icon: Phone,
      title: translations.contact.phoneTitle || 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210'
    },
    {
      icon: MapPin,
      title: translations.contact.locationTitle || 'Location',
      value: translations.contact.location || 'Hyderabad, India 🇮🇳',
      href: '#'
    }
  ];

  return (
    <section id="contact" className={`py-20 px-6 transition-all duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto relative">
        {/* Settings Toggle - Fixed positioning */}
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-3 border border-gray-200">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <Settings size={18} />
              <span className="hidden md:block text-sm">{translations.contact.settings || 'Settings'}</span>
            </button>
            
            {showSettings && (
              <div className="mt-3 pt-3 border-t border-gray-200 animate-slide-up">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{translations.contact.darkMode || 'Dark Mode'}</span>
                  <Switch
                    checked={isDarkMode}
                    onCheckedChange={(checked) => setIsDarkMode(checked)}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
            {translations.contact.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {translations.contact.subtitle || "I'm always open to discussing new opportunities and interesting projects. Let's connect and bring your ideas to life!"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                {translations.contact.letsConnect || "Let's Connect"}
              </h3>
              <p className={`mb-8 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {translations.contact.description || "Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. Feel free to reach out through any of the channels below."}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, title, value, href }) => (
                <div key={title} className="flex items-center space-x-4 group">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg group-hover:shadow-lg transition-all duration-300">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{title}</h4>
                    <a 
                      href={href}
                      className={`hover:text-blue-600 transition-colors duration-200 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
              <h4 className="font-bold mb-2">{translations.contact.quickResponse || 'Quick Response'}</h4>
              <p className="text-blue-100">
                {translations.contact.responseTime || "I typically respond to messages within 24 hours. For urgent matters, feel free to call or send a direct email."}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {translations.contact.name}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder={translations.contact.namePlaceholder || "John Doe"}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {translations.contact.email}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder={translations.contact.emailPlaceholder || "john@example.com"}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {translations.contact.subject}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full"
                  placeholder={translations.contact.subjectPlaceholder || "Project Discussion"}
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {translations.contact.message}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full"
                  placeholder={translations.contact.messagePlaceholder || "Tell me about your project..."}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 transition-all duration-300 hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    {translations.contact.sending || 'Sending...'}
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    {translations.contact.send}
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
