/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B1220",
        surface: "#111A2B",
        card: "#162235",
        primary: {
          DEFAULT: "#D4AF37", // Gold / historical accent
          foreground: "#0B1220",
        },
        muted: {
          DEFAULT: "#64748B",
          foreground: "#94A3B8",
        },
        border: "#1E293B",
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
    },
  },
  plugins: [],
}
