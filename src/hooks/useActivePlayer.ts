import { atom, useAtom } from "jotai";

const activePlayerAtom = atom<1 | 2>(1);

export const useActivePlayer = () => {
  const [activePlayer, setActivePlayer] = useAtom(activePlayerAtom);

  const switchTurns = () => {
    if (activePlayer === 1) setActivePlayer(2);
    else setActivePlayer(1);
  };

  return { activePlayer, switchTurns };
};
