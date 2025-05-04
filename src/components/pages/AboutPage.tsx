"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const AboutPage = ({ onNavigate }: AboutPageProps) => {
  const { theme } = useTheme();
  
  const textColor = theme === 'dark' ? '#ffffff' : '#000000';
  const accentColor = '#ff4d4d'; // Red accent color for About page
  
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
            關於 <span style={{ color: textColor }}>About</span>
          </h1>
          
          <div className="space-y-6" style={{ color: textColor }}>
            <p className="text-lg">
              I'm a Lead Developer at OS Websolutions with a passion for building complex systems and data-driven solutions.
            </p>
            
            <p className="text-lg">
              With expertise in full-stack development and a growing interest in machine learning and data science, 
              I create elegant solutions to complex problems.
            </p>
            
            <p className="text-lg">
              My approach combines technical excellence with a deep understanding of user needs, 
              resulting in applications that are both powerful and intuitive.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-medium mb-3" style={{ color: accentColor }}>Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Machine Learning', 'Data Science'].map((skill, index) => (
                  <span key={index} className="px-3 py-1 rounded-full text-sm" 
                    style={{ 
                      backgroundColor: theme === 'dark' ? 'rgba(255, 77, 77, 0.2)' : 'rgba(255, 77, 77, 0.1)',
                      color: accentColor
                    }}>
                    {skill}
                  </span>
                ))}
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
              onClick={() => onNavigate('work')}
              className="inline-block border-b-2 pb-1 text-lg hover:pb-2 transition-all duration-300"
              style={{ borderColor: accentColor, color: accentColor }}
            >
              View My Work →
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 relative aspect-square md:aspect-auto md:h-[500px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <Image
            src="/rachid.png"
            alt="Rachid Ezzahraouy"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-20"></div>
          <div className="absolute bottom-0 left-0 p-6 md:p-10">
            <h2 className="text-xl md:text-3xl font-light bg-opacity-70 inline-block" style={{ color: accentColor }}>
              Lead Developer
            </h2>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutPage;
