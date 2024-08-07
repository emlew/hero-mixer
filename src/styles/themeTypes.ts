import "@mui/material/styles";

declare module "@mui/material/styles" {
  /**
   * EXTEND THE PALETTE
   */

  export interface PaletteColor {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
    900: string;
    700: string;
    500: string;
    300: string;
    100: string;
  }
}
