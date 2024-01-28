/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
      serif: ["Merriweather", "serif"],
      cursive: ["Dancing Script", "cursive"],
      minimal: ["Roboto", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {
      
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
