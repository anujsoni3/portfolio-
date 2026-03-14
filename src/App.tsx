import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import StartupCLI from './components/StartupCLI';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import CursorEffect from './components/CursorEffect';
import { ThemeProvider } from './context/ThemeContext';

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = ({ userName }: { userName: string }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home userName={userName} /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
        <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/achievements" element={<PageTransition><Achievements /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [userName, setUserName] = useState<string>('');
  const [showStartup, setShowStartup] = useState(true);

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
      setShowStartup(false);
    }
  }, []);

  const handleStartupComplete = (name: string) => {
    setUserName(name);
    localStorage.setItem('userName', name);
    setShowStartup(false);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg-main text-text-primary font-sans overflow-x-hidden grain-overlay transition-colors duration-300">
        <CursorEffect />

        <Router key="main">
          {showStartup ? (
            <AnimatePresence mode="wait">
              <StartupCLI onComplete={handleStartupComplete} key="startup" />
            </AnimatePresence>
          ) : (
            <Layout>
              <AnimatedRoutes userName={userName} />
            </Layout>
          )}
        </Router>

      </div>
    </ThemeProvider>
  );
}

export default App;