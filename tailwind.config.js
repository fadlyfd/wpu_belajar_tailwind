/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
      },
      fontFamily: {
        inter: ["Inter"],
        mon: ["Montserrat"],
      },
      colors: {
        wpu: "#bada55",
        gpu: "#0ff",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        goyang: "goyang 1s ease-in-out infinite",
      },
      keyframes: {
        goyang: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
