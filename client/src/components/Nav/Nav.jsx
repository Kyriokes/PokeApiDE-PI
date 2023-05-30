import Style from "./Nav.module.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className={Style.container}>
      
      <NavLink to="/home" className={Style.link}>Home</NavLink>
      <NavLink to="/form" className={Style.link}>Create Pokemon</NavLink>
    </div>
  );
}

export default Nav;
