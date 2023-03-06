/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",

        //Samsan Tech Colors:
        skyBlue: "#2DC8DC",
        lightRed: "#F37962",
        regularRed: "#F26046",
        regularYellow: "#FFD331",
        lightGreen: "#C2D738",
        regularGreen: "#C2D838",
        veryLightBlue: "#c0eef4",
        veryLightGreen: "#c4edb2",

        fontDarkColor: "#3E4344",
        fontLightColor: "#E8E4C9",
      },
    },
  },
  plugins: [],
};
