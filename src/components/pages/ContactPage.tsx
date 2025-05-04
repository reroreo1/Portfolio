"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

const ContactPage = ({ onNavigate }: ContactPageProps) => {
  const { theme } = useTheme();
  
  const textColor = theme === 'dark' ? '#ffffff' : '#000000';
  const accentColor = '#4dff4d'; // Green accent color for Contact page
  
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center overflow-hidden" 
      style={{ backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }}>
      <motion.div 
        className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start gap-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-light mb-8" style={{ color: accentColor }}>
            聯繫 <span style={{ color: textColor }}>Contact</span>
          </h1>
          
          <div className="space-y-6" style={{ color: textColor }}>
            <p className="text-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="mt-8 space-y-4">
              <div>
                <h3 className="text-xl mb-2" style={{ color: accentColor }}>Email</h3>
                <a href="mailto:contact@rachidezzahraouy.com" 
                  className="text-lg hover:underline transition-all duration-300"
                  style={{ color: textColor }}>
                  contact@rachidezzahraouy.com
                </a>
              </div>
              
              <div>
                <h3 className="text-xl mb-2" style={{ color: accentColor }}>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/rezzahra/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg hover:underline transition-all duration-300"
                  style={{ color: textColor }}>
                  linkedin.com/in/rezzahra
                </a>
              </div>
              
              <div>
                <h3 className="text-xl mb-2" style={{ color: accentColor }}>Location</h3>
                <p className="text-lg" style={{ color: textColor }}>
                  Morocco
                </p>
              </div>
            </div>
          </div>
          
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button 
              onClick={() => onNavigate('home')}
              className="inline-block border-b-2 pb-1 text-lg hover:pb-2 transition-all duration-300"
              style={{ borderColor: accentColor, color: accentColor }}
            >
              Back to Home
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg mb-2" style={{ color: accentColor }}>Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-all duration-300"
                style={{ 
                  borderColor: theme === 'dark' ? 'rgba(77, 255, 77, 0.3)' : 'rgba(77, 255, 77, 0.5)',
                  color: textColor
                }}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-lg mb-2" style={{ color: accentColor }}>Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-all duration-300"
                style={{ 
                  borderColor: theme === 'dark' ? 'rgba(77, 255, 77, 0.3)' : 'rgba(77, 255, 77, 0.5)',
                  color: textColor
                }}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-lg mb-2" style={{ color: accentColor }}>Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-all duration-300"
                style={{ 
                  borderColor: theme === 'dark' ? 'rgba(77, 255, 77, 0.3)' : 'rgba(77, 255, 77, 0.5)',
                  color: textColor
                }}
              ></textarea>
            </div>
            
            <button
              type="button"
              className="px-8 py-3 rounded-full text-lg transition-all duration-300"
              style={{ 
                backgroundColor: accentColor,
                color: '#000000',
              }}
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactPage;
