/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'frosty-blue': '#A1C6EA', 
        'snowy-white': '#FFFFFF',  
        'winter-sky': '#F0F4F8',   
        'ice-blue': '#B4D6E7',    
        'slate-gray': '#6C7A89',  
        'frost-green': '#A3D9A5', 
      },
      backgroundColor: {
        'primary-bg': '#F0F4F8', 
      },
      textColor: {
        'primary-text': '#333333',
        'heading': '#6D9DC5',      
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [require('daisyui')],
}
