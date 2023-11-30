/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#940B92",
              foreground: "#FFFFFF",
            },
            focus: "#940B92",
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#FEFF86",
              foreground: "#000000",
            },
            focus: "#FEFF86",
          },
        },
      },
    }),
  ],
};
