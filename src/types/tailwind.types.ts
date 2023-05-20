import TailwindConfig from "../../tailwind.config";

export type TailwindConfig = typeof TailwindConfig;
export type TailwindTheme = TailwindConfig["theme"];
export type TailwindColors = TailwindTheme["extend"]["colors"];
export type TailwindColor = keyof TailwindColors;
