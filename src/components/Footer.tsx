import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-section backdrop-blur-sm border-t border-border-theme py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-text-muted text-sm mb-4 md:mb-0">
            © 2025 Anuj Soni. Built with React & TypeScript.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/anujsoni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/anujsoni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:anuj@example.com"
              className="text-text-muted hover:text-accent-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;