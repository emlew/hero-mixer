import { Box, Typography } from "@mui/material";
import { HeroCards } from "../../components";
import HeroesContextProvider from "../../store/heroes-context";
import { Link } from "react-router-dom";
import { ContentWrapper, StyledHeader } from "./BattlePage.styles";

export const BattlePage: React.FC = () => {
  return (
    <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
      <StyledHeader>
        <Typography variant="h2">HeroMixer</Typography>
        <Typography variant="subtitle1">
          Mix, match, and battle superheroes
        </Typography>
      </StyledHeader>
      <HeroesContextProvider>
        <ContentWrapper>
          <HeroCards />
          <Typography variant="body1">
            Go to <Link to="/heroes">the hero table</Link>
          </Typography>
        </ContentWrapper>
      </HeroesContextProvider>
    </Box>
  );
};
