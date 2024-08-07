import { Hero } from "@/api";
import { atom, useAtom } from "jotai";

const claimedHeroesAtom = atom<(Hero | undefined)[][]>([[], []]);

export const useClaimedHeroes = () => {
  const [claimedHeroes, setClaimedHeroes] = useAtom(claimedHeroesAtom);

  const claimHeroes = (heroes: (Hero | undefined)[][]) => {
    setClaimedHeroes(heroes);
  };

  return { claimedHeroes, claimHeroes };
};
