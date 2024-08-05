import { Box, Typography, LinearProgress } from "@mui/material";

export const StatWithLabel: React.FC<{ label: string; value: number }> = ({
  label,
  value,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "30vw",
        alignItems: "center",
      }}
    >
      <Typography>{label}</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <LinearProgress
          sx={{ width: "10vw" }}
          variant="determinate"
          value={value}
        />
        <Typography>{value}</Typography>
      </Box>
    </Box>
  );
};
