import { Box, Button } from "@mui/material";
import { Player } from "../Player";
import { StyledPlayers } from "./BattleSetup.styles";

export const BattleSetup: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <StyledPlayers>
      <Player number={1} />
      <Box
        sx={{
          height: "40vh",
          width: "10vw",
          alignContent: "center",
          justifyItems: "center",
        }}
      >
        <Button disabled={false} onClick={onStart}>
          Battle!
        </Button>
      </Box>
      <Player number={2} />
    </StyledPlayers>
  );
};
