import { Typography } from "@mui/material";
import { StyledBar, StyledBarWithLabel, StyledWrapper } from "./Stat.styles";

export const Stat: React.FC<{ label: string; value: number }> = ({
  label,
  value,
}) => {
  return (
    <StyledWrapper>
      <Typography>{label}</Typography>
      <StyledBarWithLabel>
        <StyledBar />
        <Typography>{value}</Typography>
      </StyledBarWithLabel>
    </StyledWrapper>
  );
};
