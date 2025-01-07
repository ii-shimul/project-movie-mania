/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#030d1e",
        background: "#f5f7fe",
        primary: "#2867e6",
        secondary: "#d689f1",
        accent: "#ea4ed4",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
  darkMode: "class",
};
