/*********************
 * Tailwind CSS Config
 *********************/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b0f17",
        card: "#111827",
        accent: "#3b82f6",
        subtle: "#9CA3AF"
      }
    }
  },
  darkMode: "class",
  plugins: []
};
