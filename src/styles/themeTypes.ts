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

  export interface BreakpointsOptions {
    values: {
      mobile: number;
      tablet: number;
      desktop: number;
    };
  }

  /**
   * TYPOGRAPHY
   */
  export interface TypographyVariants {
    displayXXLarge: React.CSSProperties;
    displayXLarge: React.CSSProperties;
    displayLarge: React.CSSProperties;
    bodyLarge: React.CSSProperties;
    body: React.CSSProperties;
    bodySmall: React.CSSProperties;
    subtitle: React.CSSProperties;
    buttonSmall: React.CSSProperties;
  }
  /**
   * EXTENDING createTheme TO ADD TYPOGRAPHY
   */
  export interface TypographyVariantsOptions {
    displayXXLarge?: React.CSSProperties;
    displayXLarge?: React.CSSProperties;
    displayLarge?: React.CSSProperties;
    bodyLarge?: React.CSSProperties;
    body?: React.CSSProperties;
    bodySmall?: React.CSSProperties;
    bodyStrong?: React.CSSProperties;
    subtitle?: React.CSSProperties;
    buttonSmall?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  export interface TypographyPropsVariantOverrides {
    displayXXLarge: true;
    displayXLarge: true;
    displayLarge: true;
    bodyLarge: true;
    body: true;
    bodySmall: true;
    bodyStrong: true;
    subtitle: true;
    buttonSmall: true;
  }
}

declare module "@mui/material/Button" {
  export interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    outline: true;
    text: true;
    danger: true;
    minimal: true;
    warning: true;
  }
}

declare module "@mui/material/IconButton" {
  export interface IconButtonPropsSizeOverrides {
    table: true;
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    desktop: true;
  }
}
