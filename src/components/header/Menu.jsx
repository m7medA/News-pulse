import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { NavLink } from "react-router-dom";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const queryClient = useQueryClient();

  const data = queryClient.getQueryData(["categories"]);

  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["category"],
  //   queryFn: getCategories,
  // });

  return (
    <div className="flex flex-col justify-center">
      {/* Right Side — Button Menu */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex justify-center gap-2 font-semibold hover:text-[var(--third-color)] transition-colors duration-300 cursor-pointer"
      >
        <span className="flex flex-col justify-center text-lg">
          <FaRegArrowAltCircleLeft className="text-xl" />
        </span>{" "}
        <span className="flex flex-col justify-center font-semibold">Menu</span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-48 sm:w-64 bg-white rounded-md shadow-lg z-50 transform transition-transform duration-300  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b-2 border-t-2 flex justify-between items-center">
          <h2 className="font-bold">Categories</h2>

          <button
            onClick={() => setIsOpen(false)}
            className="hover:text-[var(--third-color)] transition-colors duration-300 cursor-pointer"
          >
            <span>
              {" "}
              <GiCancel className="text-xl" />
            </span>
          </button>
        </div>
        <ul className="py-4 space-y-3">
          {data?.categories?.map((cat) => (
            <li key={cat} onClick={() => setIsOpen((open) => !open)}>
              <NavLink
                to={`/categorypage/${cat}`}
                className={({ isActive }) =>
                  `hover:border-l-4 border-[var(--third-color)] hover:text-[var(--third-color)] ${isActive ? "text-[var(--third-color)] border-l-4" : ""} px-4 transition-all duration-300 capitalize`
                }
              >
                {cat}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export default Menu;
