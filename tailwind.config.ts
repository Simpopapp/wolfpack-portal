import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        forest: {
          dark: "#1A1F2C",
          primary: "#6E59A5",
          accent: "#FEC6A1",
          light: "#F2FCE2",
        },
      },
      keyframes: {
        "icon-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { filter: "brightness(1)" },
          "50%": { filter: "brightness(1.3)" },
        },
      },
      animation: {
        "icon-float": "icon-float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
      },
      backgroundImage: {
        "forest-gradient": "linear-gradient(to bottom, #1A1F2C, #6E59A5)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;