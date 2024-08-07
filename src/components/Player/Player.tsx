import { usePlayerNames, useActivePlayer } from "@/hooks";
import { Typography, Button } from "@mui/material";
import { useState } from "react";
import {
  StyledTextField,
  StyledPlayerDetails,
  StyledEditableName,
  StyledTurnIndicator,
} from "./Player.styles";
import { CheckCircle, XCircle } from "phosphor-react";

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
      <StyledTextField required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <StyledPlayerDetails>
      <StyledEditableName>
        {editablePlayerName}
        <Button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</Button>
      </StyledEditableName>
      <StyledTurnIndicator>
        {activePlayer === number ? (
          <CheckCircle size={32} />
        ) : (
          <XCircle size={32} />
        )}
        {activePlayer === number ? "Your turn" : "Not your turn"}
      </StyledTurnIndicator>
    </StyledPlayerDetails>
  );
};
