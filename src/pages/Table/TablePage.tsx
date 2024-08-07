import React from "react";
import { ContentWrapper } from "./TablePage.styles";
import { Heroes } from "@/components";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import { theme } from "@/styles";

export const TablePage: React.FC = () => {
  return (
    <ContentWrapper>
      <Heroes />
      <Link
        component={RouterLink}
        to="/"
        sx={{
          margin: "auto",
          color: theme.palette.primary[700],
        }}
      >
        Back to the battle
      </Link>
    </ContentWrapper>
  );
};
