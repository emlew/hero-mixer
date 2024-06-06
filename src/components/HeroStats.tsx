import Hero from "../models/hero";

const HeroStats: React.FC<{ hero: Hero }> = (props) => {
  return (
    <li>
      {props.hero.name}: {props.hero.powerstats.intelligence}{" "}
      {props.hero.powerstats.strength} {props.hero.powerstats.speed}{" "}
      {props.hero.powerstats.durability} {props.hero.powerstats.power}{" "}
      {props.hero.powerstats.combat}
    </li>
  );
};

export default HeroStats;
