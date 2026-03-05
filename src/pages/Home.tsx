import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Brain, Sparkles, Terminal, Zap, Cloud, Wrench, FileCode } from 'lucide-react';
import HeroCLI from '../components/HeroCLI';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import { GridScan } from '../components/GridScan';
import { useTheme } from '../context/ThemeContext';

interface HomeProps {
  userName: string;
}

const Home: React.FC<HomeProps> = ({ userName }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [gridScale, setGridScale] = useState(1);
  const heroRef = useRef<HTMLElement>(null);
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
      icon: FileCode,
      name: 'Programming Languages',
      description: 'JavaScript, Python, C++, Java, TypeScript',
      gradient: isDark
        ? 'from-[#2B2F77] to-[#1a1d4a]'
        : 'from-[#2B2F77] to-[#4A4FBB]'
    },
    {
      icon: Code,
      name: 'Full Stack Development',
      description: 'React, Next.js, Node.js, Express, Flask, Django',
      gradient: isDark
        ? 'from-[#7C3AED] to-[#4C1D95]'
        : 'from-[#8C7AE6] to-[#B8A9F0]'
    },
    {
      icon: Database,
      name: 'Databases',
      description: 'PostgreSQL, MongoDB, MySQL, Redis',
      gradient: isDark
        ? 'from-[#C25B2A] to-[#7c3a1a]'
        : 'from-[#C25B2A] to-[#E89066]'
    },
    {
      icon: Brain,
      name: 'Machine Learning',
      description: 'PyTorch, TensorFlow, Scikit-learn, OpenCV, Pandas',
      gradient: isDark
        ? 'from-[#2F6F6D] to-[#1a4240]'
        : 'from-[#2F6F6D] to-[#56B4B0]'
    },
    {
      icon: Cloud,
      name: 'Cloud & DevOps',
      description: 'AWS (EC2, S3, Lambda), Docker, CI/CD',
      gradient: isDark
        ? 'from-[#1D4ED8] to-[#1e3a5f]'
        : 'from-[#2B2F77] to-[#4A6FBB]'
    },
    {
      icon: Wrench,
      name: 'Tools & Platforms',
      description: 'Git, Postman, Linux, Power BI, Tableau',
      gradient: isDark
        ? 'from-[#9333EA] to-[#581C87]'
        : 'from-[#8C7AE6] to-[#C4B5FD]'
    },
  ];

  const highlights = [
    'NHPC Limited Intern - Best Intern Award',
    'BackupManager System - 50% efficiency improvement',
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

  // Zoom-into-grid scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const viewportH = window.innerHeight;

      if (scrollY > heroBottom - viewportH * 1.2) {
        const progress = Math.min(1, (scrollY - (heroBottom - viewportH * 1.2)) / (viewportH * 0.8));
        setGridScale(1 + progress * 3);
      } else {
        setGridScale(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Fixed full-page GridScan background — covers the entire home page */}
      <div
        className="fixed inset-0 z-0"
        style={{
          opacity: isDark ? 1 : 0.4,
          transform: `scale(${gridScale})`,
          transformOrigin: 'center center',
          transition: 'transform 0.15s ease-out'
        }}
      >
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

      {/* Content sits above the fixed background */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-20 relative overflow-hidden">
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

        {/* Featured Skills — ScrollStack stacking cards */}
        <section className="relative min-h-[250vh]">
          {/* Semi-transparent overlay for readability over grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: isDark
                ? 'linear-gradient(180deg, rgba(13,17,23,0.4) 0%, rgba(13,17,23,0.7) 20%, rgba(13,17,23,0.7) 80%, rgba(13,17,23,0.4) 100%)'
                : 'linear-gradient(180deg, rgba(246,244,241,0.5) 0%, rgba(246,244,241,0.75) 20%, rgba(246,244,241,0.75) 80%, rgba(246,244,241,0.5) 100%)'
            }}
          />

          <div className="relative z-10">
            <div className="text-center pt-20 pb-4 px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-text-primary"
              >
                <span className="text-accent-sub">Featured</span> Skills
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-text-muted text-lg"
              >
                Scroll to explore my core competencies
              </motion.p>
            </div>

            <ScrollStack
              useWindowScroll={true}
              itemDistance={80}
              itemScale={0.03}
              itemStackDistance={25}
              stackPosition="20%"
              scaleEndPosition="10%"
              baseScale={0.88}
              blurAmount={2}
            >
              {featuredSkills.map((skill) => (
                <ScrollStackItem
                  key={skill.name}
                  itemClassName={`bg-gradient-to-br ${skill.gradient} border border-white/10`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white/15 p-3 rounded-xl backdrop-blur-sm">
                      <skill.icon className="text-white" size={30} />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">{skill.name}</h3>
                  </div>
                  <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl">{skill.description}</p>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-12 sm:py-20 px-4 relative">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: isDark
                ? 'rgba(13,17,23,0.6)'
                : 'rgba(246,244,241,0.7)'
            }}
          />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-bg-card border border-border-theme rounded-lg p-8 sm:p-12 backdrop-blur-md"
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
    </div>
  );
};

export default Home;