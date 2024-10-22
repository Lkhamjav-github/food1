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
        background: "var(--background)",
        foreground: "var(--foreground)",
        logom: "#08b89d"
      },
      fontFamily: {
        geeks: ['Geeks', 'sans-serif'],
        firesans: ['Firesans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
