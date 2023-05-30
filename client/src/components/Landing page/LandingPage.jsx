import Style from "./LandingPage.module.css";
import { NavLink } from "react-router-dom";

function LandingPage() {
  return (
    <div className={Style.container}>
      
      <NavLink to="/home" className={Style.button}>Welcome, click me to Start!</NavLink>
    </div>
  );
}

export default LandingPage;
