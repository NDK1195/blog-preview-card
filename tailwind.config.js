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
      boxShadow: {
        'custom-shadow': '8px 8px 0 0 #000',
        'custom-shadow-hover': '16px 16px 0 0 #000',
      },
    },
  },
  plugins: [],
};
