import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Terminal, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface NavigationProps {
  userName: string;
}

const Navigation: React.FC<NavigationProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

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
    <nav
      className="backdrop-blur-md border-b border-border-theme sticky top-0 z-50 transition-colors duration-300"
      style={{ backgroundColor: 'var(--nav-bg)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-accent-primary hover:text-accent-sub transition-colors">
            <Terminal size={20} />
            <span className="font-bold hidden sm:inline font-mono">anuj@portfolio</span>
            <span className="font-bold sm:hidden font-mono">anuj</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-mono transition-colors hover:text-accent-primary ${location.pathname === item.path
                    ? 'text-accent-sub font-semibold'
                    : 'text-text-secondary'
                  }`}
              >
                ./{item.label}
              </Link>
            ))}

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border-theme text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border-theme text-text-secondary hover:text-accent-primary transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-primary hover:text-accent-primary transition-colors"
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
            className="md:hidden py-4 border-t border-border-theme"
          >
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-sm font-mono transition-colors hover:text-accent-primary ${location.pathname === item.path
                      ? 'text-accent-sub font-semibold'
                      : 'text-text-secondary'
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