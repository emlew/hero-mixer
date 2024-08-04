import { atom, useAtom } from "jotai";
import { Hero } from "../api";

const claimedHeroesAtom = atom<Hero[][]>([[], []]);

export const useClaimedHeroes = () => {
  const [claimedHeroes, setClaimedHeroes] = useAtom(claimedHeroesAtom);

  const claimHero = (hero: Hero, player: number) => {
    const newClaimedHeroes = claimedHeroes;
    newClaimedHeroes[player - 1].push(hero);
    setClaimedHeroes(newClaimedHeroes);
  };

  const unclaimHero = (hero: Hero, player: number) => {
    const newClaimedHeroes = claimedHeroes;
    newClaimedHeroes[player - 1] = newClaimedHeroes[player - 1].filter(
      (h) => h.id !== hero.id
    );
    setClaimedHeroes(newClaimedHeroes);
  };

  return { claimedHeroes, claimHero, unclaimHero };
};