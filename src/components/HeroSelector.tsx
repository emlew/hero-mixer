import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useContext, useMemo } from "react";
import { HeroesContext } from "../store/heroes-context";
import { useHeroesData } from "../data/hooks/useHeroData";
import { Hero } from "../models";

export const HeroSelector: React.FC<{
  onSelectHero: (id: number) => void;
  allowSelect: boolean;
}> = (props) => {
  const query = useHeroesData();
  const heroes: Hero[] = useMemo(() => {
    return query.data ?? [];
  }, [query]);
  const { claimedHeroes } = useContext(HeroesContext);
  const availableHeroes = heroes.filter(
    (hero) => !claimedHeroes.includes(hero)
  );

  return (
    <FormControl fullWidth disabled={props.allowSelect}>
      <InputLabel>Choose a hero...</InputLabel>
      <Select
        value={""}
        label="Hero"
        onChange={(hero: SelectChangeEvent<number>) =>
          props.onSelectHero(hero.target.value as number)
        }
      >
        {availableHeroes.map((hero) => (
          <MenuItem key={hero.id} value={hero.id}>
            {hero.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
