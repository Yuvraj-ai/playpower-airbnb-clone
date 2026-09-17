/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        airbnb: {
          DEFAULT: "#FF385C",
          dark: "#E00B41",
          light: "#FFF8F6",
        },
        ink: {
          primary: "#222222",
          secondary: "#717171",
          muted: "#B0B0B0",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F7F7F7",
          border: "#DDDDDD",
          divider: "#EBEBEB",
        }
      },
      fontFamily: {
        cereal: ["var(--font-cereal)", "-apple-system", "BlinkMacSystemFont", "Roboto", "Helvetica Neue", "sans-serif"],
      },
      maxWidth: {
        container: "1120px",
      },
      transitionTimingFunction: {
        airbnb: "cubic-bezier(0.16, 1, 0.3, 1)",
        "airbnb-exit": "cubic-bezier(0.4, 0, 1, 1)",
      },
      keyframes: {
        heartPop: {
          "0%": { transform: "scale(1)" },
          "40%": { transform: "scale(1.28)" },
          "100%": { transform: "scale(1)" },
        },
        toastIn: {
          "0%": { opacity: "0", transform: "translateY(-8px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        heartPop: "heartPop 0.35s ease-in-out",
        toastIn: "toastIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};
