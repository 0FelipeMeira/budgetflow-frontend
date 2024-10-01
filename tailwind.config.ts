import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: {
          0: "#001017",
          1: "#042331",
          2: "#05344A",
          3: "#0C577A",
          4: "#1F87B7",
          5: "#2FBDFF",
        },
        accent: {
          red: "#FF6F61",
        },
      },
    },
  },
  plugins: [],
};
export default config;
