import { ReactNode, createContext, useEffect, useState } from "react";
import React from "react";
import fetchAll from "../index";
import { Hero } from "../api";

type HeroesContextObj = {
  heroes: Hero[];
  claimedHeroes: Hero[];
  isLoading: boolean;
  claimHero: (id: number) => void;
  unclaimHero: (id: number) => void;
};

export const HeroesContext = createContext<HeroesContextObj>({
  heroes: [],
  claimedHeroes: [],
  isLoading: false,
  claimHero: () => {},
  unclaimHero: () => {},
});

const HeroesContextProvider: React.FC<{ children: ReactNode }> = (props) => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [claimedHeroes, setClaimedHeroes] = useState<Hero[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    const fetchHeroes = async () => {
      setIsFetching(true);
      try {
        const fetchedHeroes = await fetchAll();
        setHeroes(fetchedHeroes ?? []);
      } catch (error) {
        // ...
      }
      setIsFetching(false);
    };
    fetchHeroes();
  }, []);

  const handleClaimHero = (id: number) => {
    setClaimedHeroes((prevHeroes) => {
      const updatedHeroes = [...prevHeroes];
      const heroToAdd = heroes.find((hero) => hero.id === id);
      if (heroToAdd) {
        updatedHeroes.push(heroToAdd);
      }

      return updatedHeroes;
    });
  };

  const handleUnclaimHero = (id: number) => {
    setClaimedHeroes((prevHeroes) => {
      const updatedHeroes = [...prevHeroes].filter((hero) => hero.id !== id);

      return updatedHeroes;
    });
  };

  const ctxValue: HeroesContextObj = {
    heroes: heroes,
    claimedHeroes: claimedHeroes,
    isLoading: isFetching,
    claimHero: handleClaimHero,
    unclaimHero: handleUnclaimHero,
  };

  return (
    <HeroesContext.Provider value={ctxValue}>
      {props.children}
    </HeroesContext.Provider>
  );
};

export default HeroesContextProvider;
