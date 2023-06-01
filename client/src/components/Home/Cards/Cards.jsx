import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useSelector } from "react-redux";

function Cards() {
  const pokemons = useSelector((state) => state.pokemons);
  return (
    <div className={style.container}>
      {pokemons.map((poke) => {
        return (
          <Card
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
      })}
    </div>
  );
}

export default Cards;
