import Style from "./LandingPage.module.css";
import { NavLink } from "react-router-dom";
import pokeBanner from "../../img/pokeBannerGimp.png"

function LandingPage() {
  return (
    <div className={Style.container}>
      <div className={Style.childtobody}>
        <img className={Style.img} src={pokeBanner} width="250" alt="" />
        <NavLink to="/home" className={Style.poke_box}>
          <div className={Style.pokeball}>
            <div className={Style.pokeball__button}></div>
            {/* <NavLink to="/home" className={Style.button}>Welcome, click me to Start!</NavLink> */}
          </div>
          </NavLink>
        <p className={Style.clickMe}>Click on the pokéball to start!</p>
      </div>
    </div>
  );
}

export default LandingPage;
