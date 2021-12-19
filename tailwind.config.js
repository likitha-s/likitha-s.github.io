module.exports = {
  mode: "jit",
  content: [
    "./src/template.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        app: "#000000",
        primary: "#10AC84"
      }
    },
  },
  plugins: [],
}
