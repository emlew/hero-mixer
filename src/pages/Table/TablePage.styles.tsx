import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const ContentWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "32px",
  height: "100%",
  overflow: "hidden",
  gap: "8px",
});

export const StyledLink = styled(Link)({
  margin: "auto",
});
