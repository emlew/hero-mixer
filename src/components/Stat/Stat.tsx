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
        <StyledBar variant="determinate" value={value} />
        <Typography>{value}</Typography>
      </StyledBarWithLabel>
    </StyledWrapper>
  );
};
