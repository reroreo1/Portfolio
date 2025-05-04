"use client";

import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import Image from 'next/image';

// Define the page sections with new color palette: #353941, #26282B, #5F85DB, #90B8F8
const sections = [
  { id: 'profile', label: '簡介', englishLabel: 'Profile', color: '#353941', darkColor: '#353941', position: 'left' },
  { id: 'experience', label: '經驗', englishLabel: 'Experience', color: '#26282B', darkColor: '#26282B', position: 'center-left' },
  { id: 'projects', label: '項目', englishLabel: 'Projects', color: '#353941', darkColor: '#353941', position: 'center-right' },
  { id: 'contact', label: '聯繫', englishLabel: 'Contact', color: '#26282B', darkColor: '#26282B', position: 'right' },
];

const DrawerNavigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('profile'); // Default to profile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Calculate section widths based on active section
  const getSectionWidth = (sectionId: string) => {
    if (sectionId === activeSection) {
      return '88%'; // Active section takes most of the screen
    } else {
      return '4%'; // Inactive sections are very slim tabs on the sides
    }
  };

  // Get section content based on ID
  const getSectionContent = (sectionId: string) => {
    switch (sectionId) {
      case 'profile':
        return (
          <div className="h-full flex flex-col">
            <div className="flex-grow flex flex-col items-start justify-center p-8 md:pl-16">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="mb-8"
              >
                <h1 className="text-6xl md:text-8xl font-bold mb-4 text-white bg-gradient-to-r from-[#5F85DB] to-[#90B8F8] bg-clip-text text-transparent tracking-tight">
                  Rachid<br/>Ezzahraouy
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-[#5F85DB] to-[#90B8F8] rounded-full mb-8"></div>
                <p className="text-2xl text-white opacity-75 mb-6 max-w-xl">Software Engineer & Full Stack Developer</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-[#26282B] bg-opacity-90 backdrop-blur-sm p-6 rounded-lg mb-6 shadow-lg border-l-4 border-[#5F85DB] text-left max-w-2xl"
              >
                <h2 className="text-2xl md:text-3xl font-light text-white">
                  <Typewriter
                    options={{
                      strings: [
                        'Software Engineer',
                        'Lead Developer at OS Websolutions',
                        'Full Stack Developer',
                        'Machine Learning Enthusiast',
                        'Data Science Student'
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 50,
                    }}
                  />
                </h2>
              </motion.div>
              <motion.div
                className="relative w-full max-w-md aspect-[4/3] mt-8 mb-8 overflow-hidden rounded-lg shadow-lg self-end mr-8 md:absolute md:right-16 md:top-1/4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/rachid.png"
                  alt="Rachid Ezzahraouy"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  className="grayscale hover:grayscale-0 transition-all duration-1000"
                  priority
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 mix-blend-multiply"
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </motion.div>
              <motion.div
                className="text-xl md:text-2xl font-light mb-12 max-w-2xl text-left bg-[#26282B] bg-opacity-90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-[#5F85DB]"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
              >
                <p className="mb-6 text-white leading-relaxed">
                  <span className="text-[#90B8F8] font-medium text-2xl block mb-2">I'm a dedicated software engineer</span>
                  with a relentless curiosity about complex systems. I quickly absorb <span className="text-[#5F85DB] font-medium">new technologies</span> and thrive in fast-paced, data-driven environments.
                </p>
                <p className="text-white leading-relaxed">
                  <span className="text-[#90B8F8] font-medium text-2xl block mb-2">My approach</span>
                  Strong <span className="text-[#5F85DB] font-medium">communication and collaboration skills</span> enable me to integrate seamlessly into any team,
                  while my passion for <span className="text-[#5F85DB] font-medium">problem-solving</span> drives me to develop innovative, efficient solutions.
                </p>
              </motion.div>
              <motion.div
                className="flex space-x-6 mt-4 self-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <motion.a
                  href="mailto:rachid.ezz.dev@gmail.com"
                  className="text-white p-3 bg-[#5F85DB] bg-opacity-30 rounded-none hover:bg-opacity-50 transition-all duration-300 border-b border-[#90B8F8]"
                  whileHover={{ scale: 1.1, rotate: 5, backgroundColor: "rgba(95, 133, 219, 0.5)", boxShadow: "0 0 10px rgba(144, 184, 248, 0.5)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/rezzahra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white p-3 bg-[#5F85DB] bg-opacity-30 rounded-none hover:bg-opacity-50 transition-all duration-300 border-b border-[#90B8F8]"
                  whileHover={{ scale: 1.1, rotate: -5, backgroundColor: "rgba(95, 133, 219, 0.5)", boxShadow: "0 0 10px rgba(144, 184, 248, 0.5)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://github.com/reroreo1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white p-3 bg-[#5F85DB] bg-opacity-30 rounded-none hover:bg-opacity-50 transition-all duration-300 border-b border-[#90B8F8]"
                  whileHover={{ scale: 1.1, rotate: 5, backgroundColor: "rgba(95, 133, 219, 0.5)", boxShadow: "0 0 10px rgba(144, 184, 248, 0.5)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
              </motion.div>
            </div>
            <div className="p-8 text-white self-start md:pl-16">
              <motion.button
                onClick={() => setActiveSection('experience')}
                className="px-6 py-3 bg-[#5F85DB] bg-opacity-30 rounded-sm text-lg hover:bg-opacity-50 transition-all duration-300 flex items-center space-x-2 border-l-2 border-[#90B8F8]"
                whileHover={{ scale: 1.05, x: 5, backgroundColor: "rgba(95, 133, 219, 0.5)", boxShadow: "0 0 10px rgba(144, 184, 248, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View My Experience</span>
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                >→</motion.span>
              </motion.button>
            </div>
          </div>
        );
      case 'experience':
        return (
          <div className="h-full flex flex-col">
            <div className="flex-grow p-8 md:pl-16 overflow-y-auto scrollbar-hide">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="mb-8"
              >
                <h1 className="text-5xl md:text-7xl font-light mb-4 text-white bg-gradient-to-r from-[#5F85DB] to-[#90B8F8] bg-clip-text text-transparent">
                  Experience & Education
                </h1>
                <div className="h-1 w-48 bg-gradient-to-r from-[#5F85DB] to-[#90B8F8] rounded-full mb-8"></div>
              </motion.div>

              <div className="mb-12">
                <motion.h2
                  className="text-3xl font-light mb-6 text-white border-b border-[#5F85DB] pb-2 flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <span className="bg-[#5F85DB] w-2 h-6 mr-3 rounded-sm"></span>
                  Professional Experience
                </motion.h2>

                <motion.div
                  className="mb-8 bg-[#26282B] bg-opacity-90 backdrop-blur-sm p-6 border-l-4 border-[#5F85DB]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-medium text-white">Lead Developer</h3>
                    <span className="text-[#90B8F8] font-medium px-3 py-1 bg-[#5F85DB] bg-opacity-30 rounded-full text-sm border border-[#90B8F8]">06/2024 - present</span>
                  </div>
                  <h4 className="text-xl text-[#90B8F8] mb-4 border-b border-[#5F85DB] pb-2">OS Websolutions</h4>
                  <div className="space-y-4 text-white">
                    <p className="bg-[#353941] p-3 border-l-2 border-[#5F85DB] mb-4"><strong className="text-[#90B8F8]">Halal Sheikh App:</strong> Developed a cross-platform barcode scanning app using Flutter with a Strapi CMS backend, allowing users to check if products are halal or haram by scanning barcodes or searching by name. Integrated OCR for ingredient extraction, implemented scan history and product addition, and handled deployment on App Store and Google Play.</p>
                    <p className="bg-[#353941] p-3 border-t-2 border-[#5F85DB] mb-4"><strong className="text-[#90B8F8]">ActiveCSP:</strong> Built an OSINT platform to monitor user assets like IPs, domains, and emails using tools such as Nmap, Nuclei, and honeypots. Deployed 15 global honeypots on Azure VMs, developed scanning services with FastAPI, Docker, and Bash, and orchestrated the backend using Azure Functions.</p>
                    <p className="bg-[#353941] p-3 border-b-2 border-[#5F85DB]"><strong className="text-[#90B8F8]">Leadshift:</strong> Developed an AI-powered lead generation platform that automates cold outreach via emails and calls. Implemented the frontend using Next.js and ShadCN, and built the backend with NestJS. Oversaw the overall system design and selected the tech stack to support scalability and performance.</p>
                  </div>
                </motion.div>

                <motion.div
                  className="mb-8 bg-[#26282B] bg-opacity-90 backdrop-blur-sm p-6 border-l-4 border-[#5F85DB]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-medium text-white">Full Stack Developer</h3>
                    <span className="text-[#90B8F8] font-medium px-3 py-1 bg-[#5F85DB] bg-opacity-30 rounded-full text-sm border border-[#90B8F8]">11/2023 - 04/2024</span>
                  </div>
                  <h4 className="text-xl text-[#90B8F8] mb-4 border-b border-[#5F85DB] pb-2">UMoP College of Computing</h4>
                  <div className="space-y-3 text-white bg-[#353941] p-3 rounded-md border border-[#5F85DB]">
                    <p>Skills: <span className="text-[#90B8F8]">Python (Programming Language)</span> · <span className="text-[#90B8F8]">NumPy</span> · <span className="text-[#90B8F8]">Angular</span></p>
                  </div>
                </motion.div>
              </div>

              <div>
                <motion.h2
                  className="text-3xl font-light mb-6 text-white border-b border-[#5F85DB] pb-2 flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <span className="bg-[#5F85DB] w-2 h-6 mr-3 rounded-sm"></span>
                  Education
                </motion.h2>

                <motion.div
                  className="mb-6 bg-[#26282B] bg-opacity-90 backdrop-blur-sm p-6 border-r-4 border-[#5F85DB]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-medium text-white">Member, software architect</h3>
                    <span className="text-[#90B8F8] font-medium px-3 py-1 bg-[#5F85DB] bg-opacity-30 rounded-full text-sm border border-[#90B8F8]">2026</span>
                  </div>
                  <h4 className="text-xl text-[#90B8F8] border-b border-[#5F85DB] pb-2">1337 Benguerir</h4>
                  <div className="mt-3 bg-[#353941] p-3 rounded-md text-white border border-[#5F85DB]">
                    <p>Specialized in software architecture and advanced programming techniques.</p>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-[#26282B] bg-opacity-90 backdrop-blur-sm p-6 border-r-4 border-[#5F85DB]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-medium text-white">École nationale des sciences appliquées d'Agadir</h3>
                    <span className="text-[#90B8F8] font-medium px-3 py-1 bg-[#5F85DB] bg-opacity-30 rounded-full text-sm border border-[#90B8F8]">2018 - 2020</span>
                  </div>
                  <h4 className="text-xl text-[#90B8F8] border-b border-[#5F85DB] pb-2">Computer Science & Engineering</h4>
                  <div className="mt-3 bg-[#353941] p-3 rounded-md text-white border border-[#5F85DB]">
                    <p>Focused on computer science fundamentals and engineering principles.</p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="p-8 text-white">
              <motion.button
                onClick={() => setActiveSection('projects')}
                className="px-6 py-3 bg-[#5F85DB] bg-opacity-30 rounded-none text-lg hover:bg-opacity-50 transition-all duration-300 flex items-center space-x-2 border-b-2 border-[#90B8F8]"
                whileHover={{ scale: 1.05, x: 5, backgroundColor: "rgba(95, 133, 219, 0.5)", boxShadow: "0 0 10px rgba(144, 184, 248, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View My Projects</span>
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                >→</motion.span>
              </motion.button>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="h-full flex flex-col">
            <div className="flex-grow p-8 md:pl-16 overflow-y-auto scrollbar-hide">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="mb-8"
              >
                <h1 className="text-5xl md:text-7xl font-light mb-4 text-white bg-gradient-to-r from-[#5F85DB] to-[#90B8F8] bg-clip-text text-transparent">
                  Projects & Skills
                </h1>
                <div className="h-1 w-48 bg-gradient-to-r from-[#5F85DB] to-[#90B8F8] rounded-full mb-8"></div>
              </motion.div>

              <div className="mb-12">
                <motion.h2
                  className="text-3xl font-light mb-6 text-white border-b border-[#5F85DB] pb-2 flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <span className="bg-[#5F85DB] w-2 h-6 mr-3 rounded-sm"></span>
                  Skills
                </motion.h2>
                <div className="space-y-8">
                  {/* Frontend Skills */}
                  <div>
                    <h3 className="text-2xl font-medium mb-4 text-white flex items-center">
                      <span className="bg-[#5F85DB] w-2 h-6 mr-3 rounded-sm"></span>
                      Frontend
                    </h3>
                    <motion.div
                      className="flex flex-wrap gap-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
                    >
                      {[
                        'Next.js', 'Angular', 'React.js', 'TypeScript', 'JavaScript',
                        'TailwindCSS', 'Bootstrap', 'Flutter', 'Dart', 'Version Control'
                      ].map((skill, index) => (
                        <motion.span
                          key={skill}
                          className="px-4 py-2 bg-[#5F85DB] bg-opacity-30 text-white text-sm flex items-center border-b border-[#90B8F8]"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: index * 0.03,
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                          }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(95, 133, 219, 0.5)",
                            transition: { duration: 0.2 }
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Databases Skills */}
                  <div>
                    <h3 className="text-2xl font-medium mb-4 text-white flex items-center">
                      <span className="bg-[#5F85DB] w-2 h-6 mr-3 rounded-sm"></span>
                      Databases
                    </h3>
                    <motion.div
                      className="flex flex-wrap gap-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ staggerChildren: 0.05, delayChildren: 0.3 }}
                    >
                      {[
                        'MySQL', 'PostgreSQL', 'MongoDB', 'GraphQL'
                      ].map((skill, index) => (
                        <motion.span
                          key={skill}
                          className="px-4 py-2 bg-[#5F85DB] bg-opacity-30 text-white text-sm flex items-center border-t border-[#90B8F8]"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: index * 0.03,
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                          }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(95, 133, 219, 0.5)",
                            transition: { duration: 0.2 }
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>

                  {/* DevOps Skills */}
                  <div>
                    <h3 className="text-2xl font-medium mb-4 text-white flex items-center">
                      <span className="bg-[#5F85DB] w-2 h-6 mr-3 rounded-sm"></span>
                      DevOps
                    </h3>
                    <motion.div
                      className="flex flex-wrap gap-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ staggerChildren: 0.05, delayChildren: 0.4 }}
                    >
                      {[
                        'Docker', 'Linux', 'AWS', 'Digital Ocean', 'Microsoft Azure'
                      ].map((skill, index) => (
                        <motion.span
                          key={skill}
                          className="px-4 py-2 bg-[#5F85DB] bg-opacity-30 text-white text-sm flex items-center border-l border-[#90B8F8]"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: index * 0.03,
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                          }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(95, 133, 219, 0.5)",
                            transition: { duration: 0.2 }
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Backend Skills */}
                  <div>
                    <h3 className="text-2xl font-medium mb-4 text-white flex items-center">
                      <span className="bg-[#5F85DB] w-2 h-6 mr-3 rounded-sm"></span>
                      Backend
                    </h3>
                    <motion.div
                      className="flex flex-wrap gap-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ staggerChildren: 0.05, delayChildren: 0.5 }}
                    >
                      {[
                        'Python', 'Flask', 'FastAPI', 'JavaScript', 'TypeScript', 'Node.js', 'Express'
                      ].map((skill, index) => (
                        <motion.span
                          key={`backend-${skill}-${index}`}
                          className="px-4 py-2 bg-[#5F85DB] bg-opacity-30 text-white text-sm flex items-center border-r border-[#90B8F8]"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: index * 0.03,
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                          }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(95, 133, 219, 0.5)",
                            transition: { duration: 0.2 }
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>

              <div>
                <motion.h2
                  className="text-3xl font-light mb-6 text-white border-b border-[#5F85DB] pb-2 flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <span className="bg-[#5F85DB] w-2 h-6 mr-3 rounded-sm"></span>
                  Certificates
                </motion.h2>

                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                >
                  <motion.div
                    className="p-5 bg-[#26282B] bg-opacity-90 border-t-2 border-[#5F85DB] hover:border-[#90B8F8] transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.5)",
                      backgroundColor: "rgba(95, 133, 219, 0.2)"
                    }}
                  >
                    <h3 className="text-xl font-medium text-white flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Meta Full Stack Developer Specialization (React-Django)
                    </h3>
                    <p className="text-white text-opacity-80 mt-2 ml-7">Meta - 2023</p>
                  </motion.div>

                  <motion.div
                    className="p-5 bg-[#26282B] bg-opacity-90 border-r-2 border-[#5F85DB] hover:border-[#90B8F8] transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.5)",
                      backgroundColor: "rgba(95, 133, 219, 0.2)"
                    }}
                  >
                    <h3 className="text-xl font-medium text-white flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Programming with Javascript
                    </h3>
                    <p className="text-white text-opacity-80 mt-2 ml-7">Coursera - 2023</p>
                  </motion.div>

                  <motion.div
                    className="p-5 bg-[#26282B] bg-opacity-90 border-b-2 border-[#5F85DB] hover:border-[#90B8F8] transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.5)",
                      backgroundColor: "rgba(95, 133, 219, 0.2)"
                    }}
                  >
                    <h3 className="text-xl font-medium text-white flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Data Structure and Algorithmic using Javascript
                    </h3>
                    <p className="text-white text-opacity-80 mt-2 ml-7">Coursera - 2023</p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            <div className="p-8 text-white">
              <motion.button
                onClick={() => setActiveSection('contact')}
                className="px-6 py-3 bg-[#5F85DB] bg-opacity-30 rounded-full text-lg hover:bg-opacity-50 transition-all duration-300 flex items-center space-x-2 border border-[#90B8F8]"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Contact Me</span>
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                >→</motion.span>
              </motion.button>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="h-full flex flex-col">
            <div className="flex-grow flex flex-col md:flex-row p-8 md:pl-16">
              <motion.div
                className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                  className="mb-8"
                >
                  <h1 className="text-5xl md:text-7xl font-light mb-4 text-white bg-gradient-to-r from-[#5F85DB] to-[#90B8F8] bg-clip-text text-transparent">
                    Contact
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-[#5F85DB] to-[#90B8F8] rounded-full mb-8"></div>
                </motion.div>

                <motion.div
                  className="bg-[#26282B] bg-opacity-90 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-8 border border-[#5F85DB]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <p className="text-xl font-light text-white">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                  </p>
                </motion.div>

                <div className="space-y-4">
                  <motion.div
                    className="bg-[#26282B] bg-opacity-90 backdrop-blur-sm p-4 flex items-center border-l-2 border-[#5F85DB]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="bg-[#5F85DB] bg-opacity-50 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#90B8F8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl mb-1 text-[#90B8F8] font-medium">Email</h3>
                      <a href="mailto:rachid.ezz.dev@gmail.com" className="text-white hover:text-[#90B8F8] transition-colors">
                        rachid.ezz.dev@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-[#26282B] bg-opacity-90 backdrop-blur-sm p-4 flex items-center border-t-2 border-[#5F85DB]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="bg-[#5F85DB] bg-opacity-50 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#90B8F8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl mb-1 text-[#90B8F8] font-medium">Phone</h3>
                      <a href="tel:+212777969175" className="text-white hover:text-[#90B8F8] transition-colors">
                        +212 777 969 175
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-[#26282B] bg-opacity-90 backdrop-blur-sm p-4 flex items-center border-r-2 border-[#5F85DB]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="bg-[#5F85DB] bg-opacity-50 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#90B8F8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl mb-1 text-[#90B8F8] font-medium">Location</h3>
                      <p className="text-white">
                        Dcheira El Jihadia, Agadir
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-[#26282B] bg-opacity-90 backdrop-blur-sm p-4 flex items-center border-b-2 border-[#5F85DB]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="bg-[#5F85DB] bg-opacity-50 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#90B8F8]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl mb-1 text-[#90B8F8] font-medium">LinkedIn</h3>
                      <a href="https://www.linkedin.com/in/rezzahra/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#90B8F8] transition-colors">
                        linkedin.com/in/rezzahra
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-[#26282B] bg-opacity-90 backdrop-blur-sm p-4 flex items-center border-l-2 border-r-2 border-[#5F85DB]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="bg-[#5F85DB] bg-opacity-50 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#90B8F8]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl mb-1 text-[#90B8F8] font-medium">GitHub</h3>
                      <a href="https://github.com/reroreo1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#90B8F8] transition-colors">
                        github.com/reroreo1
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              <div className="w-full md:w-1/2">
                <motion.div
                  className="bg-[#26282B] bg-opacity-90 backdrop-blur-sm p-6 border-t-2 border-b-2 border-[#5F85DB]"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, type: "spring" }}
                >
                  <motion.h2
                    className="text-3xl font-light mb-6 text-white border-b border-[#5F85DB] pb-2 flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <span className="bg-[#5F85DB] w-2 h-6 mr-3 rounded-sm"></span>
                    Send a Message
                  </motion.h2>

                  <motion.form
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                      className="bg-[#353941] bg-opacity-80 p-4 border-l-2 border-[#5F85DB]"
                    >
                      <label htmlFor="name" className="block text-lg mb-2 text-[#90B8F8] font-medium">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 bg-black bg-opacity-30 border-b border-[#5F85DB] focus:border-[#90B8F8] focus:outline-none text-white transition-all duration-300"
                        placeholder="Your name"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                      className="bg-[#353941] bg-opacity-80 p-4 border-r-2 border-[#5F85DB]"
                    >
                      <label htmlFor="email" className="block text-lg mb-2 text-[#90B8F8] font-medium">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-black bg-opacity-30 border-b border-[#5F85DB] focus:border-[#90B8F8] focus:outline-none text-white transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                      className="bg-[#353941] bg-opacity-80 p-4 border-t-2 border-[#5F85DB]"
                    >
                      <label htmlFor="message" className="block text-lg mb-2 text-[#90B8F8] font-medium">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 bg-black bg-opacity-30 border-b border-[#5F85DB] focus:border-[#90B8F8] focus:outline-none text-white transition-all duration-300"
                        placeholder="Your message here..."
                      ></textarea>
                    </motion.div>
                    <motion.button
                      type="button"
                      className="w-full px-8 py-4 bg-gradient-to-r from-[#5F85DB] to-[#90B8F8] text-white text-lg hover:from-[#5F85DB] hover:to-[#5F85DB] transition-all duration-300 flex items-center justify-center space-x-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
                      whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(95, 133, 219, 0.6)" }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span>Send Message</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.button>
                  </motion.form>
                </motion.div>
              </div>
            </div>
            <div className="p-8 text-white self-start md:pl-16">
              <motion.button
                onClick={() => setActiveSection('profile')}
                className="px-6 py-3 bg-[#5F85DB] bg-opacity-30 rounded-none text-lg hover:bg-opacity-50 transition-all duration-300 flex items-center space-x-2 border-t-2 border-[#90B8F8]"
                whileHover={{ scale: 1.05, x: -5, backgroundColor: "rgba(95, 133, 219, 0.5)", boxShadow: "0 0 10px rgba(144, 184, 248, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: [0, -5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                >←</motion.span>
                <span>Back to Profile</span>
              </motion.button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Toggle menu for mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed inset-0 flex flex-col h-screen w-screen overflow-hidden">
      {/* Header with logo and menu button */}
      <motion.header
        className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.2
        }}
      >
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="text-2xl font-bold text-white bg-opacity-10 p-3 rounded-full">
            RE
          </Link>
        </motion.div>

        <div className="flex items-center space-x-4">
          <motion.button
            onClick={toggleTheme}
            className="p-3 text-white bg-[#5F85DB] bg-opacity-30 rounded-none hover:bg-opacity-50 transition-all duration-300 border-l-2 border-[#90B8F8]"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            whileHover={{ scale: 1.1, rotate: 15, backgroundColor: "rgba(95, 133, 219, 0.5)", boxShadow: "0 0 10px rgba(144, 184, 248, 0.5)" }}
            whileTap={{ scale: 0.9, rotate: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </motion.button>

          <motion.button
            onClick={toggleMenu}
            className="md:hidden p-3 text-white bg-[#5F85DB] bg-opacity-30 rounded-none hover:bg-opacity-50 border-r-2 border-[#90B8F8]"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(95, 133, 219, 0.5)", boxShadow: "0 0 10px rgba(144, 184, 248, 0.5)" }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white block transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white block transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-full h-0.5 bg-white block transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#26282B] bg-opacity-95 md:hidden flex flex-col items-center justify-center"
          >
            <motion.nav
              className="flex flex-col items-center space-y-8"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                staggerChildren: 0.15,
                delayChildren: 0.2
              }}
            >
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  onClick={() => {
                    setActiveSection(section.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-2xl font-light transition-all duration-300 px-6 py-2 ${
                    activeSection === section.id
                      ? 'text-white font-normal bg-[#5F85DB] bg-opacity-30 border-l-2 border-[#90B8F8]'
                      : 'text-gray-400 hover:text-[#90B8F8] hover:bg-[#5F85DB] hover:bg-opacity-20 hover:border-l-2 hover:border-[#90B8F8]'
                  }`}
                  style={{ color: activeSection === section.id ? (theme === 'dark' ? section.darkColor : section.color) : '' }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(144, 184, 248, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.englishLabel}
                </motion.button>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Drawer Navigation */}
      <div className="hidden md:flex h-full">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            className="h-full overflow-hidden relative"
            style={{
              backgroundColor: theme === 'dark' ? section.darkColor : section.color,
              cursor: activeSection === section.id ? 'default' : 'pointer'
            }}
            initial={{
              width: 0,
              y: 800,
              opacity: 0
            }}
            animate={{
              width: getSectionWidth(section.id),
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: index * 0.15, // Staggered delay based on index
              opacity: { duration: 0.5, delay: index * 0.15 + 0.2 }
            }}
            onClick={() => activeSection !== section.id && setActiveSection(section.id)}
          >
            {/* Vertical text for collapsed sections */}
            {activeSection !== section.id && (
              <div className="absolute inset-0 flex items-center justify-center hover:bg-[#5F85DB] hover:bg-opacity-20 hover:shadow-[inset_0_0_0_1px_#90B8F8] transition-all duration-300">
                <motion.div
                  className="transform rotate-90 whitespace-nowrap"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  whileHover={{ scale: 1.05, color: "#90B8F8" }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    delay: index * 0.15 + 0.3 // Staggered delay for text appearance
                  }}
                >
                  <h2 className="text-lg font-light text-white flex items-center space-x-2">
                    <span className="font-normal">{section.englishLabel}</span>
                    <motion.span
                      initial={{ x: -5, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.5 }}
                    >→</motion.span>
                  </h2>
                </motion.div>
              </div>
            )}

            {/* Content for expanded section */}
            {activeSection === section.id && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="h-full overflow-y-auto scrollbar-hide"
              >
                {getSectionContent(section.id)}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Mobile Content */}
      <div className="md:hidden h-full overflow-hidden">
        <motion.div
          className="h-full overflow-y-auto scrollbar-hide"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.3
          }}
          style={{
            backgroundColor: theme === 'dark'
              ? sections.find(s => s.id === activeSection)?.darkColor
              : sections.find(s => s.id === activeSection)?.color
          }}
        >
          {getSectionContent(activeSection)}
        </motion.div>
      </div>
    </div>
  );
};

export default DrawerNavigation;
