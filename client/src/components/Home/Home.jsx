import Cards from "./Cards/Cards";
import Style from "./Home.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/action";

function Home() {

const dispatch = useDispatch();

  useEffect(() => {
  dispatch(getPokemons());  
  
  }, []);

  return (
    <div className={Style.container}>
      <h1 className={Style.home}>Home</h1>
      <Cards></Cards>
    </div>
  );
}

export default Home;
