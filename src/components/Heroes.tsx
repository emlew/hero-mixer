import Hero from "../models/hero";
import HeroStats from "./HeroStats";
import { Typography } from "@mui/material";

const Heroes: React.FC<{ heroes: Hero[]; isLoading: boolean }> = (props) => {
  return (
    <section>
      <Typography variant="h2">Heroes</Typography>
      {props.isLoading && (
        <Typography variant="subtitle1">Fetching heroes...</Typography>
      )}
      {!props.isLoading && props.heroes.length === 0 && (
        <Typography variant="subtitle1">No heroes to display</Typography>
      )}
      {!props.isLoading && props.heroes.length > 0 && (
        <ul>
          {props.heroes.map((hero) => {
            return <HeroStats key={hero.id} hero={hero} />;
          })}
        </ul>
      )}
    </section>
  );
};

export default Heroes;
