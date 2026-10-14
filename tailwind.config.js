/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,md}",
    "./_layouts/**/*.html",
    "./_includes/**/*.html",
    "./_posts/**/*.md"
  ],
  theme: {
    extend: {
      colors: {
        violetAccent: '#FFFFFF',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}