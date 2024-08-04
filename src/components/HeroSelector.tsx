import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useMemo } from "react";
import { useHeroesData } from "../data/hooks/useHeroData";
import { Hero } from "../api";
import { useClaimedHeroes } from "../hooks/useClaimedHeroes";

export const HeroSelector: React.FC<{
  onSelectHero: (id: number) => void;
  allowSelect: boolean;
}> = (props) => {
  const query = useHeroesData();
  const heroes: Hero[] = useMemo(() => {
    return query.data ?? [];
  }, [query]);
  const { claimedHeroes } = useClaimedHeroes();
  const availableHeroes = heroes.filter(
    (hero) =>
      !(claimedHeroes[0].includes(hero) || claimedHeroes[1].includes(hero))
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
