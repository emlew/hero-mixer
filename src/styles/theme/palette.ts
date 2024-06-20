import { PaletteOptions } from "@mui/material";

const colors = {
  black: "#000000",
  white: "#ffffff",

  primary900: "#00263A",
  primary700: "#1437A9",
  primary500: "#334AFF",
  primary300: "#7D88FF",
  primary100: "#E7E8FF",

  secondary900: "#1F523F",
  secondary700: "#368572",
  secondary500: "#5CB8B2",
  secondary300: "#9BDCDC",
  secondary100: "#D3F3F3",

  red700: "#A91E37",
  red500: "#DA3842",
  red300: "#F26868",
  red100: "#f268681a",

  green700: "#288B53",
  green500: "#65BC7B",
  green300: "#90D39E",

  orange700: "#C24F1E",
  orange500: "#FF7C44",
  orange300: "#FF9C71",
  orange100: "#FFD5C2",
};

export const palette: PaletteOptions = {
  common: {
    black: colors.black,
    white: colors.white,
  },
  primary: {
    main: colors.primary500,
    light: colors.primary300,
    dark: colors.primary700,
    "900": colors.primary900,
    "700": colors.primary700,
    "500": colors.primary500,
    "300": colors.primary300,
    "100": colors.primary100,
  },
  secondary: {
    main: colors.secondary500,
    light: colors.secondary300,
    dark: colors.secondary700,
    "900": colors.secondary900,
    "700": colors.secondary700,
    "500": colors.secondary500,
    "300": colors.secondary300,
    "100": colors.secondary100,
  },
  error: {
    main: colors.red500,
    light: colors.red300,
    dark: colors.red700,
    "700": colors.red700,
    "500": colors.red500,
    "300": colors.red300,
    "100": colors.red100,
  },
  success: {
    main: colors.green500,
    light: colors.green300,
    dark: colors.green700,
    "700": colors.green700,
    "500": colors.green500,
    "300": colors.green300,
  },
  warning: {
    main: colors.orange500,
    light: colors.orange300,
    dark: colors.orange700,
    "700": colors.orange700,
    "500": colors.orange500,
    "300": colors.orange300,
    "100": colors.orange100,
  },
};
