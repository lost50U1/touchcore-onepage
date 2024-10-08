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
        lightBlue: "#E7F6FF",
        lighterBlue: "#F0F6FC",
        lightGray: "#E8F4FF",
        darkGray: "#2E2E32",
        textGray2: "#818083",
        ligherGray: "#D6DEE6",
        lightestGray: "#F0F0F0",
      },
    },
  },
  plugins: [],
};
