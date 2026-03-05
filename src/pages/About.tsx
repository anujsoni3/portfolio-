import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-accent-purple">About</span> Me
            </h1>
            <p className="text-xl text-soft-blue/80">
              Get to know the person behind the code
            </p>
          </div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-black/30 border border-cyan-bright/20 rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold text-cyan-bright mb-6">My Journey</h2>
            <div className="space-y-4 text-soft-blue/90 leading-relaxed">
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
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-black/30 border border-cyan-bright/20 rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold text-cyan-bright mb-6">Education</h2>
            <div className="flex items-start gap-4">
              <div className="bg-accent-purple/20 p-3 rounded-lg">
                <GraduationCap className="text-accent-purple" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-soft-blue mb-2">
                  Indian Institute of Information Technology, Nagpur
                </h3>
                <p className="text-soft-blue/80 mb-2">
                  Bachelor of Technology in Computer Science & Engineering
                </p>
                <div className="flex items-center gap-4 text-sm text-soft-blue/60">
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
                  <Award className="text-terminal-green" size={16} />
                  <span className="text-terminal-green text-sm">Strong Academic Performance</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interests Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-black/30 border border-cyan-bright/20 rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold text-cyan-bright mb-6">Interests & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-soft-blue mb-3">Technical Interests</h3>
                <ul className="space-y-2 text-soft-blue/80">
                  <li>• Full Stack Web Development</li>
                  <li>• Machine Learning & AI</li>
                  <li>• Database Design & Optimization</li>
                  <li>• System Architecture</li>
                  <li>• Open Source Contribution</li>
                  <li>• DevOps & Automation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-soft-blue mb-3">Personal Interests</h3>
                <ul className="space-y-2 text-soft-blue/80">
                  <li>• Competitive Programming</li>
                  <li>• Tech Innovation & Research</li>
                  <li>• Hackathons & Coding Contests</li>
                  <li>• Mentoring & Knowledge Sharing</li>
                  <li>• Exploring Emerging Technologies</li>
                  <li>• Problem Solving & Algorithm Design</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;