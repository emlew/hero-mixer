import Hero from "../models/hero";
import HeroStats from "./HeroStats";

const Heroes: React.FC<{ heroes: Hero[]; isLoading: boolean }> = (props) => {
  return (
    <section>
      <h2>Heroes</h2>
      {props.isLoading && <p>Fetching heroes...</p>}
      {!props.isLoading && props.heroes.length === 0 && (
        <p>No heroes to display</p>
      )}
      {!props.isLoading && props.heroes.length > 0 && (
        <ul>
          {props.heroes.map((hero) => {
            return <HeroStats key={hero.id} hero={hero} />;
          })}
        </ul>
      )}
    </section>
  );
};

export default Heroes;
