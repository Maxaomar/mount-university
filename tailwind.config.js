/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColors: {
        topNavbg: '#013378',
        middleNavbg: '#142917',
        bottomNavbg: '#0b408a',
        navText: '#c9c6c5'
      },
      fontFamily: {
        bottomNav: ["Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"],
        topNav: ["'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"],
      },


    },
  },
  plugins: [],
}



 // textColors: {
      //   bottomText: '#9da69a'
      // },