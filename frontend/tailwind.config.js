// tailwind.config.js


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
    },
  },
  darkMode: "class",
  plugins: [],
};