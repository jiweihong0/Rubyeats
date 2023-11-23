/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F3C614',
        secondary: '#353535',
        accent: '#353535',
        light: '#F3F3F3',
        dark: '#353535',
        orangebg: '#FBE8D6',
        orangetext: '#F49A68',
        grayforget:"#B6B6B6"
        

      },
    },
  },
  plugins: [],
}

