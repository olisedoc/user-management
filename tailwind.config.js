/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/renderer/index.html", 
    "./src/renderer/**/*.{ts,tsx}",
   ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [],
};
