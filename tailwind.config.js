/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend:
     { gridTemplateColumns: {
     'reels': '1fr minmax(10vw,40vw)',
    } ,
      
      fontFamily: {
     
      NicoMoji: ["NicoMoji", "sans-serif"],
      Orbitron: ["Orbitron", "sans-serif"],
      Palanquin: ["Palanquin", "sans-serif"],
    },
      colors:{
        'header_bg': '#03031b',
        'navdeep':'#0b0f4d',
        'navlight':'#203d79',
      },
      backgroundImage: {
         'front': "url('../images/front_img.png')",
        'background': "url('../images/background.png')",
      }
    },
  },
  plugins: [],
}

