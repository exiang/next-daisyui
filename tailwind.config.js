module.exports = {
  darkMode: "media",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
     extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ]
}