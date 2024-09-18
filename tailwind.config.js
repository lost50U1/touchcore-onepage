/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        brfirma: ["BR Firma", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        textGray: "#6D7C94",
        bgSecondary: "#1E61DC",
      },
    },
  },
  plugins: [],
};
