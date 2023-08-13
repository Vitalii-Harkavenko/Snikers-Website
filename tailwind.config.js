/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          bg: '#0F0F13',
        },
        secondary: {
          bg: '#18181F',
        },
        'secondary-blue': '#ACAEBA',
        'brand': '#2441D7',
      },
    },
  },
  plugins: [],
}