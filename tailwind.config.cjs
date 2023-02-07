/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      'colors': {
        'primary': "#bbd0e5",
        'secondary': '#ff7814'
      },
      'fontFamily': {
        'sans': ['Poppins', 'sans-serif'],
        'display': ['Poppins', 'sans-serif'],
        'body': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
