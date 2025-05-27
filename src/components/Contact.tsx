import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, User, MessageSquare, Calendar, Clock } from 'lucide-react';
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

    // Simulate email sending - Replace with actual email service
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
      // For now, we'll use mailto: which opens the user's email client
      // In a real application, you'd integrate with EmailJS, Supabase, or another email service
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
        
        // Reset submitted state after 5 seconds
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
      icon: Mail,
      title: translations.contact.emailTitle || 'Email',
      value: 'vamsee.krishna@example.com',
      href: 'mailto:vamsee.krishna@example.com',
      delay: '0.1s'
    },
    {
      icon: MapPin,
      title: translations.contact.locationTitle || 'Location',
      value: translations.contact.location || 'Hyderabad, India 🇮🇳',
      href: '#',
      delay: '0.2s'
    }
  ];

  return (
    <section id="contact" className={`py-20 px-6 transition-all duration-300 relative overflow-hidden ${
      isDarkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50'
    }`}>
      {/* Enhanced Background Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        <div className={`absolute top-20 left-16 w-3 h-3 rounded-full animate-float opacity-60 ${
          isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
        }`} style={{ animationDelay: '0s' }}></div>
        <div className={`absolute top-32 right-20 w-2 h-2 rounded-full animate-float opacity-50 ${
          isDarkMode ? 'bg-purple-400' : 'bg-purple-500'
        }`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute bottom-40 left-24 w-4 h-4 rounded-full animate-float opacity-40 ${
          isDarkMode ? 'bg-pink-400' : 'bg-pink-500'
        }`} style={{ animationDelay: '2s' }}></div>
        
        {/* Gentle gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-gentle-sway"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"></div>
        
        {/* Animated lines */}
        <div className={`absolute top-1/3 left-0 w-full h-px animate-pulse-slow opacity-20 ${
          isDarkMode ? 'bg-gradient-to-r from-transparent via-blue-400 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-500 to-transparent'
        }`}></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header with enhanced animations */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient-shift">
            {translations.contact.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-scale-in"></div>
          <p className={`max-w-2xl mx-auto leading-relaxed animate-slide-up ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {translations.contact.subtitle || "I'm always open to discussing new opportunities and interesting projects. Let's connect and bring your ideas to life!"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info with staggered animations */}
          <div className="space-y-8">
            <div className="animate-slide-left">
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                {translations.contact.letsConnect || "Let's Connect"}
              </h3>
              <p className={`mb-8 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {translations.contact.description || "Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. Feel free to reach out through any of the channels below."}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, title, value, href, delay }) => (
                <div 
                  key={title} 
                  className="flex items-center space-x-4 group animate-slide-right hover-lift"
                  style={{ animationDelay: delay }}
                >
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 animate-bounce-slow">
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

            {/* Quick Response Card with animation */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white animate-scale-in hover-glow">
              <div className="flex items-center mb-2">
                <Clock size={20} className="mr-2 animate-pulse" />
                <h4 className="font-bold">{translations.contact.quickResponse || 'Quick Response'}</h4>
              </div>
              <p className="text-blue-100">
                {translations.contact.responseTime || "I typically respond to messages within 24 hours. For urgent matters, feel free to call or send a direct email."}
              </p>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className={`p-8 rounded-xl animate-slide-up hover-lift ${
            isDarkMode ? 'bg-gray-800/90 backdrop-blur-sm border border-gray-700' : 'bg-white/90 backdrop-blur-sm border border-gray-200 shadow-xl'
          }`}>
            {isSubmitted ? (
              <div className="text-center py-12 animate-scale-in">
                <CheckCircle size={64} className="text-green-500 mx-auto mb-4 animate-bounce" />
                <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  Thank You! ✨
                </h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Your message has been sent successfully!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <label htmlFor="name" className={`block text-sm font-medium mb-2 flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <User size={16} className="mr-2" />
                      {translations.contact.name} *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full transition-all duration-300 focus:scale-105"
                      placeholder={translations.contact.namePlaceholder || "John Doe"}
                    />
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <label htmlFor="email" className={`block text-sm font-medium mb-2 flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <Mail size={16} className="mr-2" />
                      {translations.contact.email} *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full transition-all duration-300 focus:scale-105"
                      placeholder={translations.contact.emailPlaceholder || "john@example.com"}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <label htmlFor="company" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full transition-all duration-300 focus:scale-105"
                      placeholder="Your Company"
                    />
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <label htmlFor="phone" className={`block text-sm font-medium mb-2 flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <Phone size={16} className="mr-2" />
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full transition-all duration-300 focus:scale-105"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <label htmlFor="subject" className={`block text-sm font-medium mb-2 flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <MessageSquare size={16} className="mr-2" />
                    {translations.contact.subject} *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full transition-all duration-300 focus:scale-105"
                    placeholder={translations.contact.subjectPlaceholder || "Project Discussion"}
                  />
                </div>

                <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {translations.contact.message} *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full transition-all duration-300 focus:scale-105"
                    placeholder={translations.contact.messagePlaceholder || "Tell me about your project..."}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 transition-all duration-300 hover:scale-105 hover-glow animate-fade-in"
                  style={{ animationDelay: '0.7s' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      {translations.contact.sending || 'Sending...'}
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2 animate-wiggle" />
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
