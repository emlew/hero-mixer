import { Box, Button } from "@mui/material";
import { useMemo, useState } from "react";
import { Hero } from "../api";
import { useHeroesData } from "../data";
import { HeroSelector } from "./HeroSelector";
import { useActivePlayer, useClaimedHeroes } from "../hooks";

export const HeroForm: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  const query = useHeroesData();
  const heroes: Hero[] = useMemo(() => {
    return query.data ?? [];
  }, [query]);
  const [claimedHeroes, setClaimedHeroes] = useState<(Hero | undefined)[][]>([
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ]);
  const { switchTurns } = useActivePlayer();
  const { claimHeroes } = useClaimedHeroes();
  const disableBattle =
    claimedHeroes[0].includes(undefined) ||
    claimedHeroes[1].includes(undefined);

  const handleChange = (heroId: number, player: number, heroNumber: number) => {
    setClaimedHeroes((prev) =>
      prev.map((row, p) => {
        if (p === player) {
          return row.map((h, i) => {
            if (i === heroNumber) {
              return heroes.find((h) => h.id === heroId);
            } else {
              return h;
            }
          });
        } else {
          return row;
        }
      })
    );
    switchTurns();
  };

  const handleStart = () => {
    claimHeroes(claimedHeroes);
    onStart();
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "0" }}>
      {claimedHeroes[0].map((hero, i) => (
        <HeroSelector
          key={i}
          hero={hero}
          player={0}
          index={i}
          handleChange={handleChange}
        />
      ))}
      <Button onClick={handleStart} disabled={disableBattle}>
        Battle!
      </Button>
      {claimedHeroes[1].map((hero, i) => (
        <HeroSelector
          key={i}
          hero={hero}
          player={1}
          index={i}
          handleChange={handleChange}
        />
      ))}
    </Box>
  );
};
