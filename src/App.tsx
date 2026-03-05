import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
      <div className="min-h-screen bg-deep-navy text-soft-blue font-mono overflow-x-hidden">
        <CursorEffect />
        
            <Router key="main">
              <Layout userName={userName}>
                <Routes>
                  <Route path="/" element={<Home userName={userName} />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/achievements" element={<Achievements />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Layout>
            </Router>
          
      </div>
    </ThemeProvider>
  );
}

export default App;