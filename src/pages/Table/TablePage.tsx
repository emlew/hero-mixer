import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ContentWrapper } from "./TablePage.styles";
import { Heroes } from "@/components";

export const TablePage: React.FC = () => {
  return (
    <ContentWrapper>
      <Heroes />
      <Typography variant="body1">
        <Link to="/">Back to the battle</Link>
      </Typography>
    </ContentWrapper>
  );
};
