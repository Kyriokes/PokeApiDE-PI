import Cards from "./Cards/Cards";
import Style from "./Home.module.css";

function Home() {
  return (
    <div className={Style.container}>
      <h1 className={Style.home}>Home</h1>
      <Cards></Cards>
    </div>
  );
}

export default Home;
