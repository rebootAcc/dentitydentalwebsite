/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "site-main": "#104099",
        "site-sub": "#28AF88",
        "site-typo": "#666666",
        "site-gray": "#E1E8F0",
      },
      boxShadow: {
        custom: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "white-gradient":
          "linear-gradient(270deg, #E1E8F0 0%, #FFF 50%, #E1E8F0 100%)",
      },
      screens: {
        xlg: "1280px",
        xl: "1440px",
        xxl: "1780px",
      },
    },
  },
  plugins: [],
};
