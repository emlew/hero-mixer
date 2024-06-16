import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import Hero from "../../models/hero";
import { useContext, useState } from "react";
import { HeroSelector } from "../HeroSelector";
import { HeroesContext } from "../../store/heroes-context";
import { GridCloseIcon } from "@mui/x-data-grid";

type Props = {
  onClaimHero: (hero: number) => void;
};

export const HeroCard = ({ onClaimHero }: Props) => {
  const [selectedHero, setSelectedHero] = useState<Hero>();
  const { heroes, claimHero, unclaimHero } = useContext(HeroesContext);

  function handleSelectHero(id: number) {
    onClaimHero(id);
    claimHero(id);
    setSelectedHero(() => {
      return heroes.find((hero) => hero.id == id);
    });
  }

  function handleUnselectHero() {
    if (selectedHero) {
      unclaimHero(selectedHero.id);
      setSelectedHero(undefined);
    }
  }

  return (
      <Card variant="outlined">
        {!selectedHero && (
          <CardContent>
            <HeroSelector onSelectHero={handleSelectHero} />
          </CardContent>
        )}
        {selectedHero && (
          <>
            <CardHeader
              action={
                <IconButton aria-label="deselect" onClick={handleUnselectHero}>
                  <GridCloseIcon />
                </IconButton>
              }
              title={selectedHero.name}
            />
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
