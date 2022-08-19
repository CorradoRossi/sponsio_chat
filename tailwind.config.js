/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./components/*.{html,js}",
            "./lib/*.{html,js}",
            "./pages/*.{html,js}",
            "./pages/**/*.{html,js}",  
            "./static/*.{html,js}",],
  theme: {
    extend: {},
  },
  plugins: [],
}