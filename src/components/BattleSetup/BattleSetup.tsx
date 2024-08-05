import { Player } from "../Player";
import { Box } from "@mui/material";

export const BattleSetup: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <Player initialName="Player 1" number={1} />
      <Player initialName="Player 2" number={2} />
    </Box>
  );
};
