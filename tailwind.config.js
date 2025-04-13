/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nav2: '#142917',
        navText: '#c9c6c5'
      }
    },
  },
  plugins: [],
}