/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "/public/*.html"],
  theme: {
    extend: {
      backgroundImage: { background: "url(/src/assets/images/image 42.svg)" },

      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
