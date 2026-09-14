import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0F172A",
          700: "#475569",
          500: "#79879E",
          300: "#D3D8E0",
          100: "#F7F9FC",
        },
        brand: {
          DEFAULT: "#0F172A",
          soft: "#F1F5F9",
          dark: "#020617",
        },
        accent: {
          DEFAULT: "#2CB77D",
          soft: "#DDF4EA",
          dark: "#229A67",
        },
        secondary: {
          DEFAULT: "#F79727",
          soft: "#FEEBD4",
          dark: "#D97F16",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#FAFBFD",
          alt: "#F7F9FC",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      maxWidth: {
        container: "1440px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,0.04), 0 4px 12px rgba(15,23,42,0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
