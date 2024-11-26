/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html", // Include all .html files in the src folder
    "./src/**/*.njk",  // If you're using Nunjucks templates
    "./src/**/*.md",   // If you're using markdown files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
