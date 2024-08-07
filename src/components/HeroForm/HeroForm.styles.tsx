import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const StyledWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "5vw",
});

export const StyledPlayerChoices = styled(Box)({
  display: "flex",
  width: "40vw",
  justifyContent: "space-between",
});

export const StyledBattleButton = styled(Button)({
  width: "5vw",
});
