/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-500": "#3563E9",
        "gray-400": "#596780",
        "sky-500": "#54A6FF",
        "secondary-500": "#90A3BF",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1",  },
        },
      },
      animation: {
        slideDown: "slideDown 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
