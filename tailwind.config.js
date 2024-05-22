/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg":
          "linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),url(/assets/icons/Rectangle1.png)",
        // "home-bg": "url(assets/icons/Rectangle1.png)",
      },
    },
  },
  plugins: [require("daisyui")],
};
