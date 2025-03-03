import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "hsl(var(--primary) / <alpha-value>)",
      secondary: "hsl(var(--secondary) / <alpha-value>)",
      background: "hsl(var(--background) / <alpha-value>)",
      foreground: "hsl(var(--foreground) / <alpha-value>)",
      text: "hsl(var(--text) / <alpha-value>)",
      muted: "hsl(var(--muted) / <alpha-value>)",
      accent: "hsl(var(--accent) / <alpha-value>)",
    },
  },
} satisfies Config;
