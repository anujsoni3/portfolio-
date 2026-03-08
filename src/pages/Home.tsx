import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Brain, Sparkles, Terminal, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroCLI from '../components/HeroCLI';
import TechPressure from '../components/TechPressure';
import { useTheme } from '../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

interface HomeProps {
  userName: string;
}

const Home: React.FC<HomeProps> = ({ userName }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const heroRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
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



  const highlights = [
    'NHPC Limited Intern - Best Intern Award',
    'BackupManager System - 50% efficiency improvement',
    'IIIT Nagpur - Computer Science Engineering',
    'Open Source Contributor & Tech Enthusiast'
  ];

  // Typewriter effect
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

  // Scroll-driven terminal enlargement
  useEffect(() => {
    if (!heroRef.current) return;

    let pinnedST: ScrollTrigger | null = null;
    let scrollHandler: (() => void) | null = null;

    const timer = setTimeout(() => {
      const heroEl = heroRef.current;
      if (!heroEl) return;

      const termEl = document.getElementById('hero-terminal');
      if (!termEl) return;

      // Capture natural center ONCE before any scroll changes it
      const initRect = termEl.getBoundingClientRect();
      const naturalCX = initRect.left + initRect.width / 2;
      const naturalCY = initRect.top + initRect.height / 2;

      // Pin range — 0.9x viewport keeps gap tight while animation still plays out
      const pinScrollLength = window.innerHeight * 0.9;

      // GSAP only handles the pin
      pinnedST = ScrollTrigger.create({
        trigger: heroEl,
        start: 'top top',
        end: `+=${pinScrollLength}`,
        pin: true,
        pinSpacing: true,
      });

      // Scroll progress drives CSS transforms directly
      scrollHandler = () => {
        const scrollY = window.scrollY;
        const heroTop = pinnedST ? pinnedST.start : heroEl.offsetTop;
        // Animation happens over the first 40% of pin range
        const rawProgress = (scrollY - heroTop) / (pinScrollLength * 0.4);
        const progress = Math.min(1, Math.max(0, rawProgress));

        const textEl = document.getElementById('hero-text-content');
        const gridBg = document.getElementById('grid-bg');

        // Hero text: fade + slide left, then fully hide so it can't bleed through
        if (textEl) {
          textEl.style.opacity = String(1 - progress);
          textEl.style.transform = `translateX(${-progress * 60}px)`;
          textEl.style.pointerEvents = progress > 0.5 ? 'none' : '';
          textEl.style.visibility = progress >= 1 ? 'hidden' : '';
        }

        // Terminal: translate to center + scale
        if (termEl) {
          if (progress === 0) {
            termEl.style.transform = '';
            termEl.style.zIndex = '';
          } else {
            // Target is dead centre of the pinned viewport
            const targetCX = window.innerWidth / 2;
            const targetCY = window.innerHeight / 2;
            // Interpolate from natural (progress=0) centre toward viewport centre
            const moveX = (targetCX - naturalCX) * progress;
            const moveY = (targetCY - naturalCY) * progress;
            const scale = 1 + 0.4 * progress;
            termEl.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;
            termEl.style.zIndex = '60';
          }
        }

        // Grid background: zoom
        if (gridBg) {
          gridBg.style.transform = `scale(${1 + 0.3 * progress})`;
        }
      };

      window.addEventListener('scroll', scrollHandler, { passive: true });
      scrollHandler(); // init
    }, 1200);

    return () => {
      clearTimeout(timer);
      if (pinnedST) pinnedST.kill();
      if (scrollHandler) window.removeEventListener('scroll', scrollHandler);
      const t = document.getElementById('hero-terminal');
      const tx = document.getElementById('hero-text-content');
      const g = document.getElementById('grid-bg');
      if (t) { t.style.transform = ''; t.style.zIndex = ''; }
      if (tx) { tx.style.transform = ''; tx.style.opacity = ''; tx.style.visibility = ''; }
      if (g) g.style.transform = '';
    };
  }, [isDark]);



  return (
    <div className="min-h-screen relative">
      {/* Hero Section — direct child, no overflow-hidden for GSAP pin */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-20 relative z-10">
        <div
          className="hero-gradient-overlay absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: isDark
              ? 'linear-gradient(to right, rgba(13,17,23,0.7) 0%, rgba(13,17,23,0.3) 50%, transparent 100%)'
              : 'linear-gradient(to right, rgba(246,244,241,0.85) 0%, rgba(246,244,241,0.5) 50%, transparent 100%)'
          }}
        />



        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          <motion.div
            ref={heroTextRef}
            id="hero-text-content"
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
                Hi {userName}👋<br />
                <span className="text-accent-primary">I'm Anuj Soni</span><br />
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-accent-sub">{displayText}</span>
                  <motion.span
                    animate={{ opacity: isTyping ? [1, 0] : 1 }}
                    transition={{ duration: 0.5, repeat: isTyping ? Infinity : 0 }}
                    className="text-accent-secondary font-bold"
                  >|</motion.span>
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
                  style={{ backgroundColor: 'var(--btn-primary-bg)', boxShadow: '0 4px 14px var(--accent-primary-glow)' }}
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
                  style={{ borderColor: 'var(--btn-secondary-border)', color: 'var(--accent-primary)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--btn-secondary-hover-bg)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <div
            id="hero-terminal"
            ref={terminalRef}
            style={{ willChange: 'transform' }}
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex justify-center"
            >
              <HeroCLI userName={userName} />
            </motion.div>
          </div>
        </div>
      </section>



      {/* ── Tech Stack Pressure Grid ── */}
      <motion.section
        className="relative z-10 py-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
      >
        <TechPressure />
      </motion.section>


      {/* Call to Action */}
      <section className="py-12 sm:py-20 px-4 relative z-10">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: isDark ? 'rgba(13,17,23,0.6)' : 'rgba(246,244,241,0.7)' }}
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
                style={{ backgroundColor: 'var(--accent-soft)', boxShadow: '0 4px 14px var(--terminal-success-glow)' }}
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