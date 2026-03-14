import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface StartupCLIProps {
  onComplete: (name: string) => void;
}

const StartupCLI: React.FC<StartupCLIProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userName, setUserName] = useState('');
  const [showInput, setShowInput] = useState(false);

  const bootSequence = [
    'Initializing connection...',
    'Loading security protocols...',
    'Establishing secure tunnel...',
    'Access granted. Welcome to Anuj Soni\'s development environment.',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < bootSequence.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setShowInput(true);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [currentStep, bootSequence.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim()) {
      onComplete(userName.trim());
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-bg-main flex items-center justify-center p-4"
    >
      <div className="w-full max-w-2xl">
        <div className="bg-bg-card border border-border-theme rounded-lg p-6 backdrop-blur-sm">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-text-muted text-sm">Terminal</span>
            </div>
          </div>

          <div className="space-y-2">
            {bootSequence.slice(0, currentStep + 1).map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-terminal-success"
              >
                <span className="text-accent-primary">{'>'}</span> {line}
              </motion.div>
            ))}

            {showInput && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6"
              >
                <div className="text-terminal-success mb-2">
                  <span className="text-accent-primary">{'>'}</span> What's your name?
                </div>
                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                  <span className="text-accent-primary opacity-80">anuj@portfolio:~$</span>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="bg-transparent border-none outline-none text-text-primary flex-1 caret-accent-primary"
                    placeholder="Enter your name..."
                    autoFocus
                  />
                  <span className="text-accent-primary animate-cursor-blink">|</span>
                </form>
                <div className="text-text-muted text-sm mt-2">
                  Press Enter to continue...
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StartupCLI;