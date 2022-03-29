module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* From official Wordle color scheme */
        black: "#121213",
        white: "#ffffff",
        gray: "#3a3a3c",
        borderGray: "#565758",
        lightGray: "#818384",
        green: "#538d4e",
      },
      width: {
        "17": "4.4rem",
      },
      spacing: {
        "0.75": "0.2rem",
      },

      keyframes: {
        pop: {
          from: { transform: "scale(0.8)" },
          to: { transform: "scale(1.1)" }
        }
      },

      animation: {
        pop: "pop 100ms ease-in",
      }
    },
  },
  plugins: [],
}
