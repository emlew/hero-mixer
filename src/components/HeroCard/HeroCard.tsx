import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useContext, useMemo, useState } from "react";
import { HeroSelector } from "../HeroSelector";
import { HeroesContext } from "../../store/heroes-context";
import { Hero } from "../../api";
import { useHeroesData } from "../../data/hooks/useHeroData";

type Props = {
  onClaimHero: (hero: number) => void;
  allowSelect: boolean;
};

export const HeroCard = ({ onClaimHero, allowSelect }: Props) => {
  const query = useHeroesData();
  const heroes: Hero[] = useMemo(() => {
    return query.data ?? [];
  }, [query]);
  const [selectedHero, setSelectedHero] = useState<Hero>();
  const { claimHero } = useContext(HeroesContext);

  const handleSelectHero = (id: number) => {
    onClaimHero(id);
    claimHero(id);
    setSelectedHero(() => {
      return heroes.find((hero) => hero.id == id);
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
