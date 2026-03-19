/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F2444',
          light: '#1B3A6B',
          dark: '#0A1B33',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C96A',
          dark: '#A8863A',
        },
      },
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
