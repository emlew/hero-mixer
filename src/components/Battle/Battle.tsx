import { Typography } from "@mui/material";
import { usePlayerNames } from "../../hooks";

export const Battle: React.FC = () => {
  const { playerNames } = usePlayerNames();

  return <Typography>{playerNames[0] + " vs " + playerNames[1]}</Typography>;
};
