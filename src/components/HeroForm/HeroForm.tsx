import { Hero } from "@/api";
import { useHeroesData } from "@/data";
import { useActivePlayer, useClaimedHeroes } from "@/hooks";
import { useMemo, useState } from "react";
import { HeroSelector } from "../HeroSelector";
import {
  StyledWrapper,
  StyledPlayerChoices,
  StyledBattleButton,
} from "./HeroForm.styles";

export const HeroForm: React.FC<{
  onStart: () => void;
  onReady: () => void;
}> = ({ onStart, onReady }) => {
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
  const unclaimedHeroes = heroes.filter(
    (hero) =>
      !(claimedHeroes[0].includes(hero) || claimedHeroes[1].includes(hero))
  );

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
    if (!claimedHeroes[0].includes(undefined) && player === 1) {
      onReady();
    }
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
            unclaimedHeroes={unclaimedHeroes}
          />
        ))}
      </StyledPlayerChoices>
      <StyledBattleButton onClick={handleStart} disabled={disableBattle}>
        Battle!
      </StyledBattleButton>
      <StyledPlayerChoices>
        {claimedHeroes[1].map((hero, i) => (
          <HeroSelector
            key={i}
            hero={hero}
            player={1}
            index={i}
            handleChange={handleChange}
            unclaimedHeroes={unclaimedHeroes}
          />
        ))}
      </StyledPlayerChoices>
    </StyledWrapper>
  );
};
