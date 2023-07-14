/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width:{
        '1000' : '1000px',
      },
      height: {
        '800': '800px',
      },
      backgroundColor:{
        'branco' : '#ffffff',
        'fundo' : '#f0f0f0',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],      
      },
      colors:{
        azul:'#864cff',
        icone:'#151515',
      }
    },
  },
  plugins: [],
}

