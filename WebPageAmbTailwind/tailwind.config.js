/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "custom-teal": "#92e3e3",
      },
      // backgroundImage: {
      //   'biggie': "url('/img/contacteBiggie.jpg')",
      // },
    },
  },
  plugins: [],
};
