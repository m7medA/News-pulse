import HeaderUtilityBar from "../components/header/HeaderUtilityBar";
import MainNav from "../components/header/MainNav";
import Logo from "../components/Logo";

function Header() {
  return (
    <header
      className="text-[var(--accent-color)] bg-white dark:bg-stone-950 
  shadow-sm border-b border-[var(--accent-color)]"
    >
      {/* 🔹 Top Utility Bar  */}
      <HeaderUtilityBar />

      {/* 🔸 Logo Section */}
      <div className="border-t border-b border-[var(--accent-color)] flex justify-center bg-white dark:bg-stone-950">
        <Logo />
      </div>

      {/* 🔸 Main Navigation */}
      <div className="hidden md:block py-3 border-t border-[var(--accent-color)] bg-gray-50/70 dark:bg-stone-900">
        <MainNav />
      </div>
    </header>
  );
}

export default Header;
