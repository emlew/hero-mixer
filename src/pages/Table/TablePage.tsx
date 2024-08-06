import React from "react";
import { Heroes } from "../../components";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ContentWrapper } from "./TablePage.styles";

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
