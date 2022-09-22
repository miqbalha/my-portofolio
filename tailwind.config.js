/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '30px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
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
  plugins: [],
};
