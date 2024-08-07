import { StyledPlayers, StyledSetup } from "./BattleSetup.styles";
import { Player } from "../Player";
import { HeroForm } from "../HeroForm";

export const BattleSetup: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <StyledSetup>
      <StyledPlayers>
        <Player number={1} />
        <Player number={2} />
      </StyledPlayers>
      <HeroForm onStart={onStart} />
    </StyledSetup>
  );
};
