import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useSelector } from "react-redux";

const Cards = () => {
  const pokemons = useSelector((state) => state.pokemons);

  return (
    <div className={style.container}>
      {pokemons && pokemons.length > 0 ? (
        pokemons?.map((poke) => {
          return (
            <Card
              key={poke.id}
              id={poke.id}
              name={poke.name}
              image={poke.image}
              height={poke.height}
              weight={poke.weight}
              hp={poke.hp}
              attack={poke.attack}
              defense={poke.defense}
              speed={poke.speed}
              types={poke.types}
            />
          );
        })
      ) : (
        <div />
      )}
    </div>
  );
};

export default Cards;
