module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      listStyleImage: {
        checkmark: 'url("assets/check.svg")',
      },
      backgroundImage: {
        contactForm: 'url("assets/backgroundForm.jpg")',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
