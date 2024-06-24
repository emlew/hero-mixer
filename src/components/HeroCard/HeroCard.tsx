import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import Hero from "../../models/hero";
import { useContext, useState } from "react";
import { HeroSelector } from "../HeroSelector";
import { HeroesContext } from "../../store/heroes-context";

type Props = {
  onClaimHero: (hero: number) => void;
  allowSelect: boolean;
};

export const HeroCard = ({ onClaimHero, allowSelect }: Props) => {
  const [selectedHero, setSelectedHero] = useState<Hero>();
  const { heroes, claimHero } = useContext(HeroesContext);

  function handleSelectHero(id: number) {
    onClaimHero(id);
    claimHero(id);
    setSelectedHero(() => {
      return heroes.find((hero) => hero.id == id);
    });
  }

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
