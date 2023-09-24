/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pokeSolid: ["Pokemon_Solid", "sans-serif"],
        pokeHollow: ["Pokemon_Hollow", "sans-serif"]
      }
    },
  },
  plugins: [],
}