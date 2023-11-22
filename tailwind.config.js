module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      listStyleImage: {
        checkmark: 'url("assets/check.svg")',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
