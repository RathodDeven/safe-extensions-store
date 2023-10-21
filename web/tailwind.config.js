/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "p-bg": "#121312",
        "s-bg": "#1C1C1C",
        "t-bg": "#303033",
        "p-text": "#FFFFFF",
        "s-text": "#A1A3A7",
        "p-h": "#12FF80",
      },
    },
  },
  plugins: [],
};
