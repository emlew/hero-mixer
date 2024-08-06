import {
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useMemo } from "react";
import { useHeroesData } from "../../data";
import { Hero } from "../../api";
import { useActivePlayer } from "../../hooks";
import { StyledFormControl, StyledHeroDetails } from "./HeroSelector.styles";

export const HeroSelector: React.FC<{
  hero?: Hero;
  player: number;
  index: number;
  handleChange: (n: number, p: number, i: number) => void;
}> = ({ hero, player, index, handleChange }) => {
  const query = useHeroesData();
  const heroes: Hero[] = useMemo(() => {
    return query.data ?? [];
  }, [query]);
  const { activePlayer } = useActivePlayer();

  return (
    <>
      <StyledFormControl
        key={index}
        sx={{ display: hero ? "none" : "default" }}
        disabled={activePlayer !== player + 1}
      >
        <InputLabel>Choose a hero...</InputLabel>
        <Select
          value={hero?.id ?? ""}
          label="Hero"
          onChange={(hero: SelectChangeEvent<number>) =>
            handleChange(hero.target.value as number, player, index)
          }
        >
          {heroes.map((hero) => (
            <MenuItem key={hero.id} value={hero.id}>
              {hero.name}
            </MenuItem>
          ))}
        </Select>
      </StyledFormControl>
      {hero && (
        <StyledHeroDetails>
          <Typography>{hero.name}</Typography>
          <img
            src={hero.images.sm}
            alt={"Photo of hero"}
            style={{ width: "10vw" }}
          />
        </StyledHeroDetails>
      )}
    </>
  );
};
