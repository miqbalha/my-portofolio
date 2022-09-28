/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '30px',
    },
    extend: {
      colors: {
        primary: '#10b981',
        secondary: '#64748b',
        dark: '#0f172a',
        igs: '#E4405F',
        fbk: '#1877F2',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
