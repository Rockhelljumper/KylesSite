import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Use 'class' for manual control with ThemeToggle
  theme: {
    fontSize: {
      xs: ["0.875rem", { lineHeight: "1.35rem" }],
      sm: ["1rem", { lineHeight: "1.55rem" }],
      base: ["1.125rem", { lineHeight: "1.75rem" }],
      lg: ["1.25rem", { lineHeight: "1.9rem" }],
      xl: ["1.5rem", { lineHeight: "2.15rem" }],
      "2xl": ["1.875rem", { lineHeight: "2.35rem" }],
      "3xl": ["2.25rem", { lineHeight: "2.75rem" }],
      "4xl": ["3rem", { lineHeight: "3.35rem" }],
      "5xl": ["3.75rem", { lineHeight: "4.1rem" }],
      "6xl": ["4.5rem", { lineHeight: "4.8rem" }],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card-bg)",
        "card-alt": "var(--card-bg-alt)",
        "card-border": "var(--card-border)",
        primary: "var(--brand-primary)",
        "primary-foreground": "var(--text-inverted)",
        muted: "var(--card-bg-alt)",
        "muted-foreground": "var(--text-tertiary)",
        input: "var(--card-border)",
        "brand-primary": "var(--brand-primary)",
        "brand-secondary": "var(--brand-secondary)",
        "text-inverted": "var(--text-inverted)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
