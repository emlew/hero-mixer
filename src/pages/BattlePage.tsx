import { Typography } from "@mui/material";
import { HeroCards } from "../components";
import HeroesContextProvider from "../store/heroes-context";
import { Link } from "react-router-dom";

export const BattlePage: React.FC = () => {
  return (
    <>
      <header>
        <Typography variant="h2">HeroMixer</Typography>
        <Typography variant="subtitle1">
          Mix, match, and battle superheroes
        </Typography>
      </header>
      <HeroesContextProvider>
        <main>
          <>
            <HeroCards />
            <Typography variant="body1">
              Go to <Link to="/heroes">the hero table</Link>
            </Typography>
          </>
        </main>
      </HeroesContextProvider>
    </>
  );
};
