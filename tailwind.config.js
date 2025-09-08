/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
          active: "var(--color-primary-active)",
        },
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        info: "var(--color-info)",
        surface: { DEFAULT: "#0b0f14", 100: "#111827", 200: "#0f172a" },
      },
      fontSize: {
        "fluid-h1": ["clamp(1.75rem, 1.2rem + 2vw, 3rem)", { lineHeight: "1.1" }],
      },
      borderRadius: {
        base: "var(--radius-base)",
        xl: "0.75rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};
