/** @type {import('tailwindcss').Config} */

const twColors = require('tailwindcss/colors')

const colors = {
  transparent: twColors.transparent,
  black: '#171924',
  'black-500': '#17192450',
  white: twColors.white,
  primary: '#7165D6',
  secondary: '#181A27',
  'bg-highlight': '#F6F8FC',
  gray: '#808292',
  orange: '#F4BB82'
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors
  },
  plugins: []
}
