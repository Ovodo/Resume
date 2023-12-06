import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#25092c",
        secondary: "#9be8a1",
        lovelypink: "#fe8daa",
        complimentsec: "#e3ae96",
        binance_black: "#070707",
        binance_ash: "#111518ff",
        binance_yellow: "#fcd535ff",
        binance_white: "#eaecefff",
        binance_green: "#14cb85ff",
        binance_brightash: "rgb(140, 169, 199)",
      },
      screens: {
        md: "769px",
      },
    },
  },
  plugins: [],
};
export default config;
