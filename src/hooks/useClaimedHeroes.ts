import { atom, useAtom } from "jotai";
import { Hero } from "../api";

const claimedHeroesAtom = atom<(Hero | undefined)[][]>([[], []]);

export const useClaimedHeroes = () => {
  const [claimedHeroes, setClaimedHeroes] = useAtom(claimedHeroesAtom);

  const claimHeroes = (heroes: (Hero | undefined)[][]) => {
    setClaimedHeroes(heroes);
  };

  return { claimedHeroes, claimHeroes };
};
