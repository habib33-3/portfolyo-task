/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        textPrimary: "#B0B7C4", 
        textAccent: "#6E7A8A", 
        textDescription: "#A3ACBD"
      },
    },
  },
  plugins: [],
};
