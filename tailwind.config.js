/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fonttopnav: ["'Franklin Gothic Medium'", "'Arial Narrow'", "Arial", "sans-serif"],
        fontbottomnav: ["Cambria", "Cochin", "Georgia", "Times", "'Times New Roman'", "serif"],
      },


      colors: {
        topNavbg: "#013378",
        middleNavbg: "#142917",
        bottomNavbg: "#0b408a",
        navText: "#c9c6c5",
      },
    },
  },
  plugins: [],
}