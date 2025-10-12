import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CategoriesList from "./header/CategoriesList";

function DropList({ label, list }) {
  const [isOpen, setIsOpen] = useState();

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setIsOpen((open) => !open)}
        className="cursor-pointer flex items-center gap-2 px-4 py-2 font-semibold  border rounded-md shadow-sm hover:text-[var(--primary-color)] hover:border-[var(--primary-color)] transition-all duration-300 ease-in-out"
      >
        {label}
        {isOpen ? (
          <IoIosArrowUp className="text-[var(--primary-color)]" />
        ) : (
          <IoIosArrowDown className="text-[var(--primary-color)]" />
        )}
      </button>

      {/* DropList */}
      {isOpen && <CategoriesList categories={list} />}
    </div>
  );
}

export default DropList;
