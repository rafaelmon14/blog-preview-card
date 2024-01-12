/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Yellow': 'hsl(47, 88%, 63%)',
        'White': 'hsl(0, 0%, 100%)',
        'Grey': 'hsl(0, 0%, 50%)',
        'Black': 'hsl(0, 0%, 7%)'
      },
      fontFamily: {
        'Figtree': ['Figtree', 'sans-serif']
      },
      boxShadow: {
        '3xl': '8.0px 8.0px rgba(0,0,0,0.8)'
      }
    },
  },
  plugins: [],
}

