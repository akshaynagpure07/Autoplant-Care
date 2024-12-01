/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CFF3B3", //text color green
        card: {
          bg: "#DBF6C5", // card green color
        },
        dark: {
          shade: "#000000",
        },

        Border: {
          corner: "#E5E5E5",
        },
        color: {
          text: "#245501", //text black color
        },
        boxShadow: {
          "top-only": "0px -4px 6px -1px rgba(0,0,0,0.1)",
        },
      },
    },
  },
  plugins: [],
};
