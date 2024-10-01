import { nextui } from "@nextui-org/react";


export const content = [
  './src/**/*.{js,ts,jsx,tsx}',
  './node_modules/@headlessui/react/**/*.js',
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
];
export const theme = {
  extend: {
    fontFamily: {
      sans: ['Source Sans Pro', 'Open Sans', 'sans-serif'], // Use both fonts
    }
  },
};
export const darkMode = "class";
export const plugins = [nextui()];

export const purge = {
  enabled: true,
  content,
  options: {
    safelist: ['dark'],
  },
};