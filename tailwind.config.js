/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "League Spartan",
      },
      // fontSize: {
      //   base: ["12px", "15px"],
      // },
      colors: {
        "slate-blue": "#7C5DFA",
        "slate-blue-light": "#9277FF",
        kon: "#1E2139",
        "royal-curtsy": "#252945",
        "stoic-white": "#DFE3FA",
        "papilio-argeotus": "#888EB0",
        "true-lavender": "#7E88C3",
        "ruined-smores": "#0C0E16",
        "khmer-curry": "#EC5757",
        "american-pink": "#FF9797",
        "pearl-white": "#F8F8FB",
        "river-styx": "#141625",
        "carbon-blue": "#373B53",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
