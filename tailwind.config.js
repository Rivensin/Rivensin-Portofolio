/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : 'class',
  theme: {
    container : {
      center : true,
    },
    extend: {
      spacing : {
        13 : '3.25rem'
      },
      fontFamily : {
        inter : ['Inter']
      },
      colors : {
        primary : '#14b8a6',
        dark : '#0f172a',
        secondary : '#oklch(0.554 0.046 257.417)',
        wpu : '#bada55'
      }
    },
  },
  plugins: [],
}

