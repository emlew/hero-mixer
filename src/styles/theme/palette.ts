import { PaletteOptions } from "@mui/material";

const colors = {
  black: "#00002B",
  white: "#FAFAFA",

  primary900: "#1E1E59",
  primary700: "#31377c",
  primary500: "#3f4890",
  primary300: "#767eaf",
  primary100: "#c2c6dd",

  secondary900: "#9d0050",
  secondary700: "#d70056",
  secondary500: "#fe005c",
  secondary300: "#ff518f",
  secondary100: "#ffb8d0",
};

export const palette: PaletteOptions = {
  common: {
    black: colors.black,
    white: colors.white,
  },
  background: { default: colors.white },
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
};
