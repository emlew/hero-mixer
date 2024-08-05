import { Card, CardContent, CardHeader } from "@mui/material";
import { useMemo, useState } from "react";
import { HeroSelector } from "../HeroSelector";
import { Hero } from "../../api";
import { useHeroesData } from "../../data";
import { useActivePlayer, useClaimedHeroes } from "../../hooks";

export const HeroCard: React.FC<{ player: number }> = ({ player }) => {
  const query = useHeroesData();
  const heroes: Hero[] = useMemo(() => {
    return query.data ?? [];
  }, [query]);
  const [selectedHero, setSelectedHero] = useState<Hero>();
  const { claimHero } = useClaimedHeroes();
  const { switchTurns } = useActivePlayer();

  const handleSelectHero = (hero?: Hero) => {
    if (!hero) return;
    claimHero(hero, player);
    setSelectedHero(() => {
      return heroes.find((h) => h.id == hero.id);
    });
    switchTurns();
  };

  return (
    <Card variant="outlined" sx={{ border: 0, width: "10vw" }}>
      {!selectedHero && (
        <CardContent>
          <HeroSelector onSelectHero={handleSelectHero} player={player} />
        </CardContent>
      )}
      {selectedHero && (
        <>
          <CardHeader
            title={selectedHero.name}
            sx={{ wordBreak: "break-word" }}
          />
          <CardContent>
            <img
              src={selectedHero.images.sm}
              alt={"Photo of " + selectedHero.name}
              style={{ maxWidth: "10vw" }}
            />
          </CardContent>
        </>
      )}
    </Card>
  );
};
