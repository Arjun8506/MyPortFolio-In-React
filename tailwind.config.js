/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Define your color palette for light mode
        light: {
          primary: '#000000',
          secondary: '#ffffff',
          color: "#ffffff"
        },
        // Define your color palette for dark mode
        dark: {
          primary: '#ffffff',
          secondary: '#000000',
          color: "#000000"
          // Add more colors as needed
        },
      },
    },
  },
  plugins: [],
}