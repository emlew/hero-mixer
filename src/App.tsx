import { useEffect, useState } from "react";
import fetchAll from ".";
import "./App.css";
import Hero from "./models/hero";
import Heroes from "./components/Heroes";

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
        setError({ name: "Error", message: "Failed to fetch user places" });
      }
      setIsFetching(false);
    }
    fetchHeroes();
  }, []);

  return (
    <>
      <header>
        <h1>HeroMixer</h1>
        <p>Mix, match, and battle superheroes</p>
      </header>
      <main>
      {error && <><h2>An error occured</h2><p>{error.message}</p></>}
        {!error && (
          <Heroes heroes={heroes} isLoading={isFetching} />
        )}
      </main>
    </>
  );
}

export default App;
