/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "bungee-tint": ['"Bungee Tint"', "sans-serif"],
        Josefin: ["Josefin Sans", "sans-serif"],
        Matemasie: ["Matemasie", "sans-serif"],
      },
    },
  },
  plugins: [],
};
