import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          soft: "hsl(var(--primary-soft))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        // Functional metric palette (data-viz only, not brand accents)
        rating: "hsl(var(--metric-rating))",
        difficulty: "hsl(var(--metric-difficulty))",
        learning: "hsl(var(--metric-learning))",
        repeat: "hsl(var(--metric-repeat))",
        // Legacy aliases kept so any unmigrated class still resolves
        secondary: "hsl(var(--primary))",
        danger: "hsl(var(--destructive))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 hsl(var(--shadow-color) / 0.06)",
        sm: "0 1px 3px 0 hsl(var(--shadow-color) / 0.08), 0 1px 2px -1px hsl(var(--shadow-color) / 0.08)",
        md: "0 4px 12px -2px hsl(var(--shadow-color) / 0.10), 0 2px 6px -2px hsl(var(--shadow-color) / 0.08)",
        lg: "0 12px 32px -8px hsl(var(--shadow-color) / 0.16), 0 4px 10px -4px hsl(var(--shadow-color) / 0.08)",
        ring: "0 0 0 1px hsl(var(--border))",
      },
      spacing: {
        "navigation-height": "4.25rem",
      },
      maxWidth: {
        content: "1280px",
        prose: "65ch",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "none" },
        },
        "fade-in-scale": {
          from: { opacity: "0", transform: "scale(0.97)" },
          to: { opacity: "1", transform: "none" },
        },
        "overlay-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "content-in": {
          from: { opacity: "0", transform: "translate(-50%, -48%) scale(0.97)" },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in-scale": "fade-in-scale 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "overlay-in": "overlay-in 0.2s ease forwards",
        "content-in": "content-in 0.24s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        marquee: "marquee var(--marquee-duration, 40s) linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
