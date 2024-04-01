/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        textPrimary: "#ecfdf5",
        textAccent: "#10b981",
        textDescription: "#bae6fd",
      },
    },
  },
  plugins: [],
};
