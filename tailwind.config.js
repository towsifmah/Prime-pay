/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      container:{
        center: true,
        padding: "2rem",
        screens:{
          DEFAULT: "100%",
          hsm: "375px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1208px",
        }
      },
      fontFamily:{
        inter:["Inter", "sans-serif"],
        jost:["Jost", "sans-serif"],
        openSans:["Open Sans", "sans-serif"],
      },
      colors:{
        primary:"#231656",
        scondery:"#F5F5F5"
      },
      backgroundImage:{
        'banner':"url('/src/assets/banner.png')",
        'background':"url('/src/assets/goodbyebackground.png')",
        'controlbackground':"url('/src/assets/controlbackground.png')"
      }
    },
  },
  plugins: [],
}