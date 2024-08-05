import { Typography } from "@mui/material";
import { Hero } from "../api";

export const HeroStats: React.FC<{ hero: Hero }> = ({ hero }) => {
  return (
    <li>
      <Typography variant="body1">
        {hero.name}: {hero.powerstats.intelligence} {hero.powerstats.strength}{" "}
        {hero.powerstats.speed} {hero.powerstats.durability}{" "}
        {hero.powerstats.power} {hero.powerstats.combat}
      </Typography>
    </li>
  );
};
