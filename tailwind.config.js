module.exports = {
  content: ["./views/**/*.ejs", "./public/**/*.js"],
  theme: {
    extend: {
      colors: {
        neutral: "#E0E0E0",
        brandRed: "#FF3F3F",
        brandYellow: "#FCBF49",
        brandBlue: "#2B3A67",
        brandGreen: "#00916E",
        faint: "#959DB3",
      },
      fontFamily: {
        "mainText": ["Fredoka", "sans-serif"],
        "logoText": ["Montserrat", "sans-serif"]
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
