/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kaushan: "Kaushan Script",
        sirin: "Sirin Stencil",
      },
      colors: {
        body: "hsl(var(--body) / <alpha-value>)",
        text: "hsl(var(--text) / <alpha-value>)",
        bodyRgba: "hsl(var(--bodyRgba) / <alpha-value>)",
        textRgba: "hsl(var(--textRgba) / <alpha-value>)",
        grey: "hsl(var(--grey) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
