/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeyellow: "#a69f7d",
      },

      screens: {
        xs: "335px",
        xl: "1340px",
        custom: "1402px",
      },
    },
    fontFamily: {
      custom: ["Tangerine", "serif"],
    },
  },
  plugins: [],
};
