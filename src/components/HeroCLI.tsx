import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroCLIProps {
  userName: string;
}

const HeroCLI: React.FC<HeroCLIProps> = ({ userName }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Welcome to Anuj\'s portfolio terminal! 🚀',
    'Type "help" to see available commands.',
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    help: 'Available commands: about, experience, skills, projects, achievements, contact, resume, clear, hi, whoami, status',
    about: 'Navigating to about page...',
    experience: 'Loading experience...',
    skills: 'Displaying skills...',
    projects: 'Opening projects...',
    achievements: 'Showing achievements...',
    contact: 'Opening contact form...',
    resume: 'Downloading resume...',
    clear: '',
    hi: `Hey there, ${userName}! 👋 Ready to explore my digital world?`,
    hello: `Hello ${userName}! Welcome to my interactive portfolio.`,
    whoami: 'You are viewing Anuj Soni\'s portfolio - Full Stack Developer & ML Enthusiast from IIIT Nagpur',
    status: 'System Status: ✅ All systems operational | 🎯 Ready for new opportunities | 💡 Currently learning: DevOps & Cloud Architecture',
    time: () => `Current time: ${new Date().toLocaleTimeString()}`,
    date: () => `Today's date: ${new Date().toLocaleDateString()}`,
    location: 'Current location: Nagpur, Maharashtra, India 🇮🇳',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    
    if (cmd) {
      setIsProcessing(true);
      const newHistory = [...history, `anuj@portfolio:~$ ${input}`];
      
      // Simulate processing delay for better UX
      await new Promise(resolve => setTimeout(resolve, 300));
      
      if (cmd === 'clear') {
        setHistory([]);
      } else if (cmd === 'resume') {
        newHistory.push('📄 Downloading resume...');
        setHistory(newHistory);
        // Trigger resume download
        const link = document.createElement('a');
        link.href = '/Anuj_Soni_SDEIntern_Resume.pdf.pdf';
        link.download = 'Anuj_Soni_Resume.pdf';
        link.click();
        setTimeout(() => {
          setHistory(prev => [...prev, '✅ Resume downloaded successfully!']);
        }, 1000);
      } else if (['about', 'experience', 'skills', 'projects', 'achievements', 'contact'].includes(cmd)) {
        newHistory.push(`🚀 ${commands[cmd as keyof typeof commands]}`);
        setHistory(newHistory);
        setTimeout(() => navigate(`/${cmd}`), 800);
      } else if (typeof commands[cmd as keyof typeof commands] === 'function') {
        const result = (commands[cmd as keyof typeof commands] as Function)();
        newHistory.push(`💡 ${result}`);
        setHistory(newHistory);
      } else if (commands[cmd as keyof typeof commands]) {
        newHistory.push(`💡 ${commands[cmd as keyof typeof commands]}`);
        setHistory(newHistory);
      } else {
        newHistory.push(`❌ Command not found: ${cmd}. Type 'help' for available commands.`);
        setHistory(newHistory);
      }
      
      setIsProcessing(false);
    }
    
    setInput('');
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Auto-scroll to bottom when history updates
  useEffect(() => {
    const terminal = document.getElementById('terminal-content');
    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight;
    }
  }, [history]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="bg-black/60 border border-cyan-bright/30 rounded-lg p-4 sm:p-6 backdrop-blur-md max-w-2xl w-full shadow-2xl hover:border-cyan-bright/50 transition-all duration-300"
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-4">
        <motion.div 
          className="w-3 h-3 bg-red-500 rounded-full"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        />
        <motion.div 
          className="w-3 h-3 bg-yellow-500 rounded-full"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        />
        <motion.div 
          className="w-3 h-3 bg-green-500 rounded-full"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        />
        <span className="ml-4 text-soft-blue/70 text-sm flex items-center gap-2">
          <span>Terminal</span>
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-terminal-green rounded-full"
          />
        </span>
      </div>

      {/* Terminal Content */}
      <div 
        id="terminal-content"
        className="space-y-1 mb-4 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-bright/30 scrollbar-track-transparent"
      >
        <AnimatePresence>
          {history.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="text-sm break-words"
            >
              {line.startsWith('anuj@portfolio:~$') ? (
                <span className="text-accent-purple font-medium">{line}</span>
              ) : (
                <span className="text-terminal-green">{line}</span>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isProcessing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-cyan-bright flex items-center gap-2"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-3 h-3 border border-cyan-bright border-t-transparent rounded-full"
            />
            Processing...
          </motion.div>
        )}
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <span className="text-accent-purple font-medium text-sm sm:text-base">anuj@portfolio:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isProcessing}
          className="bg-transparent border-none outline-none text-soft-blue flex-1 caret-cyan-bright disabled:opacity-50 text-sm sm:text-base"
          placeholder="Type 'help' for commands..."
        />
        <motion.span
          animate={{ opacity: isProcessing ? [1, 0] : 1 }}
          transition={{ duration: 0.8, repeat: isProcessing ? Infinity : 0 }}
          className="text-cyan-bright font-bold"
        >
          |
        </motion.span>
      </form>

      {/* Quick Commands */}
      <div className="mt-4 flex flex-wrap gap-2">
        {['help', 'about', 'projects', 'contact'].map((cmd) => (
          <motion.button
            key={cmd}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setInput(cmd)}
            className="text-xs bg-cyan-bright/10 text-cyan-bright px-2 py-1 rounded border border-cyan-bright/30 hover:bg-cyan-bright/20 transition-all duration-200"
          >
            {cmd}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroCLI;