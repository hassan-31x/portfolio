/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'Poppins': ['Poppins'],
      'Code': ['Source Code Pro'],
    },
    extend: {
      colors: {
        'darkColor': '#1A191D',
        'purple': '#7440A5',
        'lightPurple': '#AC67D6'
      },
      keyframes: {
        bounceIn: {
          '70%, 90%, 97%, 100%': { transform:'translateY(0%)' },
          '80%': { transform:'translateY(-15%)' },
          '95%': { transform:'translateY(-7%)' },
          '99%': { transform:'translateY(-3%)' },
        }
      },
      animation: {
        bounceIn: `bounceIn 1s ease-out`
      }
    }
  },
  plugins: [],
}