/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: "1200px",
      sm: "360px",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1200px",
        sm: "360px",
      },
    },
    extend: {},
  },
  plugins: [],
}
