import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useContext } from "react";
import { HeroesContext } from "../store/heroes-context";

export const HeroSelector: React.FC<{ onSelectHero: (id: number) => void }> = (
  props
) => {
  const { heroes, claimedHeroes } = useContext(HeroesContext);
  const availableHeroes = heroes.filter(
    (hero) => !claimedHeroes.includes(hero)
  );

  return (
    <FormControl fullWidth>
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
