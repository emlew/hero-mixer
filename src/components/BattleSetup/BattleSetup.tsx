import { StyledPlayers } from "./BattleSetup.styles";
import { HeroForm } from "../HeroForm";
import { Player } from "../Player";
import { Box } from "@mui/material";

export const BattleSetup: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <StyledPlayers>
        <Player number={1} />
        <Player number={2} />
      </StyledPlayers>
      <HeroForm onStart={onStart} />
    </Box>
  );
};
