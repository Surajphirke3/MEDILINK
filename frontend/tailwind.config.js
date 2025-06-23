// tailwind.config.js
import tailwindScrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/form.js",
  ],
  theme: {
    extend: {
       fontFamily: {
        anaheim: ['Anaheim','Caprasimo', 'sans-serif'],
      },
       keyframes: {
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out',
      },
    },
  },
  darkMode: "class",
  plugins: [tailwindScrollbar],
};