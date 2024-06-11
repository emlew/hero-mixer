import React from "react";
import Heroes from "../Heroes";
import HeroesContextProvider from "../../store/heroes-context";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const TablePage: React.FC = () => {
  return (
    <HeroesContextProvider>
      <Heroes />
      <Typography variant="body1">
        <Link to="/">Back to the battle</Link>
      </Typography>
    </HeroesContextProvider>
  );
};

export default TablePage;
