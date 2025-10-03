import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <aside className="h-full rounded-r-md w-48 lg:w-56 bg-stone-100 border-2 border-black  flex flex-col py-4">
      <h2 className="text-lg md:text-2xl font-bold px-4 mb-6 third-color">
        Admin Panel
      </h2>
      <nav className="flex flex-col gap-2 px-2">
        <NavLink
          to="/adminpage/homedashboard"
          className={({
            isActive,
          }) => `flex items-center gap-3 px-4 py-2 text-sm md:text-base rounded-md hover:text-white hover:bg-[var(--third-color)] transition-all duration-300
              ${isActive ? "bg-[var(--third-color)] font-semibold text-white" : " "}`}
        >
          Home Dashboard
        </NavLink>

        <NavLink
          to="/adminpage/articlesdashboard"
          className={({
            isActive,
          }) => `flex items-center gap-3 px-4 py-2 rounded-md hover:text-white hover:bg-[var(--third-color)] transition-all duration-300
              ${isActive ? "bg-[var(--third-color)] font-semibold text-white" : " "}`}
        >
          Articles
        </NavLink>

        <NavLink
          to="/adminpage/authordashboard"
          className={({
            isActive,
          }) => `flex items-center gap-3 px-4 py-2 rounded-md hover:text-white hover:bg-[var(--third-color)] transition-all duration-300
              ${isActive ? "bg-[var(--third-color)] font-semibold text-white" : " "}`}
        >
          Author
        </NavLink>
      </nav>
    </aside>
  );
}

export default SideBar;
