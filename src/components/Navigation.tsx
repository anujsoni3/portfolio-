import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

interface NavigationProps {
  userName: string;
}

const Navigation: React.FC<NavigationProps> = ({ userName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'home' },
    { path: '/about', label: 'about' },
    { path: '/experience', label: 'experience' },
    { path: '/skills', label: 'skills' },
    { path: '/projects', label: 'projects' },
    { path: '/achievements', label: 'achievements' },
    { path: '/contact', label: 'contact' },
  ];

  return (
    <nav className="bg-black/20 backdrop-blur-sm border-b border-cyan-bright/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-cyan-bright hover:text-accent-purple transition-colors">
            <Terminal size={20} />
            <span className="font-bold hidden sm:inline">anuj@portfolio</span>
            <span className="font-bold sm:hidden">anuj</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-colors hover:text-cyan-bright ${
                  location.pathname === item.path
                    ? 'text-accent-purple'
                    : 'text-soft-blue/80'
                }`}
              >
                ./{item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-soft-blue hover:text-cyan-bright transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-cyan-bright/20"
          >
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-sm transition-colors hover:text-cyan-bright ${
                    location.pathname === item.path
                      ? 'text-accent-purple'
                      : 'text-soft-blue/80'
                  }`}
                >
                  ./{item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;