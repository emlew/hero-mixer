import { Grid, Typography } from "@mui/material";
import HeroCard from "./HeroCard";
import { HeroesContext } from "../store/heroes-context";
import { useContext } from "react";

export const HeroCards: React.FC = () => {
  const { heroes, isLoading } = useContext(HeroesContext);
  return (
    <>
      {isLoading && (
        <Typography variant="subtitle1">Fetching heroes...</Typography>
      )}
      {!isLoading && heroes.length === 0 && (
        <Typography variant="subtitle1">No heroes to display</Typography>
      )}
      {!isLoading && heroes.length > 0 && (
        <>
          <Grid container spacing={3}>
            {[1, 2, 3].map((hero) => (
              <Grid key={hero} item xs={12} md={4}>
                <HeroCard />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  );
};
