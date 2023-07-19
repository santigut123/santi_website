/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {

      "harlequin": {
        50: "#ceeac4",

        100: "#b4cdac",

        200: "#9cb194",

        300: "#84967d",

        400: "#6c7b67",

        500: "#566252",

        600: "#40493d",

        700: "#2c322a",

        800: "#1a1d18",

      },
      "spring_green": {
        50: "#c5ead8",

        100: "#accebd",

        200: "#94b1a3",

        300: "#7e968a",

        400: "#677c71",

        500: "#52625a",

        600: "#3d4943",

        700: "#2a322e",

        800: "#181d1b",

      },
      "cerulean": {
        50: "#cfe6ed",

        100: "#b0cad2",

        200: "#98afb6",

        300: "#81949a",

        400: "#6a797e",

        500: "#546064",

        600: "#3f484b",

        700: "#2b3133",

        800: "#181c1d",

      },
      "blue": {
        50: "#e0e1f3",

        100: "#c2c3e8",

        200: "#a8a8c8",

        300: "#8d8ea9",

        400: "#74758b",

        500: "#5c5d6e",

        600: "#454653",

        700: "#2f2f38",

        800: "#1b1b20",

      },
      "mulberry": {
        50: "#ecddf2",

        100: "#d8bde2",

        200: "#baa3c3",

        300: "#9e8aa5",

        400: "#817187",

        500: "#675a6b",

        600: "#4d4350",

        700: "#352e37",

        800: "#1f1b20",

      },
      "rose": {
        50: "#f2dce7",

        100: "#e1bcce",

        200: "#c2a2b2",

        300: "#a48996",

        400: "#87717c",

        500: "#6b5a62",

        600: "#50434a",

        700: "#372e33",

        800: "#1f1a1d",

      },
      "vermillion": {
        50: "#f1ded9",

        100: "#dbc0b8",

        200: "#bda69f",

        300: "#a08c86",

        400: "#83736e",

        500: "#685b57",

        600: "#4e4542",

        700: "#362f2d",

        800: "#1f1b1a",

      },
      "yellow": {
        50: "#e5e4c0",

        100: "#c9c8a8",

        200: "#adac91",

        300: "#92927a",

        400: "#787865",

        500: "#5f5f50",

        600: "#47473c",

        700: "#313129",

        800: "#1c1c17",

      },

    },
    extend: {
      fontFamily: {
        'turpisregular': ['turpisregular', 'sans-serif']
      }
    },
  },
  plugins: [],
}