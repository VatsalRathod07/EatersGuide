/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'DeepBlue': "#007bff",
        'DarkGray': '#353535',
        'LightGray': '#f5f5f5',
      }
    },
  },
  plugins: [],
}