/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Urbanist': ['urbanist' , 'sans'] ,
      },
      colors: {
        'CCE3DE':'#CCE3DE',
        '6B9080':'#6B9080',
        'A4C3B2':'#A4C3B2',
        '3a5a40':'#3a5a40'
      },
    },
  },
  plugins: [],
}
