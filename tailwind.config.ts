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
      },
      backgroundImage: {
        "gradient-overlay-image":
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/05/14190804/e-commerce-.jpg")',
      },
      fontFamily: {
        "roboto-mono": ["Roboto Mono", "monospace"],
      },
      gridTemplateColumns: {
        responsive: "repeat(auto-fit, minmax(200px, 1fr))",
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      transition: {
        custom: "transform ease-in .2s",
      },
      translate: {
        "custom-y": "5px",
      },
    },
  },
  plugins: [],
};
export default config;
