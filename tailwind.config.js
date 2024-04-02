/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "330px",
        laptop: "690px",
        desktop: "1100px",
      },
      colors: {
        MidnightGreen: "#014E56",
        LightCoral: "#F67E7E",
        RaptureBlue: "#79C8C7",
        PoliceBlue: "#2C6269",
        DeepJungleGreen: "#004047",
        SacramentoStateGreen: "#012F34",
        DarkGreen: "#002529",
      },
    },
  },
  plugins: [],
};
