module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          850: '#171717',
          950: '#101010',
        },
        zinc: {
          750: '#292929',
          850: '#232323',
        }
      }
    },
  },
  plugins: [],
}
