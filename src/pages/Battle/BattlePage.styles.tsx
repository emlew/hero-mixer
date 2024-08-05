import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledHeader = styled(Box)({
  padding: "0px 24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
});

export const ContentWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "32px",
  gap: "40px",
});
