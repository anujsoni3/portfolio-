import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import GlowCard from '../components/GlowCard';
import AboutRobot from '../components/AboutRobot';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
              <span className="text-accent-sub">About</span> Me
            </h1>
            <p className="text-xl text-text-secondary">
              Get to know the person behind the code
            </p>
          </div>

          {/* Bio & Robot Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
            {/* My Journey Card */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}>
              <GlowCard
                glowColor="124, 138, 255"
                className="bg-bg-card border border-border-theme rounded-lg p-8 h-full flex flex-col justify-center relative z-20"
                style={{ boxShadow: 'var(--card-shadow)' }}
              >
                <h2 className="text-2xl font-bold text-accent-primary mb-6">My Journey</h2>
                <div className="space-y-4 text-text-secondary leading-relaxed relative z-20">
                  <p>
                    Hello! I'm Anuj Soni, a passionate Computer Science student at IIIT Nagpur with a strong foundation in full-stack development and machine learning. My journey in technology began with curiosity about how digital systems work, which led me to explore the fascinating intersection of software engineering and artificial intelligence.
                  </p>
                  <p>
                    I specialize in building robust web applications using modern technologies like React, Node.js, Python, and various machine learning frameworks. My experience spans across frontend development, backend architecture, database management, and ML implementations. I believe in writing clean, efficient code that not only works but is also maintainable and scalable.
                  </p>
                  <p>
                    Recently, I completed a software development internship at NHPC Limited, where I developed the BackupManager system - a comprehensive solution that automated backup processes and significantly improved operational efficiency. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or participating in hackathons.
                  </p>
                </div>
              </GlowCard>
            </motion.div>

            {/* 3D Robot Mascot (Side Panel) */}
            <motion.div 
               className="w-full relative min-h-[400px] flex items-start justify-center z-10 -mt-8 lg:-mt-16"
               initial={{ opacity: 0, x: 30 }} 
               animate={{ opacity: 1, x: 0 }} 
               transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
               {/* Unrestricted scale layout with a vignette blend to remove harsh edges */}
               <div 
                 className="absolute inset-0 pointer-events-auto flex items-center justify-center mix-blend-screen scale-[1.1] md:scale-110 -translate-y-8"
                 style={{
                   WebkitMaskImage: 'radial-gradient(circle at 50% 40%, black 40%, transparent 65%)',
                   maskImage: 'radial-gradient(circle at 50% 40%, black 40%, transparent 65%)'
                 }}
               >
                 <AboutRobot />
               </div>
               <div className="absolute bottom-4 left-0 w-full text-center pointer-events-none md:hidden">
                  <span className="text-text-muted/40 text-[10px] tracking-widest font-mono uppercase">
                    Interactive AI
                  </span>
               </div>
            </motion.div>
          </div>

          {/* Education Section */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}>
            <GlowCard
              glowColor="140, 122, 230"
              className="bg-bg-card border border-border-theme rounded-lg p-8"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <h2 className="text-2xl font-bold text-accent-primary mb-6">Education</h2>
              <div className="flex items-start gap-4">
                <div className="bg-accent-sub/10 p-3 rounded-lg">
                  <GraduationCap className="text-accent-sub" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    Indian Institute of Information Technology, Nagpur
                  </h3>
                  <p className="text-text-secondary mb-2">
                    Bachelor of Technology in Computer Science & Engineering
                  </p>
                  <div className="flex items-center gap-4 text-sm text-text-muted">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>2021 - 2025</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>Nagpur, Maharashtra</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <Award className="text-terminal-success" size={16} />
                    <span className="text-terminal-success text-sm">Strong Academic Performance</span>
                  </div>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Interests Section */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}>
            <GlowCard
              glowColor="47, 111, 109"
              className="bg-bg-card border border-border-theme rounded-lg p-8"
              style={{ boxShadow: 'var(--card-shadow)' }}
            >
              <h2 className="text-2xl font-bold text-accent-primary mb-6">Interests & Expertise</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Technical Interests</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• Full Stack Web Development</li>
                    <li>• Machine Learning & AI</li>
                    <li>• Database Design & Optimization</li>
                    <li>• System Architecture</li>
                    <li>• Open Source Contribution</li>
                    <li>• DevOps & Automation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Personal Interests</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• Competitive Programming</li>
                    <li>• Tech Innovation & Research</li>
                    <li>• Hackathons & Coding Contests</li>
                    <li>• Mentoring & Knowledge Sharing</li>
                    <li>• Exploring Emerging Technologies</li>
                    <li>• Problem Solving & Algorithm Design</li>
                  </ul>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;