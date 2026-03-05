/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Semantic theme colors (resolve via CSS variables)
        'bg-main': 'var(--bg-main)',
        'bg-section': 'var(--bg-section)',
        'bg-card': 'var(--bg-card)',
        'border-theme': 'var(--border)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'accent-primary': 'var(--accent-primary)',
        'accent-secondary': 'var(--accent-secondary)',
        'accent-soft': 'var(--accent-soft)',
        'accent-sub': 'var(--accent-sub)',
        'terminal-bg': 'var(--terminal-bg)',
        'terminal-success': 'var(--terminal-success)',
        'terminal-info': 'var(--terminal-info)',
        'terminal-warn': 'var(--terminal-warn)',
        'terminal-cursor': 'var(--terminal-cursor)',
        // Legacy aliases for compatibility
        'deep-navy': 'var(--bg-main)',
        'soft-blue': 'var(--text-primary)',
        'accent-purple': 'var(--accent-sub)',
        'cyan-bright': 'var(--accent-primary)',
        'terminal-green': 'var(--terminal-success)',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'IBM Plex Mono', 'Consolas', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
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
          '0%': { boxShadow: '0 0 5px var(--accent-primary), 0 0 10px var(--accent-primary)' },
          '100%': { boxShadow: '0 0 10px var(--accent-primary), 0 0 20px var(--accent-primary)' },
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
        'card': '0 10px 30px rgba(0,0,0,0.08)',
        'card-hover': '0 18px 45px rgba(0,0,0,0.12)',
        'glow': '0 0 20px var(--accent-primary-glow)',
        'glow-purple': '0 0 20px var(--accent-sub-glow)',
        'glow-green': '0 0 20px var(--terminal-success-glow)',
      },
    },
  },
  plugins: [],
};