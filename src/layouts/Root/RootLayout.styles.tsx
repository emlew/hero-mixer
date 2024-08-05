import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import theme from "../../styles/theme";

const NAV_BAR_HEIGHT = 72;

export const MainContent = styled(Box)({
  alignItems: "center",
  position: "fixed",
  height: `calc(100vh - ${NAV_BAR_HEIGHT}px)`,
  flexGrow: 1,
  top: NAV_BAR_HEIGHT,
  width: "100vw",
  overflowX: "hidden",
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
  height: NAV_BAR_HEIGHT,
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
