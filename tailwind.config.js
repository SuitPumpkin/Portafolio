/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#262626",
        surface: "#303030",
        suitred: "#AC393B",
        suitgold: "#B39148",
        cream: "#F2F0EF",
        muted: "#9a9a9a",
      },
      fontFamily: {
        primary: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        brand: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
