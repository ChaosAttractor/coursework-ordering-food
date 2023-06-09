const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "gray-primary": "#49454F",
        violet: "#CCB7ED",
        positive: "#16A34A",
        negative: "#DC2626",
        "slider-dot": "#415AF9",
        "slider-rail": "#3D21B6",
        "scrollbar-track-dark": "#2D3036",
        "scrollbar-track": "#b9b9b9",
        "scrollbar-thumb": "#D7C07F",
        "alt-white": "#D9D9D9",
        "sidebar-active": "#C2B9D2",
        "sidebar-hover": "#6D6678",
        "sidebar-alt-hover": "#DACFED",
        "black-30": "rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "montserrat-alt": ["Montserrat Alternates", "sans-serif"],
      },
      backgroundSize: {
        "size-300%": "300% 300%",
      },
      transitionDuration: {
        400: "400ms",
      },
      keyframes: {
        gradientMove: {
          "0%, 100%": { backgroundPosition: "left bottom" },
          "50%": { backgroundPosition: "center" },
        },
        blinkType: {
          "49%": { opacity: "0" },
          "50%, 99%": { opacity: "1" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(10px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(-10px)" },
        },
      },
      animation: {
        gradientMove: "gradientMove 10s ease-in-out infinite",
        blinkType: "blinkType 1s infinite",
        shake: "shake 1s infinite ease",
        "spin-slow": "spin 3s linear infinite",
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
          filter: "drop-shadow(-31px 49px 25px black)",
        },
        ".shadow-content": {
          filter: "drop-shadow(-15px 64px 17px black)",
        },
        ".shadow-sidebar": {
          filter: "drop-shadow(-10px 12px 9px black)",
        },
        ".shadow-card": {
          boxShadow: "-2px 9px 11px 5px black",
        },
      });
    }),
  ],
};
