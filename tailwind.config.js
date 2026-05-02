/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Satoshi", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#050505",
        graphite: "#121212",
        pearl: "#f7f4ee",
        mist: "#e8e5df",
        champagne: "#c8b894",
        steel: "#8d98a7"
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0, 0, 0, 0.18)",
        glass: "0 24px 70px rgba(0, 0, 0, 0.28)"
      },
      backgroundImage: {
        "radial-spot":
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.14), transparent 26%), radial-gradient(circle at 80% 10%, rgba(200,184,148,0.16), transparent 24%), radial-gradient(circle at 60% 90%, rgba(141,152,167,0.16), transparent 30%)"
      }
    }
  },
  plugins: []
};
