/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primaryText: "#FFF",
      bgColor: "#10141E",
      headerBg: "#161D2F",
      loginBg: "#161D2F",
      signUp: "#161D2F",
      buttonBg: "#FC4747",
      buttonHoverBg: "#FFF",
      greilishBlue: "#5A698F",
    },
    container: {
      center: true,
      screens: {
        sm: "100%",
      },
      padding: {
        DEFAULT: "5%",
        sm: "5%",
        md: "5%",
        lg: "5%",
        xl: "5%",
        "2xl": "5%",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    fontFamily: {
      outfit: ["'Outfit', sans-serif"],
    },
  },
  plugins: [],
};
