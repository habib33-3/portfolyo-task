/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        textPrimary: "#B0B7C4", // Light Gray
        textAccent: "#6E7A8A", // Light Cool Gray
        textDescription: "#A3ACBD"
      },
    },
  },
  plugins: [],
};
