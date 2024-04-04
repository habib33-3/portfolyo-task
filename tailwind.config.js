/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        textPrimary: "#718096", // Gray
        textAccent: "#4A5568", // Cool gray
        textDescription: "#718096",
      },
    },
  },
  plugins: [],
};
