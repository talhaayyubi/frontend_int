/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          base: "var(--color-primary-base)",
          hover: "var(--color-primary-hover)",
          active: "var(--color-primary-active)",
          disabled: "var(--color-primary-disabled)",
        },
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        info: "var(--color-info)",
        surface: {
          base: "var(--color-surface-base)",
          100: "var(--color-surface-100)",
          200: "var(--color-surface-200)",
        },
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
      },
      fontSize: {
        "fluid-h1": ["clamp(1.75rem, 1.2rem + 2vw, 3rem)", { lineHeight: "1.1" }],
      },
      borderRadius: { xl: "0.75rem", "2xl": "1rem" },
    },
  },
  plugins: [],
};
