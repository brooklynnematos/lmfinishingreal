/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#213555',
          dark: '#182943',
          medium: '#3E5879',
          light: '#D8C4B6',
          lighter: '#F5EFE7',
          muted: '#4A5568'
        }
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
    },
  },
  plugins: [],
};