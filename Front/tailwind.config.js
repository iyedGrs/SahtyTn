/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "bungee-tint": ['"Bungee Tint"', "sans-serif"],
        Josefin: ["Josefin Sans", "sans-serif"],
        Matemasie: ["Matemasie", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        blueMain: "#6cb9dd",
        greenMain: "#66baab",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
