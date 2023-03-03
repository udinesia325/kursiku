/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      'colors': {
        'primary': "#ff7814",
        'secondary': '#ff7814',
        'secondary-light': '#ff9816',
        'primary-deep': '#bb4001'
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
