import { MdOutlineDarkMode } from "react-icons/md";

function DarkMode() {
  return (
    <div className="flex flex-col justify-center">
      <MdOutlineDarkMode
        size={28}
        className="hover:text-[var(--primary-color)] cursor-pointer"
      />
    </div>
  );
}

export default DarkMode;
