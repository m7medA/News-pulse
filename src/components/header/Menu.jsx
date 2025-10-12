import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

import { HiMiniBars3BottomRight } from "react-icons/hi2";
import CategoriesList from "./CategoriesList";
import DropList from "../DropList";
import { NavLink } from "react-router-dom";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const { role } = useAuth();

  const categories = [
    "business",
    "entertainment",

    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <div className="group relative flex flex-col justify-center hover:text-[var(--primary-color)] transition-colors duration-300 cursor-pointer">
      {/*Button Menu */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex justify-center gap-2 font-semibold hover:text-[var(--primary-color)] transition-colors duration-300 cursor-pointer"
      >
        <span className="flex flex-col justify-center text-lg">
          <HiMiniBars3BottomRight
            className="hover:text-[var(--primary-color)]"
            size={28}
          />
        </span>{" "}
      </button>

      <div
        className="absolute top-[100%] right-0 mt-3 w-[220px] md:w-[260px]
     bg-white shadow-xl rounded-xl p-3 md:p-4 text-sm text-stone-700
     opacity-0 group-hover:opacity-100 -z-10 group-hover:z-10
     transition-all duration-300 ease-in-out border border-stone-200
     font-medium flex flex-col gap-2"
      >
        {/* 🏠 Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-white ${
              isActive
                ? "text-[var(--primary-color)] font-semibold border-l-4 border-[var(--primary-color)] bg-[var(--primary-color)]/5"
                : ""
            }`
          }
        >
          Home
        </NavLink>

        {/* 📂 Categories */}
        <div className="px-3 py-2 hover:bg-stone-50 rounded-md transition-colors duration-300">
          <DropList label="Categories" list={categories} />
        </div>

        {/* 👤 User Info */}
        <NavLink
          to="/userinfo"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-white ${
              isActive
                ? "text-[var(--primary-color)] font-semibold border-l-4 border-[var(--primary-color)] bg-[var(--primary-color)]/5"
                : ""
            }`
          }
        >
          User Info
        </NavLink>

        {/* ℹ️ About Us */}
        <NavLink
          to="/aboutus"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-white ${
              isActive
                ? "text-[var(--primary-color)] font-semibold border-l-4 border-[var(--primary-color)] bg-[var(--primary-color)]/5"
                : ""
            }`
          }
        >
          About Us
        </NavLink>
      </div>
    </div>
  );
}

export default Menu;
