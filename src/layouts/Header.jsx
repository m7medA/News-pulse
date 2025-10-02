import HeaderUtilityBar from "../components/header/HeaderUtilityBar";
import MainNav from "../components/header/MainNav";
import Logo from "../components/Logo";

function Header() {
  return (
    <header className="">
      <HeaderUtilityBar />

      <div className="border-b-2 py-4 md:py-6 flex justify-center">
        <Logo />
      </div>

      <div className="hidden md:block py-2 border-b-4">
        <MainNav />
      </div>
    </header>
  );
}

export default Header;
