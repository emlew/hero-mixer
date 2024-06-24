import { useState } from "react";
import { Player } from "../Player";
import { Box } from "@mui/material";

const PLAYERS = ["Player 1", "Player 2"];

type HeroChoice = {
  player: number;
  hero: number;
};

const deriveActivePlayer = (heroChoices: HeroChoice[]) => {
  let currentPlayer = 1;

  if (heroChoices.length > 0 && heroChoices[0].player === 1) {
    currentPlayer = 2;
  }

  return currentPlayer;
};

export const BattleSetup: React.FC = () => {
  const [players, setPlayers] = useState(PLAYERS);
  const [heroChoices, setHeroChoices] = useState([] as HeroChoice[]);
  const activePlayer = deriveActivePlayer(heroChoices);

  const handlePlayerNameChange = (number: number, newName: string) => {
    setPlayers((prevPlayers) => {
      prevPlayers[number - 1] = newName;
      return {
        ...prevPlayers,
      };
    });
  };

  const handleSelectHero = (hero: number) => {
    setHeroChoices((prevChoices) => {
      const currentPlayer = deriveActivePlayer(prevChoices);

      const updatedChoices = [
        { player: currentPlayer, hero: hero },
        ...prevChoices,
      ];
      return updatedChoices;
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <Player
        initialName="Player 1"
        number={1}
        isActive={activePlayer === 1}
        onChangeName={handlePlayerNameChange}
        onClaimHero={handleSelectHero}
      />
      <Player
        initialName="Player 2"
        number={2}
        isActive={activePlayer === 2}
        onChangeName={handlePlayerNameChange}
        onClaimHero={handleSelectHero}
      />
    </Box>
  );
};
