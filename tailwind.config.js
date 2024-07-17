/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'custom-yellow': 'hsl(47, 88%, 63%)',
        grey: 'hsl(0, 0%, 50%)',
        'custom-black': 'hsl(0, 0%, 7%)',
      },
    },
  },
  plugins: [],
};
