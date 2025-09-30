import { NavLink } from "react-router-dom";

import VectorLogo from "../assets/VectorLogo.png";
import HeaderUtilityBar from "../components/header/HeaderUtilityBar";
import MainNav from "../components/header/MainNav";

function Header() {
  return (
    <header className="layout">
      <HeaderUtilityBar />

      <div className="border-b-2 py-4 md:py-6 flex justify-center">
        <NavLink to="/">
          <img
            src={VectorLogo}
            alt="Logo"
            className="w-48 sm:w-64 lg:w-4/5 mx-auto"
          />
        </NavLink>
      </div>

      <div className="hidden md:block py-2 border-b-4">
        <MainNav />
      </div>
    </header>
  );
}

export default Header;
