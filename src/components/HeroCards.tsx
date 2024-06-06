import { Grid, Typography } from "@mui/material";
import Hero from "../models/hero";
import HeroCard from "./HeroCard";

const HeroCards: React.FC<{ heroes: Hero[]; isLoading: boolean }> = (props) => {
  return (
    <>
      {props.isLoading && (
        <Typography variant="subtitle1">Fetching heroes...</Typography>
      )}
      {!props.isLoading && props.heroes.length === 0 && (
        <Typography variant="subtitle1">No heroes to display</Typography>
      )}
      {!props.isLoading && props.heroes.length > 0 && (
        <Grid container spacing={3}>
          {props.heroes.map((hero) => (
            <Grid item xs={12} md={4}>
              <HeroCard key={hero.id} hero={hero} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default HeroCards;
