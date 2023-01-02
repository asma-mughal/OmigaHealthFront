/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B1C4E",
        secondary: '#44C0BC',
        background:"#222127",
        background:"#F4F4F4",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif" , "Cormorant Upright"],
      },
    },
  },
  plugins: [],
}