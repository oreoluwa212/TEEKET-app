/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "/public/*.html"],
  theme: {
    extend: {
      backgroundImage: { 
        background: "url(/src/assets/images/image 42.svg)",
        background1: "url(src/assets/images/light.png",
        // background2: "url(src/assets/images/Rectangle.png)"
      },

      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
