/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#FFC107", // Turuncu
          secondary: "#ff9999", // Light Red
          accent: "#ffcccc", // Very Light Red
          neutral: "#f3f4f6", // Açık Gri
          "base-100": "#ffffff", // Beyaz
          info: "#ff6666", // Medium Light Red
          success: "#ff3333", // Medium Red
          warning: "#ffcccb", // Very Light Red
          error: "#ff0000", // Red
        },
      },
      "light",
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
