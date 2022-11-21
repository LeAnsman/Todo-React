/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.3s",
        wiggle: "wiggle 2s ease-in-out infinite",
        comeIn: "comeIn 1s",
        comeInReverse: "comeInReverse 1s",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            right: "300%",
          },
          "75%": {
            opacity: "0.5",
          },
          "100%": {
            opacity: "1",
            right: "0",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
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
      },
    },
  },
  plugins: [],
};
