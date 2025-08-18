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
        foundation: {
          gray: {
            100: "#fafafa",
            200: "#f5f5f5",
            300: "#e0e0e0",
            400: "#2f2e30",
          },
          red: {
            100: "#ffe5e5",
            200: "#fbbebe",
            300: "#f28a8a",
            400: "#e85c5c",
            500: "#db4444", // primary
            600: "#c73c3c",
            700: "#a93030",
            800: "#8b2727",
            900: "#701e1e",
          },
          orange: {
            500: "#ffad33",
          },
        },
      },
      backgroundImage: {
        "gradient-overlay-image":
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/05/14190804/e-commerce-.jpg")',
      },
      fontFamily: {
        "roboto-mono": ["Roboto Mono", "monospace"],
        roman: ['"Times New Roman"', "serif"],
      },
      gridTemplateColumns: {
        responsive: "repeat(auto-fit, minmax(200px, 1fr))",
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".hide-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none" /* Chrome, Safari, and Opera */,
        },
      };

      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
export default config;
