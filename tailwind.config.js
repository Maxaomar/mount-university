/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        topNavbg: '#013378',
        middleNavbg: '#142917',
        bottomNavbg: '#0b408a',
        navText: '#c9c6c5'
      }
    },
  },
  plugins: [],
}