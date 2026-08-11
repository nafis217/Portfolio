import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vanilla: "#FFF8EC",
        sky: "#CDEAF4",
        blue: {
          DEFAULT: "#1676A8",
          dark: "#0F5278",
          light: "#EAF6FA",
        },
        mango: {
          DEFAULT: "#FFB92E",
          dark: "#E18B23",
          light: "#FFF0C9",
          academic: "#FFD77A",
        },
        coral: {
          DEFAULT: "#FF7A45",
          peach: "#FFF0E5",
          accent: "#E25A24",
        },
        strawberry: {
          DEFAULT: "#F68AA6",
          rose: "#F7D8E4",
          dark: "#C94C78",
          deep: "#38232B",
          surface: "#FFF4F7",
        },
        pistachio: {
          DEFAULT: "#79B98B",
          soft: "#E5F3E7",
          dark: "#4D9862",
          deep: "#203229",
          mint: "#DAF0DE",
        },
        mint: "#DDF1DF",
        lavender: {
          DEFAULT: "#D8D2F2",
          soft: "#DDD7F4",
          dark: "#675AA8",
          surface: "#F5F2FF",
          text: "#252238",
        },
        cocoa: {
          DEFAULT: "#6A4537",
          light: "#F2E7DC", // light brown / warm taupe background
          medium: "#DCC9B8",
          accent: "#8C5A47",
          surface: "#FFF9F3",
        },
        ink: {
          DEFAULT: "#172432",
          muted: "#4A5D6E",
          subtle: "#8C9BAA",
        },
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        subtle: "0 2px 12px rgba(23, 36, 50, 0.05)",
        card: "0 6px 24px rgba(23, 36, 50, 0.08)",
        poster: "0 20px 50px rgba(23, 36, 50, 0.12)",
        glow: "0 0 30px rgba(22, 118, 168, 0.25)",
      },
      letterSpacing: {
        widest: "0.2em",
        tighter: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
