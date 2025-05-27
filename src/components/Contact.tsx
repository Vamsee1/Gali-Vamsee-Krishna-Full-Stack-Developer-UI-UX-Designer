
import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, User, MessageSquare, Calendar, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const { translations } = useLanguage();
  const { isDarkMode } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailBody = `
New Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject}

Message:
${formData.message}

Sent from: ${window.location.origin}
Date: ${new Date().toLocaleString()}
    `;

    try {
      const mailtoLink = `mailto:vamsee.krishna@example.com?subject=${encodeURIComponent(`Contact Form: ${formData.subject}`)}&body=${encodeURIComponent(emailBody)}`;
      
      setTimeout(() => {
        window.location.href = mailtoLink;
        
        toast({
          title: "Form Submitted Successfully! ✨",
          description: "Your email client will open to send the message. Thank you for reaching out!",
        });
        
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '', company: '', phone: '' });
        setIsSubmitting(false);
        
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 1500);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
      delay: '0.1s'
    },
    {
      icon: Mail,
      title: translations.contact.emailTitle || 'Email',
      value: 'vamsee.krishna@example.com',
      href: 'mailto:vamsee.krishna@example.com',
      delay: '0.2s'
    },
    {
      icon: MapPin,
      title: translations.contact.locationTitle || 'Location',
      value: translations.contact.location || 'Hyderabad, India 🇮🇳',
      href: '#',
      delay: '0.3s'
    }
  ];

  return (
    <section id="contact" className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 transition-all duration-300 relative overflow-hidden ${
      isDarkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-16 w-2 sm:w-3 h-2 sm:h-3 rounded-full animate-float opacity-60 ${
          isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
        }`} style={{ animationDelay: '0s' }}></div>
        <div className={`absolute top-32 right-20 w-1 sm:w-2 h-1 sm:h-2 rounded-full animate-float opacity-50 ${
          isDarkMode ? 'bg-purple-400' : 'bg-purple-500'
        }`} style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-l from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-gentle-sway"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            {translations.contact.title}
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 sm:mb-8"></div>
          <p className={`max-w-2xl mx-auto leading-relaxed text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {translations.contact.subtitle || "I'm always open to discussing new opportunities and interesting projects. Let's connect and bring your ideas to life!"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="animate-slide-left">
              <h3 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                {translations.contact.letsConnect || "Let's Connect"}
              </h3>
              <p className={`mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {translations.contact.description || "Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you."}
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map(({ icon: Icon, title, value, href, delay }) => (
                <div 
                  key={title} 
                  className="flex items-center space-x-3 sm:space-x-4 group hover-lift"
                  style={{ animationDelay: delay }}
                >
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 sm:p-3 rounded-lg group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                    <Icon size={20} className="text-white sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className={`font-semibold text-sm sm:text-base ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{title}</h4>
                    <a 
                      href={href}
                      className={`hover:text-blue-600 transition-colors duration-200 text-sm sm:text-base break-all ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Response Card */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 sm:p-6 rounded-xl text-white animate-scale-in hover-glow">
              <div className="flex items-center mb-2">
                <Clock size={16} className="mr-2 animate-pulse sm:w-5 sm:h-5" />
                <h4 className="font-bold text-sm sm:text-base">{translations.contact.quickResponse || 'Quick Response'}</h4>
              </div>
              <p className="text-blue-100 text-xs sm:text-sm">
                {translations.contact.responseTime || "I typically respond to messages within 24 hours."}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-4 sm:p-6 lg:p-8 rounded-xl animate-slide-up hover-lift ${
            isDarkMode ? 'bg-gray-800/90 backdrop-blur-sm border border-gray-700' : 'bg-white/90 backdrop-blur-sm border border-gray-200 shadow-xl'
          }`}>
            {isSubmitted ? (
              <div className="text-center py-8 sm:py-12 animate-scale-in">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4 animate-bounce sm:w-16 sm:h-16" />
                <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  Thank You! ✨
                </h3>
                <p className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Your message has been sent successfully!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className={`block text-xs sm:text-sm font-medium mb-2 flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <User size={14} className="mr-2 sm:w-4 sm:h-4" />
                      {translations.contact.name} *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full text-sm sm:text-base"
                      placeholder={translations.contact.namePlaceholder || "John Doe"}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={`block text-xs sm:text-sm font-medium mb-2 flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <Mail size={14} className="mr-2 sm:w-4 sm:h-4" />
                      {translations.contact.email} *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full text-sm sm:text-base"
                      placeholder={translations.contact.emailPlaceholder || "john@example.com"}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className={`block text-xs sm:text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full text-sm sm:text-base"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={`block text-xs sm:text-sm font-medium mb-2 flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <Phone size={14} className="mr-2 sm:w-4 sm:h-4" />
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full text-sm sm:text-base"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className={`block text-xs sm:text-sm font-medium mb-2 flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <MessageSquare size={14} className="mr-2 sm:w-4 sm:h-4" />
                    {translations.contact.subject} *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full text-sm sm:text-base"
                    placeholder={translations.contact.subjectPlaceholder || "Project Discussion"}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block text-xs sm:text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {translations.contact.message} *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full text-sm sm:text-base resize-none"
                    placeholder={translations.contact.messagePlaceholder || "Tell me about your project..."}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 sm:py-3 text-sm sm:text-base transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                      {translations.contact.sending || 'Sending...'}
                    </>
                  ) : (
                    <>
                      <Send size={16} className="mr-2 sm:w-5 sm:h-5" />
                      {translations.contact.send}
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
