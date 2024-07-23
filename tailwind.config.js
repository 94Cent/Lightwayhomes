/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-hero': "url('/src/assets/images/hero.png')",
      },
      colors: {
        purple: '#800080',
        customLightPurple: '#D6BCFA',
        customDarkPurple: '#4C2889',
        customGray: '#E2E8F0',
      },
    },
  },
  plugins: [],
}
