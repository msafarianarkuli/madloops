/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        ' xs': '350px',

        ' sm': '640px',

        ' md': '768px',

        ' lg': '1024px',

        ' xl': '1280px',

        '2xl': '1536px',
      },
      backgroundImage: {
        'eye-fill': "url('Assets/eye-fill-white.svg')",
        'heart-fill': "url('Assets/heart-fill-white.svg')",
        'comment-fill': "url('Assets/chat-left-text-fill-white.svg')",
        'lines-dash': "url('Assets/img/lines-dash.svg')",
      },
      height: {
        100: '100px',
        200: '200px',
        300: '300px',
        400: '400px',
        450: '450px',
        500: '500px',
        550: '550px',
        600: '600px',
        650: '650px',
        700: '700px',
        750: '750px',
        800: '800px',
      },
      colors: {
        'deep-purple': '#422F7E',
        'lite-purple': '#7F56DA',
        'dark-purple': '#756496',
        'lite-pink': '#F4EBFD',
        'lite-white': '#F9F9FF',
        'ligth-gray': '#F6F6FB',
      },
    },
  },
  plugins: [],
};
