import { Typography } from "@mui/material";
import { ContentWrapper, StyledHeader } from "./BattlePage.styles";
import { useState } from "react";
import { Battle, BattleSetup } from "@/components";

export const BattlePage: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted((prev) => !prev);
  };

  return (
    <>
      <StyledHeader>
        <Typography variant="h2">HeroMixer</Typography>
        <Typography variant="subtitle1">
          Mix, match, and battle superheroes
        </Typography>
      </StyledHeader>
      <ContentWrapper>
        {isStarted ? <Battle /> : <BattleSetup onStart={handleStart} />}
      </ContentWrapper>
    </>
  );
};
