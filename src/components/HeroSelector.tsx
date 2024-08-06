import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useMemo } from "react";
import { useHeroesData } from "../data";
import { Hero } from "../api";
import { useActivePlayer } from "../hooks";

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
      <FormControl
        key={index}
        sx={{ width: "10vw" }}
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
      </FormControl>
    </>
  );
};
