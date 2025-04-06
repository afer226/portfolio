// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure it scans all relevant files in src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example font
      },
      colors: {
        'orange': '#ffa203', // Example orange
        'midnight': '#1F2937', // Example dark gray
        'dr-white': '#F9FAFB', // Example light background
        'dark-text': '#111827', // Example dark text
        'medium-text': '#4B5563', // Example medium gray text
        'cyan': '#008b8b' // Cyan
      }
    },
  },
  plugins: [],
}