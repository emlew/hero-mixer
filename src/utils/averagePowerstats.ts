import { Hero, Powerstats } from "../api";

export const averagePowerstats = (heroes: (Hero | undefined)[]) => {
  const powerstatTotals: Powerstats = {
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0,
  };
  if (heroes.length === 0) return powerstatTotals;
  const length = heroes.filter((h) => h !== undefined).length;
  for (const hero of heroes) {
    powerstatTotals.intelligence += hero?.powerstats.intelligence ?? 0;
    powerstatTotals.strength += hero?.powerstats.strength ?? 0;
    powerstatTotals.speed += hero?.powerstats.speed ?? 0;
    powerstatTotals.durability += hero?.powerstats.durability ?? 0;
    powerstatTotals.power += hero?.powerstats.power ?? 0;
    powerstatTotals.combat += hero?.powerstats.combat ?? 0;
  }
  const avg: Powerstats = {
    intelligence: Math.round(powerstatTotals.intelligence / length),
    strength: Math.round(powerstatTotals.strength / length),
    speed: Math.round(powerstatTotals.speed / length),
    durability: Math.round(powerstatTotals.durability / length),
    power: Math.round(powerstatTotals.power / length),
    combat: Math.round(powerstatTotals.combat / length),
  };
  return avg;
};
