import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../../Pagination/Pagination";
import { setPage, setOrder } from "../../../redux/action";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTypes } from "../../../redux/action";


const Cards = () => {
  const types = useSelector((state) => state.types);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const pokemons = useSelector((state) => state.pokemons);
  const [pokemonType, setPokemonType] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const { thisPage, totalPages, itemsPerPage } = useSelector(
    (state) => state.pagination
  );

  const { pathname } = useLocation();

  const startIndex = (thisPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  let pokeCopy = pokemons ? [...pokemons] : [];

  switch (pokemonType) {
    case "API":
      pokeCopy = pokeCopy.filter((poke) => typeof poke.id === "number");
      break;
    case "DB":
      pokeCopy = pokeCopy.filter((poke) => typeof poke.id === "string");
      break;
    default:
      break;
  }

  const filteredPokemons = selectedType
    ? pokeCopy.filter((poke) => poke.types.includes(selectedType))
    : pokeCopy;

  const thisPagePokemons = filteredPokemons.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  const handleOrderChange = (event) => {
    const selectedOrder = event.target.value;
    dispatch(setOrder(selectedOrder));
  };

  const handleChange = (event) => {
    setPokemonType(event.target.value);
  };

  const handleChangeType = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <div className={style.container}>
      <select className={style.order} onChange={handleOrderChange}>
        <option value="A">A-Z Abc</option>
        <option value="Z">Z-A Abc</option>
        <option value="MAX">Max to Min Attack</option>
        <option value="MIN">Min to Max Attack</option>
      </select>

      <select
        className={style.filter}
        value={pokemonType}
        onChange={handleChange}
      >
        <option value="ALL">All</option>
        <option value="API">Vanilla</option>
        <option value="DB">User created</option>
      </select>

      {types && types.length > 0 && (
        <select
          className={style.filter}
          value={selectedType}
          onChange={handleChangeType}
        >
          {types.map((type) => (
            <option value={type.name} key={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      )}

      {thisPagePokemons && thisPagePokemons.length > 0 ? (
        thisPagePokemons.map((poke) => {
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
      {!pathname.includes("detail") && (
        <div className={style.pagination}>
          <Pagination
            thisPage={thisPage}
            totalPages={totalPages}
            pageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default Cards;
