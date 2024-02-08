/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
      serif: ["Merriweather", "serif"],
      cursive: ["Dancing Script", "cursive"],
      minimal: ["Roboto", "sans-serif"],
      heading: ["League Gothic", "sans-serif"],
      paragraph: ["Aleo", "serif"]
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        champagne: '#DBD3C7'
      },
      letterSpacing: {
        'heading': '0.1em',
      },
      backgroundImage: theme => ({
        'custom': "url('src/assets/background.png')",
      }),
      
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
