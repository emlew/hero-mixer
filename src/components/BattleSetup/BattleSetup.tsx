import { Box, Button } from "@mui/material";
import { Player } from "../Player";
import { StyledPlayers } from "./BattleSetup.styles";

export const BattleSetup: React.FC = () => {
  return (
    <StyledPlayers>
      <Player initialName="Player 1" number={1} />
      <Box
        sx={{
          height: "40vh",
          width: "10vw",
          alignContent: "center",
          justifyItems: "center",
        }}
      >
        <Button disabled={true}>Battle!</Button>
      </Box>
      <Player initialName="Player 2" number={2} />
    </StyledPlayers>
  );
};
