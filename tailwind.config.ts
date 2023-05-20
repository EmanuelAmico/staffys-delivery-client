import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/commons/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        whiteText: "#FFFFFF",
        primaryBlue: "#217BCE",
        blackText: "#000000",
        greyText: "#4F4F4F",
        backgroundButton: "#E0E0E0",
        redTrashIcon: "#FA0206",
        yellowText: "#FCBC12",
        greenText: "#96DB76",
        yellowBackground: "#FCBC11",
        salmonText: "#FF6B6B",
      } as const,
    },
  },
  plugins: [],
} satisfies Config;
