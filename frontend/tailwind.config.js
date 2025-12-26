/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'banana': {
          50: '#FFF9E6',
          100: '#FFE44D',
          500: '#FFD700',
          600: '#FFC700',
        },
        'glass': {
          'surface': 'rgba(255, 255, 255, 0.65)',
          'border': 'rgba(255, 255, 255, 0.4)',
          'text-primary': '#2D3436',
          'text-secondary': '#636E72',
          'accent': '#FFD700', // Using original yellow as accent but more vibrant in context
        },
      },
      fontFamily: {
        'sans': ['Poppins', 'Noto Sans SC', 'sans-serif'],
      },
      borderRadius: {
        'card': '20px',
        'panel': '24px',
        'btn': '16px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-hover': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'yellow': '0 4px 12px rgba(255, 215, 0, 0.3)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}

