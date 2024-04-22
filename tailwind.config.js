/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    colors: {
      'primary-color': '#1D24CA',
      'primary-dark': '#201658',
      'primary-light': '#98ABEE',
      'primary-v-white': '#F9E8C9'
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

