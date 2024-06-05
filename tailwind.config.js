/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#B00000',
        headings: '#2E2E2E',
        lighttext: '#808080',
        footergrey: '#E6E6E6',
        long_card: '#C4C4C4',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        // sans: ['Poppins', 'san-serif'],
      },
      boxShadow: {
        'hero': '0px 0px 64px 0px rgba(176, 0, 0, 0.30)',
        'subscription': '0px 0px 4px 0px rgba(0, 0, 0, 0.25) inset',
      },
    },
  },
  plugins: [],
}

