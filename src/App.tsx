import { useEffect, useState } from "react";
import fetchAll from ".";
import "./App.css";
import Hero from "./models/hero";
import Heroes from "./components/Heroes";
import { Alert, Typography } from "@mui/material";
import HeroCards from "./components/HeroCards";

function App() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    async function fetchHeroes() {
      setIsFetching(true);
      try {
        const heroes = await fetchAll();
        setHeroes(heroes ?? []);
      } catch (error) {
        setError({ name: "Error", message: "Failed to fetch heroes." });
      }
      setIsFetching(false);
    }
    fetchHeroes();
  }, []);

  return (
    <>
      <header>
        <Typography variant="h1">HeroMixer</Typography>
        <Typography variant="subtitle1">
          Mix, match, and battle superheroes
        </Typography>
      </header>
      <main>
        {error && (
          <Alert severity="error">An error occured: {error.message}</Alert>
        )}
        {!error && (
          <>
            <HeroCards heroes={heroes.slice(0, 3)} isLoading={isFetching} />
            <Heroes heroes={heroes} isLoading={isFetching} />
          </>
        )}
      </main>
    </>
  );
}

export default App;
