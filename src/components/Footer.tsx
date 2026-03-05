import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-cyan-bright/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-soft-blue/60 text-sm mb-4 md:mb-0">
            © 2025 Anuj Soni. Built with React & TypeScript.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/anujsoni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-soft-blue/60 hover:text-cyan-bright transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/anujsoni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-soft-blue/60 hover:text-cyan-bright transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:anuj@example.com"
              className="text-soft-blue/60 hover:text-cyan-bright transition-colors"
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