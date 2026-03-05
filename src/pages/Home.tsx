import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Brain, Sparkles, Terminal, Zap } from 'lucide-react';
import HeroCLI from '../components/HeroCLI';
import { GridScan } from '../components/GridScan';
import { useTheme } from '../context/ThemeContext';

interface HomeProps {
  userName: string;
}

const Home: React.FC<HomeProps> = ({ userName }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const { isDark } = useTheme();

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
      color: 'text-accent-primary',
      description: 'React, Node.js, Python, Django'
    },
    {
      icon: Database,
      name: 'Database Management',
      color: 'text-accent-sub',
      description: 'PostgreSQL, MongoDB, Redis'
    },
    {
      icon: Brain,
      name: 'Machine Learning',
      color: 'text-accent-soft',
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
        {/* GridScan 3D Background */}
        <div className="absolute inset-0 z-0" style={{ opacity: isDark ? 1 : 0.45 }}>
          <GridScan
            sensitivity={0.55}
            lineThickness={isDark ? 1 : 0.6}
            linesColor={isDark ? '#392e4e' : '#D8D4E8'}
            gridScale={0.1}
            scanColor={isDark ? '#FF9FFC' : '#8C7AE6'}
            scanOpacity={isDark ? 0.4 : 0.2}
            enablePost
            bloomIntensity={isDark ? 0.6 : 0.15}
            chromaticAberration={isDark ? 0.002 : 0.001}
            noiseIntensity={0.01}
          />
        </div>
        {/* Gradient overlay for text readability */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: isDark
              ? 'linear-gradient(to right, rgba(13,17,23,0.7) 0%, rgba(13,17,23,0.3) 50%, transparent 100%)'
              : 'linear-gradient(to right, rgba(246,244,241,0.85) 0%, rgba(246,244,241,0.5) 50%, transparent 100%)'
          }}
        />

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
                <Sparkles className="text-accent-secondary" size={18} />
                <span className="text-accent-secondary text-sm font-medium">Welcome to my digital universe</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-text-primary"
              >
                Hi {userName} 👋<br />
                <span className="text-accent-primary">I'm Anuj Soni</span><br />
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-accent-sub">{displayText}</span>
                  <motion.span
                    animate={{ opacity: isTyping ? [1, 0] : 1 }}
                    transition={{ duration: 0.5, repeat: isTyping ? Infinity : 0 }}
                    className="text-accent-secondary font-bold"
                  >
                    |
                  </motion.span>
                </div>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg sm:text-xl text-text-secondary mb-6 sm:mb-8 leading-relaxed"
              >
                Computer Science student at <span className="text-accent-primary font-semibold">IIIT Nagpur</span>,
                passionate about building innovative solutions at the intersection of technology and creativity.
                Recently awarded <span className="text-terminal-success font-semibold">Best Intern</span> at NHPC Limited.
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
                    className="flex items-center gap-2 text-text-secondary"
                  >
                    <Zap className="text-accent-secondary flex-shrink-0" size={14} />
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
                  className="bg-bg-card border border-border-theme rounded-lg p-3 sm:p-4 text-center backdrop-blur-sm hover:shadow-card-hover transition-all duration-300"
                  style={{ boxShadow: 'var(--card-shadow)' }}
                >
                  <stat.icon className="text-accent-primary mx-auto mb-2" size={20} />
                  <div className="text-lg sm:text-xl font-bold text-text-primary">{stat.value}</div>
                  <div className="text-xs text-text-muted">{stat.label}</div>
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
                  className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 justify-center group text-sm sm:text-base"
                  style={{
                    backgroundColor: 'var(--btn-primary-bg)',
                    boxShadow: '0 4px 14px var(--accent-primary-glow)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--btn-primary-hover)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--btn-primary-bg)'}
                >
                  View My Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="border-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 justify-center text-sm sm:text-base"
                  style={{
                    borderColor: 'var(--btn-secondary-border)',
                    color: 'var(--accent-primary)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--btn-secondary-hover-bg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
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
      <section className="py-12 sm:py-20 px-4 bg-bg-section relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-text-primary"
          >
            <span className="text-accent-sub">Featured</span> Skills
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
                className="bg-bg-card border border-border-theme rounded-lg p-6 sm:p-8 text-center hover:shadow-card-hover transition-all duration-300 backdrop-blur-sm group"
                style={{ boxShadow: 'var(--card-shadow)' }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="mb-4 sm:mb-6"
                >
                  <skill.icon size={40} className={`${skill.color} mx-auto group-hover:drop-shadow-lg`} />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-3">{skill.name}</h3>
                <p className="text-text-muted text-sm">{skill.description}</p>
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
            className="bg-bg-card border border-border-theme rounded-lg p-8 sm:p-12 backdrop-blur-sm"
            style={{ boxShadow: 'var(--card-shadow)' }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Ready to build something amazing together?
            </h2>
            <p className="text-text-secondary mb-6 sm:mb-8 text-base sm:text-lg">
              I'm always excited to work on innovative projects and collaborate with fellow developers.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
                style={{
                  backgroundColor: 'var(--accent-soft)',
                  boxShadow: '0 4px 14px var(--terminal-success-glow)'
                }}
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