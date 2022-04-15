module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  content: [],
  theme: {
    extend: {
      colors: {
        myGreen: "#009743",
        myYellow: "#ffcb0a",
        myDark: "#0F172A",
        myBorder: "#0F102A",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
