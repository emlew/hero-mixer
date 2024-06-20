import styled from "@emotion/styled";
import { Button } from "@mui/material";
import theme from "../../styles/theme";

export const MainContent = styled("div")({
  flexGrow: 1,
  minHeight: "100vh",
  alignItems: "center",
  minWidth: "100vw",
});

export const StyledPrimaryNav = styled("div")({
  position: "fixed",
  display: "flex",
  minWidth: "100vw",
  top: 0,
  alignItems: "center",
});

export const StyledNav = styled("div")({
  height: 72,
  alignItems: "center",
});

export const StyledNavButton = styled(Button)({
  color: theme.palette.common.white,
  "&:hover": {
    color: theme.palette.common.white,
  },
  "&:focus": {
    color: theme.palette.common.white,
  },
});