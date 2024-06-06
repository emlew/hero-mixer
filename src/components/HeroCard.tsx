import { Card, CardContent, Typography } from "@mui/material";
import Hero from "../models/hero";

const HeroCard: React.FC<{ hero: Hero }> = (props) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5">{props.hero.name}</Typography>
        <img src={props.hero.images.sm} alt={"Photo of" + props.hero.name} />
        <Typography variant="body1">
          Alignment: {props.hero.biography.alignment}
        </Typography>
        <Typography variant="body1">{props.hero.work.occupation}</Typography>
      </CardContent>
    </Card>
  );
};

export default HeroCard;
