import { Box, Button, Typography } from "@mui/material";
import { Player } from "../Player";
import { StyledPlayers } from "./BattleSetup.styles";
import { useClaimedHeroes } from "../../hooks";
// import { HeroForm } from "../HeroForm";

export const BattleSetup: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  const { claimedHeroes } = useClaimedHeroes();

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
        <Typography>{claimedHeroes[0].map((h) => h.name)}</Typography>
        <Button disabled={false} onClick={onStart}>
          Battle!
        </Button>
      </Box>
      <Player number={2} />
      {/* <HeroForm /> */}
    </StyledPlayers>
  );
};
