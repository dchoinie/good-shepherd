/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5E2224',
        accent: '#B78550',
        secondary: '#301B3A',
        light: '#A6D7FB',
        grey: '#B0ADA6',
        darkOverlay: 'rgba(0, 0, 0, 0.8)',
        lightOverlay: 'rgba(245, 245, 245, 0.92)',
        secondaryOverlay: 'rgba(48, 27, 58, 0.90)',
        textPrimary: 'rgba(0, 0, 0, 0.87)',
        textMedium: 'rgba(0, 0, 0, 0.6)',
        textDisabled: 'rgba(0, 0, 0, 0.38)',
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}
