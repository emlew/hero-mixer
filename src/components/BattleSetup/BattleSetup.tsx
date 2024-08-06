import { StyledPlayers, StyledSetup } from "./BattleSetup.styles";
import { HeroForm } from "../HeroForm";
import { Player } from "../Player";

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
