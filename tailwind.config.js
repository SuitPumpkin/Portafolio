/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f1724",
        surface: "#0b1220",
        primary: "#a855f7",
        secondary: "#7c3aed",
        onbg: "#E6EEF8",
        muted: "#a8b3c7",
        accent: "#f59e0b",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 24px rgba(2,6,23,0.6)",
      },
    },
  },
  plugins: [],
};
