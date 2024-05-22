/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        400: '400px' // Adding a custom max-width of 400px
      },
      minWidth: {
        400: '400px' // Adding a custom max-width of 400px
      }
    }
  },
  plugins: []
}
