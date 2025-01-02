/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-500': '#3563E9',
        'gray-400': '#596780',
        'sky-500': '#54A6FF'
      }
    },
  },
  plugins: [],
}