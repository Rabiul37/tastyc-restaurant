/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      philosopher: ["Philosopher", "sans-serif"],
      opensens: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
