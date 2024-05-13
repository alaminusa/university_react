/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
      },
      fontSize: {
        
      },
      backgroundImage: {
        'hero': "linear-gradient(rgba(8,0,58,0.7),rgba(8,0,58,0.7)), url(./assets/hero.png)",
        'layer': "linear-gradient(rgba(0,15,152,0.8))",
      },
      fontFamily: {
        'out': ["Outfit"],
      },
      maxWidth: {
        
      }
    },
  },
  plugins: [],
}
