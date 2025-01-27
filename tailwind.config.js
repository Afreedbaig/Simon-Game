/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        "hover-hover": { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [],
};
