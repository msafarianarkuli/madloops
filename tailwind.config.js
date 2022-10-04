/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      transitionProperty: {
        'min-h': 'min-height',
      },
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
        250: '250px',
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
        'button-purple': '#7A58C9',
        'dark-purple': '#756496',
        'lite-pink': '#F4EBFD',
        'lite-white': '#F9F9FF',
        'lite-gray': '#F3F4F8',
        'deep-gray': '#8D8D8D',
        'sick-gray': '#B7B7B7',
        'cool-gray': '#555555',
        'lite-violet': '#D1C1F6',
        'lite-blue': '#005DFD',
        'dark-primary': '#1c1c1c',
        'dark-secondary': '#282828',
        'dark-primary-title': '#EFEFEF',
        'dark-secondary-title': '#CCCDCC',
        'dark-text': '#C8C0AD',
      },
      keyframes: {
        onLoadAnim: {
          '0%': { transform: 'translateY(-200px)' },
          '25%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-40px)' },
          '100%': { transform: 'translateY(0)' },
        },
        onLoadHome: {
          '0%': { transform: 'translateX(-300px)' },
          '100%': { transform: 'translateX(0)' },
        },
        onLoadHomeRes: {
          '0%': { transform: 'translateX(300px)' },
          '100%': { transform: 'translateX(0)' },
        },
        onHoverGoogle: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateX(0)' },
        },
        onLoadPanel: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        onLoadAnim: 'onLoadAnim 1.5s ease-in-out',
        onLoadHome: 'onLoadHome 2s ease-in-out',
        onLoadHomeRes: 'onLoadHome 1s ease-in-out',
        onHoverGoogle: 'onHoverGoogle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
