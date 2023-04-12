const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-primary": "#49454F",
        "alt-white": "#D9D9D9",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "montserrat-alt": ["Montserrat Alternates", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".bg-gradient-primary": {
          background:
            "linear-gradient(180deg, #2D3036 0%, #2D3036 11.52%, #2C2F35 22.52%, #2A2D33 32.98%, #292B31 42.83%, #26292E 52.06%, #24262B 60.6%, #212328 68.42%, #1E2024 75.48%, #1A1C20 81.73%, #17191C 87.14%, #131518 91.66%, #0F1113 95.24%, #0C0D0F 97.86%, #080A0B 99.46%, #050607 100%)",
        },
        ".shadow-custom": {
          filter:
            "drop-shadow(-360px 848px 258px rgba(0, 0, 0, 0.01)) drop-shadow(-230px 543px 236px rgba(0, 0, 0, 0.1)) drop-shadow(-129px 305px 199px rgba(0, 0, 0, 0.33)) drop-shadow(-58px 136px 147px rgba(0, 0, 0, 0.55)) drop-shadow(-14px 34px 81px rgba(0, 0, 0, 0.64)) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.65))",
        },
      });
    }),
  ],
};
