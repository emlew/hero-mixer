import styled from "@emotion/styled";
import { Box, LinearProgress } from "@mui/material";

export const StyledWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "30vw",
  alignItems: "center",
});

export const StyledBarWithLabel = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "8px",
});

export const StyledBar = styled(LinearProgress)({
  width: "10vw",
});
