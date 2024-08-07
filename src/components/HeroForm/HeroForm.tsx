import { Hero } from "@/api";
import { useHeroesData } from "@/data";
import { useActivePlayer, useClaimedHeroes } from "@/hooks";
import { Button } from "@mui/material";
import { useMemo, useState } from "react";
import { HeroSelector } from "../HeroSelector";
import { StyledWrapper, StyledPlayerChoices } from "./HeroForm.styles";

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
    <StyledWrapper>
      <StyledPlayerChoices>
        {claimedHeroes[0].map((hero, i) => (
          <HeroSelector
            key={i}
            hero={hero}
            player={0}
            index={i}
            handleChange={handleChange}
          />
        ))}
      </StyledPlayerChoices>
      <Button
        onClick={handleStart}
        disabled={disableBattle}
        sx={{ width: "5vw" }}
      >
        Battle!
      </Button>
      <StyledPlayerChoices>
        {claimedHeroes[1].map((hero, i) => (
          <HeroSelector
            key={i}
            hero={hero}
            player={1}
            index={i}
            handleChange={handleChange}
          />
        ))}
      </StyledPlayerChoices>
    </StyledWrapper>
  );
};
