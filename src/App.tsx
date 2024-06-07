import "./App.css";
import Heroes from "./components/Heroes";
import { Typography } from "@mui/material";
import HeroCards from "./components/HeroCards";
import HeroesContextProvider from "./store/heroes-context";

function App() {
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
            <Heroes />
          </>
        </main>
      </HeroesContextProvider>
    </>
  );
}

export default App;
