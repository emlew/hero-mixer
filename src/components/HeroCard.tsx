import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import Hero from "../models/hero";
import { useContext, useState } from "react";
import HeroSelector from "./HeroSelector";
import { HeroesContext } from "../store/heroes-context";
import { GridCloseIcon } from "@mui/x-data-grid";

const HeroCard: React.FC = () => {
  const [selectedHero, setSelectedHero] = useState<Hero>();
  const { heroes } = useContext(HeroesContext);

  function handleSelectHero(id: number) {
    setSelectedHero(() => {
      return heroes.find((hero) => hero.id == id);
    });
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
              <IconButton
                aria-label="deselect"
                onClick={() => setSelectedHero(undefined)}
              >
                <GridCloseIcon />
              </IconButton>
            }
            title={selectedHero.name}
          />
          <CardContent>
            <img
              src={selectedHero.images.sm}
              alt={"Photo of" + heroes[0].name}
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

export default HeroCard;
