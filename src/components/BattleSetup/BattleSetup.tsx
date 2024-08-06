import { StyledPlayers } from "./BattleSetup.styles";
import { HeroForm } from "../HeroForm";

export const BattleSetup: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <StyledPlayers>
      {/* <Player number={1} />
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
      <Player number={2} /> */}
      <HeroForm onStart={onStart} />
    </StyledPlayers>
  );
};
