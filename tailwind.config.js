/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#191F34",
      },
      screens: {
        xsm: "300px",

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1912px", //"1280px",
        // => @media (min-width: 1280px) { ... }

        // "2xl": "1912px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
