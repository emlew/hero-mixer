import { Box } from "@mui/material";
import { Stat } from "../Stat";
import { Powerstats } from "../../api";
import { StyledImages, StyledName } from "./BattleStats.styles";

export const BattleStats: React.FC<{
  name: string;
  stats: Powerstats;
  images: string[];
}> = ({ name, stats, images }) => {
  return (
    <Box>
      <StyledName variant="h2">{name}</StyledName>
      <StyledImages sx={{ display: "flex" }}>
        {images.map((image) => (
          <img src={image} alt={"Photo of hero"} style={{ maxWidth: "10vw" }} />
        ))}
      </StyledImages>
      <Box>
        <Stat label={"Intelligence"} value={stats.intelligence} />
        <Stat label={"Strength"} value={stats.strength} />
        <Stat label={"Speed"} value={stats.speed} />
        <Stat label={"Durability"} value={stats.durability} />
        <Stat label={"Power"} value={stats.power} />
        <Stat label={"Combat"} value={stats.combat} />
      </Box>
    </Box>
  );
};
