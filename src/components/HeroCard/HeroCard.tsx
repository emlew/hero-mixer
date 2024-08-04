import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { HeroSelector } from "../HeroSelector";
import { Hero } from "../../api";
import { useHeroesData } from "../../data/hooks/useHeroData";
import { useClaimedHeroes } from "../../hooks/useClaimedHeroes";

type Props = {
  onClaimHero: (hero: number) => void;
  allowSelect: boolean;
  player: number;
};

export const HeroCard = ({ onClaimHero, allowSelect, player }: Props) => {
  const query = useHeroesData();
  const heroes: Hero[] = useMemo(() => {
    return query.data ?? [];
  }, [query]);
  const [selectedHero, setSelectedHero] = useState<Hero>();
  const { claimHero } = useClaimedHeroes();

  const handleSelectHero = (hero?: Hero) => {
    if (!hero) return;
    onClaimHero(hero.id);
    claimHero(hero, player);
    setSelectedHero(() => {
      return heroes.find((h) => h.id == hero.id);
    });
  };

  return (
    <Card variant="outlined" sx={{ border: 0, width: 200 }}>
      {!selectedHero && (
        <CardContent>
          <HeroSelector
            allowSelect={allowSelect}
            onSelectHero={handleSelectHero}
          />
        </CardContent>
      )}
      {selectedHero && (
        <>
          <CardHeader title={selectedHero.name} />
          <CardContent>
            <img
              src={selectedHero.images.sm}
              alt={"Photo of" + selectedHero.name}
            />
            <Typography variant="body1">
              Alignment: {selectedHero.biography.alignment}
            </Typography>
            <Typography variant="body1">
              {selectedHero.work.occupation}
            </Typography>
          </CardContent>
        </>
      )}
    </Card>
  );
};
