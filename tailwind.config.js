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
    },
  },
  plugins: [],
}
