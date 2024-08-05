import { atom, useAtom } from "jotai";

const playerNamesAtom = atom<string[]>(["Player 1", "Player 2"]);

export const usePlayerNames = () => {
  const [playerNames, setPlayerNames] = useAtom(playerNamesAtom);

  const changeName = (name: string, player: number) => {
    const newPlayerNames = playerNames;
    newPlayerNames[player - 1] = name;
    setPlayerNames(newPlayerNames);
  };

  return { playerNames, changeName };
};
