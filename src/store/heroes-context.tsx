import { ReactNode, createContext, useEffect, useState } from "react";
import Hero from "../models/hero";
import React from "react";
import fetchAll from "../index";

type HeroesContextObj = {
  heroes: Hero[];
  isLoading: boolean;
  addHero: (hero: Hero) => void;
};

export const HeroesContext = createContext<HeroesContextObj>({
  heroes: [],
  isLoading: false,
  addHero: () => {},
});

const HeroesContextProvider: React.FC<{ children: ReactNode }> = (props) => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    async function fetchHeroes() {
      setIsFetching(true);
      try {
        const fetchedHeroes = await fetchAll();
        setHeroes(fetchedHeroes ?? []);
      } catch (error) {
        // ...
      }
      setIsFetching(false);
    }
    fetchHeroes();
  }, []);

  function handleAddHero(hero: Hero) {
    setHeroes((prevHeroes) => {
      const updatedHeroes = [...prevHeroes];
      updatedHeroes.push(hero);

      return updatedHeroes;
    });
  }

  const ctxValue: HeroesContextObj = {
    heroes: heroes,
    isLoading: isFetching,
    addHero: handleAddHero,
  };

  return (
    <HeroesContext.Provider value={ctxValue}>
      {props.children}
    </HeroesContext.Provider>
  );
};

export default HeroesContextProvider;
