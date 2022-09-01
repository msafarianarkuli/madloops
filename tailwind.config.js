/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "eye-fill": "url('Assets/eye-fill-white.svg')",
        "heart-fill": "url('Assets/heart-fill-white.svg')",
        "comment-fill": "url('Assets/chat-left-text-fill-white.svg')",
      },
    },
  },
  plugins: [],
};
