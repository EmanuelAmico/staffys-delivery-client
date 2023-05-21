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
        primaryBlue: "#217BCE",
        hoverBlue: "#2563EB",
        activeBlue: "#1D4ED8",
        whiteText: "#FFFFFF",
        blackText: "#000000",
        yellowText: "#FCBC12",
        salmonText: "#FF6B6B",
        greyText: "#4F4F4F",
        greenText: "#96DB76",
        pageBackground: "#F5F5F5",
        grayBackground: "#E0E0E0",
        whiteBackground: "#FFFFFF",
        yellowBackground: "#FCBC11",
        disableButton: "#9CA3AF",
        shadowGray: "#6B7280",
        redIcon: "#FA0206",
        hoverRedIcon: "#B91C1C",
      } as const,
    },
  },
  plugins: [],
} satisfies Config;
