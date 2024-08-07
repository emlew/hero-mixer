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
  export interface NeutralPaletteColor {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
    900: string;
    800: string;
    700: string;
    300: string;
    200: string;
    100: string;
  }

  /**
   * EXTENDING COLORS RETURN FROM THE THEME
   */
  export interface Palette {
    neutral: NeutralPaletteColor;
    active: {
      boxShadow: string;
      highlightedRow: string;
    };
    disabled: {
      gray: string;
    };
  }

  /**
   * EXTENDING createTheme TO ADD COLORS
   */
  export interface PaletteOptions {
    neutral?: NeutralPaletteColor;
    active?: {
      boxShadow: string;
      highlightedRow: string;
    };
    disabled?: {
      gray: string;
    };
  }
}
