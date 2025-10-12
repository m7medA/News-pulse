import { NavLink } from "react-router-dom";

function CategoryItem({ category }) {
  return (
    <li>
      <NavLink
        to={`/categorypage/${category}`}
        className={({ isActive }) =>
          `block px-4 py-2 rounded-md capitalize transition-all duration-300 ease-in-out 
      ${
        isActive
          ? "text-[var(--primary-color)] font-semibold bg-[var(--primary-color)]/10 border-l-4 border-[var(--primary-color)]"
          : "hover:text-[var(--primary-color)] hover:bg-stone-50"
      }`
        }
      >
        {category}
      </NavLink>
    </li>
  );
}

export default CategoryItem;
