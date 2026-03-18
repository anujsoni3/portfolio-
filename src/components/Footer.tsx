import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-section backdrop-blur-sm border-t border-border-theme py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-text-muted text-sm mb-4 md:mb-0">
            © 2026 Anuj Soni. Built with React & TypeScript.
          </div>
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/anujsoni3"
              title="GitHub"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-text-muted hover:text-accent-primary transition-colors block"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/anuj-soni-2387b5291/"
              title="LinkedIn"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-text-muted hover:text-accent-primary transition-colors block"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:soni3anuj@gmail.com"
              title="Email"
              aria-label="Email"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-text-muted hover:text-accent-primary transition-colors block"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;