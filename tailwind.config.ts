import type { Config } from "tailwindcss";

const colors: Record<string, string> = {
  "main-bg": "#F5F2EA",
  "footer-bg": "#F7EFE2",
  content: "#2D3556",
  "heading-color": "#222222",
  white: "#ffff",
  black: "#000",
  success: "#36d399",
  warning: "#fbbd23",
  error: "#f87272",
  info: "#3abff8",
  neutral: "#2a323c",
  accent: "#1FB2A5",
  secondary: "#6c5ce7",
  "base-25": "#353d47",
  "base-50": "#2a323c",
  "base-75": "#20272e",
  "base-100": "#1d232a",
  "base-200": "#191e24",
  "base-300": "#15191e",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: colors,
    extend: {},
  },
  plugins: [],
};
export default config;
