/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'chakra': ['"Chakra Petch"', 'sans-serif'],
        'noto-serif': ['"Noto Serif"', 'serif'],
      },
      colors: {
        'white': "#C5C6C7"
      }
    },
  },
  plugins: [],
}
