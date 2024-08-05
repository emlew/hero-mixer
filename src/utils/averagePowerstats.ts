import { Hero, Powerstats } from "../api";

export const averagePowerstats = (heroes: Hero[]) => {
    const powerstatTotals: Powerstats = {
      intelligence: 0,
      strength: 0,
      speed: 0,
      durability: 0,
      power: 0,
      combat: 0,
    };
    if (heroes.length === 0) return powerstatTotals;
    const length = heroes.length;
    for (const hero of heroes) {
      powerstatTotals.intelligence += hero.powerstats.intelligence;
      powerstatTotals.strength += hero.powerstats.strength;
      powerstatTotals.speed += hero.powerstats.speed;
      powerstatTotals.durability += hero.powerstats.durability;
      powerstatTotals.power += hero.powerstats.power;
      powerstatTotals.combat += hero.powerstats.combat;
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