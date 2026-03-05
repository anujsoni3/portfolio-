import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Brain, Sparkles, Terminal, Zap } from 'lucide-react';
import HeroCLI from '../components/HeroCLI';

interface HomeProps {
  userName: string;
}

const Home: React.FC<HomeProps> = ({ userName }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    'Full Stack Developer',
    'ML Enthusiast', 
    'Problem Solver',
    'Code Architect'
  ];

  const stats = [
    { label: 'Projects Completed', value: '15+', icon: Code },
    { label: 'Technologies Mastered', value: '20+', icon: Database },
    { label: 'Years of Learning', value: '3+', icon: Brain },
    { label: 'Lines of Code', value: '50K+', icon: Terminal },
  ];

  const featuredSkills = [
    { 
      icon: Code, 
      name: 'Full Stack Development', 
      color: 'text-cyan-bright',
      description: 'React, Node.js, Python, Django'
    },
    { 
      icon: Database, 
      name: 'Database Management', 
      color: 'text-accent-purple',
      description: 'PostgreSQL, MongoDB, Redis'
    },
    { 
      icon: Brain, 
      name: 'Machine Learning', 
      color: 'text-terminal-green',
      description: 'TensorFlow, Scikit-learn, Pandas'
    },
  ];

  const highlights = [
    'NHPC Limited Intern - Best Intern Award',
    'BackupManager System - 80% efficiency improvement',
    'IIIT Nagpur - Computer Science Engineering',
    'Open Source Contributor & Tech Enthusiast'
  ];

  // Typewriter effect for roles
  useEffect(() => {
    const currentRoleText = roles[currentRole];
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index <= currentRoleText.length) {
        setDisplayText(currentRoleText.slice(0, index));
        index++;
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRole]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-bright/20 rounded-full"
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200), 
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                opacity: 0 
              }}
              animate={{ 
                y: [null, -100],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center gap-2 mb-4"
              >
                <Sparkles className="text-cyan-bright" size={18} />
                <span className="text-cyan-bright text-sm font-medium">Welcome to my digital universe</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
              >
                Hi {userName} 👋<br />
                <span className="text-cyan-bright">I'm Anuj Soni</span><br />
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-accent-purple">{displayText}</span>
                  <motion.span
                    animate={{ opacity: isTyping ? [1, 0] : 1 }}
                    transition={{ duration: 0.5, repeat: isTyping ? Infinity : 0 }}
                    className="text-cyan-bright font-bold"
                  >
                    |
                  </motion.span>
                </div>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg sm:text-xl text-soft-blue/80 mb-6 sm:mb-8 leading-relaxed"
              >
                Computer Science student at <span className="text-cyan-bright font-semibold">IIIT Nagpur</span>, 
                passionate about building innovative solutions at the intersection of technology and creativity. 
                Recently awarded <span className="text-terminal-green font-semibold">Best Intern</span> at NHPC Limited.
              </motion.p>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="space-y-2 mb-6 sm:mb-8"
              >
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                    className="flex items-center gap-2 text-soft-blue/70"
                  >
                    <Zap className="text-terminal-green flex-shrink-0" size={14} />
                    <span className="text-sm">{highlight}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-black/30 border border-cyan-bright/20 rounded-lg p-3 sm:p-4 text-center backdrop-blur-sm hover:border-cyan-bright/50 transition-all duration-300"
                >
                  <stat.icon className="text-cyan-bright mx-auto mb-2" size={20} />
                  <div className="text-lg sm:text-xl font-bold text-soft-blue">{stat.value}</div>
                  <div className="text-xs text-soft-blue/60">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/projects"
                  className="bg-accent-purple hover:bg-accent-purple/80 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 justify-center group shadow-lg hover:shadow-accent-purple/25 text-sm sm:text-base"
                >
                  View My Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-bright text-cyan-bright hover:bg-cyan-bright hover:text-deep-navy px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 justify-center shadow-lg hover:shadow-cyan-bright/25 text-sm sm:text-base"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero CLI */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center"
          >
            <HeroCLI userName={userName} />
          </motion.div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-12 sm:py-20 px-4 bg-black/10 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12"
          >
            <span className="text-accent-purple">Featured</span> Skills
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-black/30 border border-cyan-bright/20 rounded-lg p-6 sm:p-8 text-center hover:border-cyan-bright/50 transition-all duration-300 backdrop-blur-sm group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="mb-4 sm:mb-6"
                >
                  <skill.icon size={40} className={`${skill.color} mx-auto group-hover:drop-shadow-lg`} />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold text-soft-blue mb-3">{skill.name}</h3>
                <p className="text-soft-blue/70 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black/30 border border-cyan-bright/20 rounded-lg p-8 sm:p-12 backdrop-blur-sm"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-soft-blue mb-4">
              Ready to build something amazing together?
            </h2>
            <p className="text-soft-blue/80 mb-6 sm:mb-8 text-base sm:text-lg">
              I'm always excited to work on innovative projects and collaborate with fellow developers.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-terminal-green hover:bg-terminal-green/80 text-deep-navy px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-terminal-green/25 text-sm sm:text-base"
              >
                <Sparkles size={18} />
                Let's Connect
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;