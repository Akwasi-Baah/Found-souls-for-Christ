/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html, js}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-pattern":
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0,0,0,0.5)),url(./img/hero.jpg)",
        "linear-gradient":
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0,0,0,0.5)),url(./img/donation.jpg)",
      },
    },
  },
  plugins: [],
};
