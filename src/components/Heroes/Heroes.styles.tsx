import { theme } from "@/styles";
import styled from "@emotion/styled";
import { TableContainer, Typography } from "@mui/material";

export const StyledTableContainer = styled(TableContainer)({
  height: "60vh",
  boxShadow: "none",
  border: `${theme.palette.common.black} solid 1px`,
  borderRadius: "8px",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export const StyledTableTitle = styled(Typography)({
  padding: "0px 12px",
});
