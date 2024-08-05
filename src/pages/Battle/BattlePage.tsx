import { Typography } from "@mui/material";
import { BattleSetup } from "../../components";
import { ContentWrapper, StyledHeader } from "./BattlePage.styles";

export const BattlePage: React.FC = () => {
  return (
    <>
      <StyledHeader>
        <Typography variant="h2">HeroMixer</Typography>
        <Typography variant="subtitle1">
          Mix, match, and battle superheroes
        </Typography>
      </StyledHeader>
      <ContentWrapper>
        <BattleSetup />
      </ContentWrapper>
    </>
  );
};
