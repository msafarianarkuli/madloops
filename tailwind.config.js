/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "eye-fill": "url('Assets/eye-fill-white.svg')",
      },
      colors: {
        'deep-purple': '#422F7E',
      },
    },
  },
  plugins: [],
};
