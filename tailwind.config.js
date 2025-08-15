/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        avatar: ["var(--font-avatar)", "sans-serif"],
        popping: ["var(--font-popping)", "sans-serif"]
      },
      colors: {
        brand: {
          primary: "#000000",
          secondary: "#FFFFFF"
        }
      },
      spacing: {
        section: "80px"
      },
      borderRadius: {
        xl: "12px"
      }
    }
  },
  plugins: [],
};
module.exports = config;
