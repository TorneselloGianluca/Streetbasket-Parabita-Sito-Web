/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'street-orange': '#ff6b00',
        'street-orange-light': '#eb6505',
        'street-brand-blue': '#646cff',
        'street-dark-bg': '#0f0f0f',
        'street-dark-card': '#1a1a1a',
        'street-dark-border': '#333333',
        'street-dark-text': '#f0f0f0',
        'street-light-bg': '#ffffff',
        'street-light-card': '#ffffff',
        'street-light-border': '#f0f0f0',
        'street-light-text': '#1a1a1a',
        'street-secondary-text': '#666666',
        'street-secondary-text-dark': '#aaaaaa',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Helvetica', 'Arial', 'sans-serif'],
      },
      spacing: {
        '1.25': '5px',
        '2.5': '10px',
        '3.75': '15px',
        '5%': '5%',
        '15': '60px',
        '20': '80px',
        '70': '280px',
        '96': '400px',
      },
      backdropBlur: {
        'glass': '12px',
      },
      boxShadow: {
        'glass-border': '0 1px 0 0 rgba(255, 255, 255, 0.05)',
        'orange-glow': '0 0 5px rgba(255, 107, 0, 0.2)',
        'smooth-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-ease': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        scrollEdizioni: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-flexible': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        swing: {
          '0%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(-15deg)' },
          '30%': { transform: 'rotate(10deg)' },
          '45%': { transform: 'rotate(-5deg)' },
          '60%': { transform: 'rotate(5deg)' },
          '75%': { transform: 'rotate(-2deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'hammer-swing': {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-25deg)' },
          '75%': { transform: 'rotate(-25deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'pulse-live': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'pulse-orange': {
          '0%, 100%': { 'box-shadow': '0 0 0 0 rgba(255, 107, 0, 0.7)' },
          '50%': { 'box-shadow': '0 0 0 10px rgba(255, 107, 0, 0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'scroll-edizioni': 'scrollEdizioni 40s linear infinite',
        'scroll-flexible': 'scroll-flexible 60s linear infinite',
        'swing': 'swing 2s ease-in-out infinite',
        'hammer-swing': 'hammer-swing 2s ease-in-out infinite',
        'pulse-live': 'pulse-live 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-orange': 'pulse-orange 1.5s infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
