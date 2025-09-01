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
          green: {
            500: "#00ff66",
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
    function ({ addUtilities }: any) {
      addUtilities({
        ".section-padding-x": {
          paddingLeft: "1rem",
          paddingRight: "1rem",
          "@screen sm": {
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },
          "@screen md": {
            paddingLeft: "3rem",
            paddingRight: "3rem",
          },
          "@screen lg": {
            paddingLeft: "4rem",
            paddingRight: "4rem",
          },
          "@screen xl": {
            paddingLeft: "135px",
            paddingRight: "135px",
          },
        },
        ".section-pt": {
          paddingTop: "1rem",
          "@screen sm": {
            paddingTop: "2rem",
          },
          "@screen md": {
            paddingTop: "3rem",
          },
          "@screen lg": {
            paddingTop: "4rem",
          },
          "@screen xl": {
            paddingTop: "80px",
          },
        },
        ".section-padding-l": {
          paddingLeft: "1rem",
          "@screen sm": {
            paddingLeft: "2rem",
          },
          "@screen md": {
            paddingLeft: "3rem",
          },
          "@screen lg": {
            paddingLeft: "4rem",
          },
          "@screen xl": {
            paddingLeft: "135px",
          },
        },
        ".section-margin-x": {
          marginLeft: "1rem",
          marginRight: "1rem",
          "@screen sm": {
            marginLeft: "2rem",
            marginRight: "2rem",
          },
          "@screen md": {
            marginLeft: "3rem",
            marginRight: "3rem",
          },
          "@screen lg": {
            marginLeft: "4rem",
            marginRight: "4rem",
          },
          "@screen xl": {
            marginLeft: "135px",
            marginRight: "135px",
          },
        },
        ".section-mt": {
          marginTop: "2rem",
          "@screen sm": {
            marginTop: "4rem",
          },
          "@screen md": {
            marginTop: "6rem",
          },
          "@screen lg": {
            marginTop: "8rem",
          },
          "@screen xl": {
            marginTop: "80px",
          },
        },
        ".section-pb": {
          paddingBottom: "2rem",
          "@screen sm": {
            paddingBottom: "4rem",
          },
          "@screen md": {
            paddingBottom: "6rem",
          },
          "@screen lg": {
            paddingBottom: "8rem",
          },
          "@screen xl": {
            paddingBottom: "60px",
          },
        },
        ".section-pl": {
          paddingLeft: "1rem",
          "@screen sm": { paddingLeft: "2rem" },
          "@screen md": { paddingLeft: "3rem" },
          "@screen lg": { paddingLeft: "4rem" },
          "@screen xl": { paddingLeft: "135px" },
        },
        ".section-pr": {
          paddingLeft: "1rem",
          "@screen sm": { paddingRight: "2rem" },
          "@screen md": { paddingRight: "3rem" },
          "@screen lg": { paddingRight: "4rem" },
          "@screen xl": { paddingRight: "135px" },
        },
      });
    },
  ],
};
export default config;
