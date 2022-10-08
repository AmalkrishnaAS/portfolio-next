/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#ff7f40',
          600:'#f25a3c'
        },
        base: {
          500:'#000015',
          300:'#403d93'
        }

      },
      fontFamily: {
        fancy:['Edu VIC WA NT Beginner','sans-serif'],
    },
  }
  },
  plugins: [],
}
