/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', "./build/js/*.js"],
  theme: {
    extend: {

      colors: {
        'hover': {
          DEFAULT: '#ffe4c4',
        },
      },

    },
  },
  plugins: [],
}

