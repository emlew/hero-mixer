import { StyledPlayers, StyledSetup } from "./BattleSetup.styles";
import { Player } from "../Player";
import { HeroForm } from "../HeroForm";
import { useState } from "react";

export const BattleSetup: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  const [isReady, setIsReady] = useState(false);

  return (
    <StyledSetup>
      <StyledPlayers>
        <Player number={1} hideTurnIndicator={isReady} />
        <Player number={2} hideTurnIndicator={isReady} />
      </StyledPlayers>
      <HeroForm onStart={onStart} onReady={() => setIsReady(true)} />
    </StyledSetup>
  );
};
