"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  const { theme } = useTheme();
  
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-white dark:bg-black overflow-hidden">
      <motion.div 
        className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          Rachid Ezzahraouy
        </h1>
        
        <div className={`text-2xl md:text-3xl lg:text-4xl font-light mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          <Typewriter
            options={{
              strings: ['Lead Developer at OS Websolutions', 'Machine Learning Enthusiast', 'Data Science Student'],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </div>
        
        <motion.div 
          className="relative w-full max-w-3xl aspect-[16/9] mt-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/rachid.png"
            alt="Rachid Ezzahraouy"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="grayscale hover:grayscale-0 transition-all duration-1000"
            priority
          />
          <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black' : 'bg-white'} opacity-10 mix-blend-multiply`}></div>
        </motion.div>
        
        <motion.div 
          className="mt-12 flex space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <button 
            onClick={() => onNavigate('about')}
            className={`inline-block border-b-2 border-[#ff4d4d] text-[#ff4d4d] pb-1 text-lg hover:pb-2 transition-all duration-300`}
          >
            關於 About
          </button>
          <button 
            onClick={() => onNavigate('work')}
            className={`inline-block border-b-2 border-[#4d79ff] text-[#4d79ff] pb-1 text-lg hover:pb-2 transition-all duration-300`}
          >
            工作 Work
          </button>
          <button 
            onClick={() => onNavigate('contact')}
            className={`inline-block border-b-2 border-[#4dff4d] text-[#4dff4d] pb-1 text-lg hover:pb-2 transition-all duration-300`}
          >
            聯繫 Contact
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomePage;
