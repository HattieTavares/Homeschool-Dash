module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        neutral: "#E0E0E0",
        brandRed: "#FF3F3F",
        brandYellow: "#FCBF49",
        brandBlue: "#2B3A67",
        brandGreen: "#00916E",
        placeholder: "#8089a4",
      },
      fontFamily: {
        "mainText": ["Fredoka", "sans-serif"],
        "logoText": ["Montserrat", "sans-serif"]
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
