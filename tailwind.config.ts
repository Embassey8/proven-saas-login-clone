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
        primary: {
          DEFAULT: "#6366f1",
          foreground: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["Geist", "Geist Fallback", "system-ui", "-apple-system", "sans-serif"],
        mono: ["Geist Mono", "Geist Mono Fallback", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
