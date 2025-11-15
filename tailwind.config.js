module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        xiaomi: {
          primary: {
            normal: "#FFC700",
            subdued: "#FFE8AB",
          },
          neutral: {
            subdued: "#383A42",
            normal: "#1F2023",
            accent: "#131415",
          },
          text: {
            primary: "#FFC700",
            normal: "#F0F0F0",
            accent: "#D2D2D2",
            subdued: "#FFFFFF",
            invert: {
              accent: "#1F1F1F",
              subdued: "#5D5D5D",
            },
          },
          border: {
            primary: "#FFC700",
            subdued: "#383A42",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("kutty")],
};
