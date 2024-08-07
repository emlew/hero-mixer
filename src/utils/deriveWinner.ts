import { Hero } from "../api";
import { averagePowerstats } from "./averagePowerstats";

export const deriveWinner = (
  playerOne: (Hero | undefined)[],
  playerTwo: (Hero | undefined)[]
) => {
  const playerOneAvg = averagePowerstats(playerOne);
  const playerOneOverall =
    (playerOneAvg.intelligence +
      playerOneAvg.strength +
      playerOneAvg.speed +
      playerOneAvg.durability +
      playerOneAvg.power +
      playerOneAvg.combat) /
    6;
  const playerTwoAvg = averagePowerstats(playerTwo);
  const playerTwoOverall =
    (playerTwoAvg.intelligence +
      playerTwoAvg.strength +
      playerTwoAvg.speed +
      playerTwoAvg.durability +
      playerTwoAvg.power +
      playerTwoAvg.combat) /
    6;
  if (playerOneOverall > playerTwoOverall) return 1;
  if (playerOneOverall < playerTwoOverall) return 2;
  return 0;
};
