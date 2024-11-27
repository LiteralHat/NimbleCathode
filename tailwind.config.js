/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.njk",  // If you're using Nunjucks templates
    "./src/**/*.md",   // If you're using markdown files
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['bebas'],
        poppins: ['poppins'],
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(1)',
            filter: 'blur(5px)'

          },
          '10%': {
            opacity: '0',
            transform: 'scale(1.1)',
            filter: 'blur(5px)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
            filter: 'blur(0px)'
          },
        },
      },
    },
  },
  plugins: [],
}
