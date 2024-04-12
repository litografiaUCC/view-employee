/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
          drop: {
            '0%': { transform: 'translateY(-100%)' },
            '100%': { transform: 'translateY(0)' },
          },
          up: {
            '0%': { transform: 'translateY(0)' },
            '100%': { transform: 'translateY(-100%)' },
          }
        }
      },
      animation: {
        'drop-once': 'drop 0.5s ease-out',
        'up-once': 'drop 0.5s ease-out reverse',
      }
    },
  plugins: [],
}

