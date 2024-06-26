/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/templates/*.{html,js}",
    "./public/scripts/*.{html,js}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      letterSpacing: {
        "tightest": "-0.065em"
      },
      colors: {
        "brown": {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832"
        }
      },
      boxShadow: {
        "normal": "0px 1px 10px rgba(0,0,0,0.05)",
      },
      borderRadius: {
        "4xl": "2rem", //32px
      },
      fontFamily: {
        "Dana": "Dana",
        "DanaMedium": "Dana Medium",
        "DanaDemiBold": "Dana DemiBold",
        "Morabba": "Morabba Light",
        "MorabbaMedium": "Morabba Medium",
        "MorabbaBold": "Morabba Bold",
      },
      spacing: {
        "30": "7.5rem"
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "&>*:hover");
    }
  ],
}

