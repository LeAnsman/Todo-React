/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.3s",
        wiggle: "wiggle 1.2s ease-in-out infinite",
        comeIn: "comeIn 1s",
        comeInReverse: "comeInReverse 1s",
        appear: "appear 0.2s",
        comeInTop: "comeInTop 0s",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            right: "300%",
          },
          "60%": {
            opacity: "0.5",
          },
          "100%": {
            opacity: "1",
            right: "0",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-0.8deg)" },
          "50%": { transform: "rotate(0.8deg)" },
        },
        comeInTop: {
          "0%": {
            opacity: "0",
            transform: "translateY(-1000px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        comeIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(200px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        comeInReverse: {
          "0%": {
            opacity: "0",
            transform: "translateX(-200px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        appear: {
          "0%": {
            opacity: "0",
            transform: "scale(0)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
