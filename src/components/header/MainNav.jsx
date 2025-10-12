import { NavLink } from "react-router-dom";

function MainNav() {
  const categories = [
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <ul
      className="flex flex-wrap items-center justify-evenly gap-3 md:gap-6 
  w-[96%] lg:w-[80%] mx-auto py-2 text-[var(--text-main)] font-semibold"
    >
      {/* 🏠 General */}
      <li className="categoriesLink transition-all duration-300">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `capitalize px-3 py-1.5 rounded-md transition-all duration-300
         ${isActive ? "text-[var(--primary-color)] font-semibold bg-[var(--primary-color)]/10" : "hover:text-[var(--primary-color)]"}`
          }
        >
          home
        </NavLink>
      </li>

      {/* 🗂️ Other Categories */}
      {categories?.map((cat) => (
        <li key={cat} className="categoriesLink transition-all duration-300">
          <NavLink
            to={`/categorypage/${cat}`}
            className={({ isActive }) =>
              `capitalize px-3 py-1.5 rounded-md transition-all duration-300
           ${isActive ? "text-[var(--primary-color)] font-semibold bg-[var(--primary-color)]/10" : "hover:text-[var(--primary-color)]"}`
            }
          >
            {cat}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default MainNav;
