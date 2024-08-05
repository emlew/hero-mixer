import { Box, Typography } from "@mui/material";
import { StatWithLabel } from "./StatWithLabel";
import { Powerstats } from "../api";

export const BattleStats: React.FC<{
  name: string;
  stats: Powerstats;
  images: string[];
}> = ({ name, stats, images }) => {
  return (
    <Box>
      <Typography sx={{ textAlign: "center" }} variant="h2">
        {name}
      </Typography>
      <Box sx={{ display: "flex" }}>
        {images.map((image) => (
          <img src={image} alt={"Photo of hero"} style={{ maxWidth: "10vw" }} />
        ))}
      </Box>
      <Box>
        <StatWithLabel label={"Intelligence"} value={stats.intelligence} />
        <StatWithLabel label={"Strength"} value={stats.strength} />
        <StatWithLabel label={"Speed"} value={stats.speed} />
        <StatWithLabel label={"Durability"} value={stats.durability} />
        <StatWithLabel label={"Power"} value={stats.power} />
        <StatWithLabel label={"Combat"} value={stats.combat} />
      </Box>
    </Box>
  );
};
