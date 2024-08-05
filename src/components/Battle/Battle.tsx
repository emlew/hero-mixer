import { Box, Typography } from "@mui/material";
import { BattleStats } from "../BattleStats";
import { averagePowerstats } from "../../utils";
import { usePlayerNames, useClaimedHeroes } from "../../hooks";
import { deriveWinner } from "../../utils/deriveWinner";

export const Battle: React.FC = () => {
  const { playerNames } = usePlayerNames();
  const { claimedHeroes } = useClaimedHeroes();
  const images: string[][] = [[], []];
  for (const hero of claimedHeroes[0]) {
    images[0].push(hero.images.sm);
  }
  for (const hero of claimedHeroes[1]) {
    images[1].push(hero.images.sm);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <BattleStats
        name={playerNames[0]}
        stats={averagePowerstats(claimedHeroes[0])}
        images={images[0]}
      />
      <Typography>
        {"Winner: " +
          playerNames[deriveWinner(claimedHeroes[0], claimedHeroes[1]) - 1]}
      </Typography>
      <BattleStats
        name={playerNames[1]}
        stats={averagePowerstats(claimedHeroes[1])}
        images={images[1]}
      />
    </Box>
  );
};
