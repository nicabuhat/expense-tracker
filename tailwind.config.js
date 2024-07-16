/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Libre Baskerville", "serif"],
        sans: ["League Spartan", "sans-serif"],
      },
      colors: {
        green: "#CFFD52",
        purple: "#685FD2",
        orange: "#FDCD52",
        gray: "#E4E4E4",
      },
    },
  },
  plugins: [],
};
