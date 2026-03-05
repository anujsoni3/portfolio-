/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#0F0C29',
        'soft-blue': '#E0E8F9',
        'accent-purple': '#A855F7',
        'cyan-bright': '#38BDF8',
        'terminal-green': '#00FF41',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'IBM Plex Mono', 'Consolas', 'monospace'],
      },
      animation: {
        'cursor-blink': 'blink 1s infinite',
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #38BDF8, 0 0 10px #38BDF8, 0 0 15px #38BDF8' },
          '100%': { boxShadow: '0 0 10px #38BDF8, 0 0 20px #38BDF8, 0 0 30px #38BDF8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(56, 189, 248, 0.3)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.3)',
        'glow-green': '0 0 20px rgba(0, 255, 65, 0.3)',
      },
    },
  },
  plugins: [],
};