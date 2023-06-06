import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../../Pagination/Pagination";
import { setPage } from "../../../redux/action";
import { useLocation } from 'react-router-dom';

const Cards = () => {
  const pokemons = useSelector((state) => state.pokemons);

  const dispatch = useDispatch();
  const { thisPage, totalPages, itemsPerPage } = useSelector(
  (state) => state.pagination);
  
  const { pathname } = useLocation();

  const startIndex = (thisPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const thisPagePokemons = pokemons.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  }

  return (
    <div className={style.container}>


      {thisPagePokemons && thisPagePokemons.length > 0 ? (
        thisPagePokemons?.map((poke) => {
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
            { !pathname.includes('detail') &&
                <div className={ style.pagination }>
                    <Pagination
                        thisPage={thisPage}
                        totalPages={totalPages}
                        pageChange={handlePageChange}
                    />
                </div>
            }

    </div>
  );


};

export default Cards;
