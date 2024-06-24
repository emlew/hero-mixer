import { Components, Theme } from "@mui/material";

export const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {
    disableFocusRipple: true,
    disableTouchRipple: true,
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      textTransform: "none",
      borderRadius: 8,
      border: `${theme.palette.primary[500]} solid 2px`,
      color: theme.palette.common.white,
      fontSize: theme.typography.button.fontSize,
      letterSpacing: 0.2,
      fontWeight: 600,
      padding: "10px 22px",
      height: 48,
      margin: 0,
      gap: 2,
      whiteSpace: "nowrap",
      "&:focus-visible": {
        textDecoration: "underline",
        textUnderlineOffset: 1,
        textDecorationThickness: 2,
        boxShadow: `${theme.palette.primary[500]} 0px 0px 0px 2px`,
        border: `${theme.palette.common.white} solid 2px`,
      },
      "&:active": {
        textDecoration: "none",
      },
      "&:disabled": {
        opacity: 0.38,
      },
    }),
  },
  variants: [
    {
      props: { size: "small" },
      style: {
        padding: "4px 14px",
        height: 40,
      },
    },
    {
      props: { variant: "primary" },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.primary[500],
        "&:hover": {
          backgroundColor: theme.palette.primary[300],
          border: `${theme.palette.primary[300]} solid 2px`,
        },
        "&:active": {
          boxShadow: `0px 0px 0px 0px`,
          backgroundColor: theme.palette.primary[700],
          border: `${theme.palette.primary[700]} solid 2px`,
        },
      }),
    },
    {
      props: { variant: "primary-inverted" },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.common.white,
        borderColor: theme.palette.common.white,
        color: theme.palette.primary[500],
        "&:hover": {
          backgroundColor: theme.palette.primary[100],
          border: `${theme.palette.primary[100]} solid 2px`,
        },
        "&:active": {
          boxShadow: `0px 0px 0px 0px`,
          backgroundColor: theme.palette.common.white,
          border: `${theme.palette.primary[700]} solid 2px`,
        },
        "&:focus-visible": {
          backgroundColor: theme.palette.primary[100],
          color: theme.palette.primary[500],
          boxShadow: `${theme.palette.primary[500]} 0px 0px 0px 2px, ${theme.palette.primary[500]} 0px 0px 0px 2px inset`,
          border: `${theme.palette.common.white} solid 2px`,
        },
      }),
    },
    {
      props: { variant: "secondary" },
      style: ({ theme }) => ({
        color: theme.palette.primary[500],
        border: `${theme.palette.primary[500]} solid 2px`,
        backgroundColor: theme.palette.common.white,
        "&:hover": {
          backgroundColor: theme.palette.primary[100],
        },
        "&:focus-visible": {
          backgroundColor: theme.palette.primary[100],
          color: theme.palette.primary[700],
          boxShadow: `${theme.palette.primary[700]} 0px 0px 0px 2px, ${theme.palette.primary[700]} 0px 0px 0px 2px inset`,
          border: `${theme.palette.common.white} solid 2px`,
        },
        "&:active": {
          backgroundColor: theme.palette.primary[300],
          border: `${theme.palette.primary[700]} solid 2px`,
          boxShadow: "none",
          textDecoration: "none",
          color: theme.palette.primary[700],
        },
        "&:disabled": {
          backgroundColor: theme.palette.common.white,
          color: theme.palette.primary[500],
        },
      }),
    },
    {
      props: { variant: "secondary-inverted" },
      style: ({ theme }) => ({
        borderColor: theme.palette.common.white,
        "&:hover": {
          backgroundColor: "rgba(255 255 255/ 0.1)",
        },
        "&:active": {
          backgroundColor: "rgba(255 255 255/ 0.1)",
        },
        "&:focus-visible": {
          backgroundColor: "rgba(255 255 255/ 0.1)",
          boxShadow: `${theme.palette.primary[500]} 0px 0px 0px 2px, ${theme.palette.primary[500]} 0px 0px 0px 2px inset`,
        },
      }),
    },
    {
      props: { variant: "text" },
      style: ({ theme }) => ({
        color: theme.palette.primary[500],
        backgroundColor: "transparent",
        border: `transparent solid 2px`,
        "&:hover": {
          textDecoration: "underline",
          textDecorationThickness: 2,
          backgroundColor: "transparent",
        },
        "&:focus-visible": {
          color: theme.palette.primary[500],
          boxShadow: `${theme.palette.primary[500]} 0px 0px 0px 2px`,
          border: `${theme.palette.common.white} solid 2px`,
        },
        "&:active": {
          backgroundColor: theme.palette.primary[100],
          textDecoration: "underline",
          textDecorationThickness: 2,
          color: theme.palette.primary[700],
          boxShadow: "none",
          border: `${theme.palette.primary[100]} solid 2px`,
        },
        "&:disabled": {
          border: `${theme.palette.common.white} solid 2px`,
          backgroundColor: theme.palette.common.white,
          color: theme.palette.primary[500],
        },
      }),
    },
    {
      props: { variant: "alt" },
      style: ({ theme }) => ({
        color: theme.palette.common.black,
        backgroundColor: theme.palette.secondary[500],
        border: `${theme.palette.secondary[500]} solid 2px`,
        "&:focus-visible": {
          boxShadow: `${theme.palette.secondary[500]} 0px 0px 0px 2px`,
        },
        "&:hover": {
          backgroundColor: theme.palette.secondary[300],
          border: `${theme.palette.secondary[300]} solid 2px`,
        },
        "&:active": {
          backgroundColor: theme.palette.secondary[700],
          border: `${theme.palette.secondary[700]} solid 2px`,
          boxShadow: "none",
        },
        "&:disabled": {
          color: theme.palette.common.black,
        },
      }),
    },

    {
      props: { variant: "alt-inverted" },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.secondary[700],
        border: "none",
        "&:hover": {
          boxShadow: "none",
          border: "none",
          backgroundColor: theme.palette.secondary[900],
        },
        "&:focus-visible": {
          boxShadow: "none",
          border: "none",
          background: theme.palette.secondary[900],
        },
        "&:active": {
          boxShadow: "none",
          border: "none",
          background: theme.palette.secondary[900],
        },
        "&:disabled": {
          boxShadow: "none",
          border: "none",
          background: theme.palette.secondary[900],
        },
      }),
    },
    {
      props: { variant: "danger" },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.error[500],
        border: `${theme.palette.error[500]} solid 2px`,
        "&:focus-visible": {
          boxShadow: `${theme.palette.error[500]} 0px 0px 0px 2px`,
        },
        "&:hover": {
          backgroundColor: theme.palette.error[300],
          border: `${theme.palette.error[300]} solid 2px`,
        },
        "&:active": {
          backgroundColor: theme.palette.error[700],
          border: `${theme.palette.error[700]} solid 2px`,
          boxShadow: "none",
        },
      }),
    },
    {
      props: { variant: "minimal" },
      style: ({ theme }) => ({
        color: theme.palette.primary[500],
        backgroundColor: "transparent",
        height: "auto",
        border: "none",
        "&:hover": {
          textDecoration: "underline",
          textDecorationThickness: 2,
          backgroundColor: "transparent",
        },
        "&:focus-visible": {
          color: theme.palette.primary[500],
          boxShadow: "none",
          border: "none",
        },
        "&:active": {
          textDecoration: "underline",
          textDecorationThickness: 2,
          color: theme.palette.primary[700],
          boxShadow: "none",
          border: "none",
          backgroundColor: "transparent",
        },
        "&:disabled": {
          boxShadow: "none",
          border: "none",
          backgroundColor: "transparent",
          color: theme.palette.primary[500],
        },
      }),
    },
    {
      props: { variant: "warning" },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.warning[700],
        border: `${theme.palette.warning[700]} solid 2px`,
        "&:focus-visible": {
          boxShadow: `${theme.palette.warning[500]} 0px 0px 0px 2px`,
          border: `${theme.palette.warning[700]} solid 2px`,
        },
        "&:hover": {
          backgroundColor: theme.palette.warning[300],
          border: `${theme.palette.warning[300]} solid 2px`,
        },
        "&:active": {
          backgroundColor: theme.palette.warning[700],
          border: `${theme.palette.warning[700]} solid 2px`,

          boxShadow: "none",
        },
      }),
    },
  ],
};
