import { Box, styled, TextField } from "@mui/material";

export const StyledPlayerDetails = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  height: "60px",
  width: "40vw",
  justifyContent: "space-between",
  padding: "0 3%",
});

export const StyledEditableName = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const StyledTurnIndicator = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const StyledTextField = styled(TextField)({
  width: "10vw",
});
