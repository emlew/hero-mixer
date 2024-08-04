import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useMemo, useState } from "react";
import { HeroCard } from "../HeroCard";
import { HeroesContext } from "../../store/heroes-context";
import { StyledPlayerDetails } from "./Player.styles";
import { CheckCircle, XCircle } from "phosphor-react";
import { useHeroesData } from "../../data/hooks/useHeroData";
import { Hero } from "../../api";

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
  const query = useHeroesData();
  const heroes: Hero[] = useMemo(() => {
    return query.data ?? [];
  }, [query]);
  const { isLoading } = useContext(HeroesContext);

  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(number, playerName);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  let editablePlayerName = <Typography variant="h4">{playerName}</Typography>;

  if (isEditing) {
    editablePlayerName = (
      <TextField required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <Box>
      <StyledPlayerDetails>
        <Box className="player">{editablePlayerName}</Box>
        <Button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</Button>
        {isActive ? <CheckCircle size={32} /> : <XCircle size={32} />}
        <Box>{isActive ? "Your turn" : "Not your turn"}</Box>
      </StyledPlayerDetails>
      {isLoading && (
        <Typography variant="subtitle1">Fetching heroes...</Typography>
      )}
      {!isLoading && heroes.length === 0 && (
        <Typography variant="subtitle1">No heroes to display</Typography>
      )}
      {!isLoading && heroes.length > 0 && (
        <>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {[1, 2, 3].map((hero) => (
              <HeroCard
                key={hero}
                allowSelect={isActive}
                onClaimHero={onClaimHero}
              />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};
