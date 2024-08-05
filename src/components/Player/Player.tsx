import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import { HeroCard } from "../HeroCard";
import { StyledPlayerDetails } from "./Player.styles";
import { CheckCircle, XCircle } from "phosphor-react";
import { useHeroesData } from "../../data/hooks/useHeroData";
import { Hero } from "../../api";
import { useActivePlayer } from "../../hooks/useActivePlayer";

type Props = {
  initialName: string;
  number: number;
};

export const Player = ({ initialName, number }: Props) => {
  const query = useHeroesData();
  const heroes: Hero[] = useMemo(() => {
    return query.data ?? [];
  }, [query]);

  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  const { activePlayer } = useActivePlayer();

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
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
        {activePlayer === number ? (
          <CheckCircle size={32} />
        ) : (
          <XCircle size={32} />
        )}
        <Box>{activePlayer === number ? "Your turn" : "Not your turn"}</Box>
      </StyledPlayerDetails>
      {heroes.length === 0 && (
        <Typography variant="subtitle1">No heroes to display</Typography>
      )}
      {heroes.length > 0 && (
        <>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {[1, 2, 3].map((hero) => (
              <HeroCard key={hero} player={number} />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};
