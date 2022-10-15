/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-green': "#454B1B",
        'app-bg': "#1a2a33",
        'btn-lightgray': "#dbe8ed",
        'btn-dark-gray': "#a8bfc9",
      }
    },
  },
  plugins: [],
}
