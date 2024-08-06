import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { StyledPlayerDetails } from "./Player.styles";
import { CheckCircle, XCircle } from "phosphor-react";
import { useActivePlayer, usePlayerNames } from "../../hooks";

export const Player: React.FC<{ number: number }> = ({ number }) => {
  const { playerNames, changeName } = usePlayerNames();
  const [playerName, setPlayerName] = useState(playerNames[number - 1]);
  const [isEditing, setIsEditing] = useState(false);
  const { activePlayer } = useActivePlayer();

  const handleEditClick = () => {
    changeName(playerName, number);
    setIsEditing((prev) => !prev);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
    changeName(event.target.value, number);
  };

  let editablePlayerName = (
    <Typography variant="h4">{playerNames[number - 1]}</Typography>
  );

  if (isEditing) {
    editablePlayerName = (
      <TextField required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <StyledPlayerDetails>
      <Box className="player">{editablePlayerName}</Box>
      <Button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</Button>
      {activePlayer === number ? (
        <CheckCircle size={32} />
      ) : (
        <XCircle size={32} />
      )}
      {activePlayer === number ? "Your turn" : "Not your turn"}
    </StyledPlayerDetails>
  );
};
