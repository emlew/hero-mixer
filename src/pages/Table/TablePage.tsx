import React from "react";
import { Heroes } from "../../components";
import HeroesContextProvider from "../../store/heroes-context";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ContentWrapper } from "./TablePage.styles";

export const TablePage: React.FC = () => {
  return (
    <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
      <HeroesContextProvider>
        <ContentWrapper>
          <Heroes />
          <Typography variant="body1">
            <Link to="/">Back to the battle</Link>
          </Typography>
        </ContentWrapper>
      </HeroesContextProvider>
    </Box>
  );
};
