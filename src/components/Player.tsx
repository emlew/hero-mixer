import { Grid, SelectChangeEvent, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { HeroCard } from "./HeroCard";
import { HeroesContext } from "../store/heroes-context";

type Props = {
  initialName: string;
  number: number;
  isActive: boolean;
  onChangeName: (number: number, newName: string) => void;
  onClaimHero: (hero: number) => void;
};

export const Player = ({
  initialName,
  number,
  isActive,
  onChangeName,
  onClaimHero,
}: Props) => {
  const { heroes, isLoading } = useContext(HeroesContext);

  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(number, playerName);
    }
  }

  function handleChange(event: SelectChangeEvent) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">{editablePlayerName}</span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      <span>{isActive ? "Your turn" : "Not your turn"}</span>
      {isLoading && (
        <Typography variant="subtitle1">Fetching heroes...</Typography>
      )}
      {!isLoading && heroes.length === 0 && (
        <Typography variant="subtitle1">No heroes to display</Typography>
      )}
      {!isLoading && heroes.length > 0 && (
        <>
          <Grid container spacing={3}>
            {[1, 2, 3].map((hero) => (
              <Grid key={hero} item xs={12} md={4}>
                <HeroCard onClaimHero={onClaimHero} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </li>
  );
};
