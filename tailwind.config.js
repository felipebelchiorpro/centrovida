/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003366', // Deep Blue - Authority
          light: '#004080',
          dark: '#00264d',
        },
        secondary: {
          DEFAULT: '#FF6600', // Energetic Orange - Action/CTA
          light: '#FF8533',
          dark: '#CC5200',
        },
        accent: {
          DEFAULT: '#F5F7FA', // Soft Gray - Background
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
