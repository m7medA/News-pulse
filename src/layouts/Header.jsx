import HeaderUtilityBar from "../components/header/HeaderUtilityBar";
import MainNav from "../components/header/MainNav";
import Logo from "../components/Logo";

function Header() {
  return (
    <header
      className="text-[var(--accent-color)]
  shadow-sm border-b border-[var(--accent-color)]"
    >
      {/* 🔹 Top Utility Bar  */}
      <HeaderUtilityBar />

      {/* 🔸 Logo Section */}
      <div className="border-t border-b border-[var(--accent-color)] flex justify-center ">
        <Logo />
      </div>

      {/* 🔸 Main Navigation */}
      <div className="hidden md:block py-3 border-t border-[var(--accent-color)] ">
        <MainNav />
      </div>
    </header>
  );
}

export default Header;
