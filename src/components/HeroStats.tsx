import { Typography } from "@mui/material";
import { Hero } from "../api";

export const HeroStats: React.FC<{ hero: Hero }> = (props) => {
  return (
    <li>
      <Typography variant="body1">
        {props.hero.name}: {props.hero.powerstats.intelligence}{" "}
        {props.hero.powerstats.strength} {props.hero.powerstats.speed}{" "}
        {props.hero.powerstats.durability} {props.hero.powerstats.power}{" "}
        {props.hero.powerstats.combat}
      </Typography>
    </li>
  );
};
