import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import theme from "../../styles/theme";

export const MainContent = styled(Box)({
  flexGrow: 1,
  minHeight: "100vh",
  alignItems: "center",
  minWidth: "100vw",
});

export const StyledNavBar = styled(Box)({
  position: "fixed",
  display: "flex",
  flexDirection: "row",
  minWidth: "100vw",
  top: 0,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.primary[700],
});

export const StyledNav = styled(Box)({
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
