import React from "react";
import Heroes from "../components/Heroes";
import HeroesContextProvider from "../store/heroes-context";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const TablePage: React.FC = () => {
  return (
    <HeroesContextProvider>
      <Heroes />
      <Typography variant="body1">
        <Link to="/">Back to the battle</Link>
      </Typography>
    </HeroesContextProvider>
  );
};
