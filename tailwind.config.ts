import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: "var(--color-offwhite)",
        sage: "var(--color-sage)",
        black: "var(--color-black)",
        charcoal: "var(--color-charcoal)",
        white: "var(--color-white)",
        "hotel-cream": "var(--color-offwhite)",
        watermark: "rgb(var(--color-watermark-rgb) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-primary-serif)", "Georgia", "serif"],
        serif: ["var(--font-primary-serif)", "Georgia", "serif"],
        body: ["var(--font-secondary-serif)", "Garamond", "Georgia", "serif"],
        nav: ["var(--font-clean-sans)", "-apple-system", "sans-serif"],
        sans: ["var(--font-clean-sans)", "-apple-system", "sans-serif"],
        watermark: ["var(--font-watermark)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
