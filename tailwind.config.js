/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './web/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'eggplant': '#2e0f25',
        'lenten-purple': '#461c59',
        'brooks-blue': '#35399c',
        'lavender': '#9c6baf',
        'pale-pink': '#d9b0cb',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

