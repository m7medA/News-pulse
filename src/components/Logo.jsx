import { NavLink } from "react-router-dom";
import newsPulseLightMode from "../assets/newsPulse-lightMode.svg";

function Logo() {
  return (
    <NavLink to="/" className="">
      <img src={newsPulseLightMode} alt="Logo" className="w-64 mx-auto" />
    </NavLink>
  );
}

export default Logo;
