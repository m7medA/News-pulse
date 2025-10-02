import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { getCategories } from "../../services/newsServices";

function MainNav() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading)
    return <p className="third-color text-center font-semibold">Loading...</p>;

  const { categories } = data;

  return (
    <ul className="md:flex w-[96%] lg:w-[80%] justify-between md:justify-evenly mx-auto">
      {categories &&
        categories.map((cat) => (
          <li className="categoriesLink" key={cat}>
            <NavLink
              to={`/categorypage/${cat}`}
              className={({ isActive }) =>
                `${isActive ? "third-color font-bold" : ""} capitalize`
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
