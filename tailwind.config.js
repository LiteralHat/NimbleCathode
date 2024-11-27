/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.njk",  // If you're using Nunjucks templates
    "./src/**/*.md",   // If you're using markdown files
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 15px 0 black'
      },
      fontFamily: {
        bebas: ['bebas'],
        poppins: ['poppins'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'scale-in': 'scaleIn 2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0'

          },
          '5%': {
            opacity: '0'

          },
          '100%': {
            opacity: '1'
          },
        },
        scaleIn: {
          '0%': {
            transform: 'scale(1)',
            opacity: '0',
            filter: 'blur(5px)'

          },
          '5%': {
            transform: 'scale(1.1)',
            opacity: '0',
            filter: 'blur(5px)'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
            filter: 'blur(0px)'
          },
        },
      },
    },
  },
  plugins: [],
}
