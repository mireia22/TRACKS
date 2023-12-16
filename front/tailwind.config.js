/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-register-texture":
          "url('https://www.transparenttextures.com/patterns/low-contrast-linen.png')",
      },
      colors: {
        "dark-purple": "#22024d",
      },
    },
  },
  plugins: [],
};
