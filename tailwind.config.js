/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f1',
          100: '#daf0dc',
          200: '#b8e0bd',
          300: '#8cc895',
          400: '#5eaa6f',
          500: '#3e8c51', // forest green
          600: '#2d6f3e',
          700: '#265934',
          800: '#21462c',
          900: '#1d3a26',
          950: '#0f2015',
        },
        secondary: {
          50: '#f9f6f3',
          100: '#f1ebe4',
          200: '#e2d4c4',
          300: '#d2b8a0',
          400: '#c09b7c', // soft brown
          500: '#b3855f',
          600: '#a47453',
          700: '#886146',
          800: '#6f503c',
          900: '#5b4334',
          950: '#30221a',
        },
        accent: {
          50: '#fdf5f7',
          100: '#fbecf0',
          200: '#f8d9e2',
          300: '#f3b9ca',
          400: '#ec8ea8',
          500: '#e06588', // quartz pink
          600: '#cf3f66',
          700: '#b02b51',
          800: '#952648',
          900: '#7e2540',
          950: '#4a1123',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};