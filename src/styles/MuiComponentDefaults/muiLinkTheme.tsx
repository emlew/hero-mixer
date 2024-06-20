import { Components, Theme } from "@mui/material";

export const MuiLink: Components<Theme>["MuiLink"] = {
  defaultProps: {
    underline: "hover",
  },

  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.common.white,
    }),
  },
};
