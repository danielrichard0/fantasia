/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'regal-blue' : '#bfaa9f'
      },
      fontFamily: {
        'default' : ['Noto Sans']
      },
      screems: {
        'md' : "768px"
      }
    },
  },
  plugins: [],
}

