import DateItem from "../DateItem";
import DarkMode from "./DarkMode";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import UserInfo from "./UserInfo";

function HeaderUtilityBar() {
  return (
    <div
      className="border-t border-b border-[var(--accent-color)]
  flex flex-row flex-wrap items-center justify-between gap-3 lg:gap-4 
  py-3 px-4 bg-white shadow-sm"
    >
      {/* 🗓️ Date Section */}
      <div className=" lg:w-auto flex justify-center lg:justify-start">
        <DateItem />
      </div>

      {/* 🔍 SearchBar */}
      <div className="order-3 lg:order-none w-full lg:w-[60%] flex justify-center">
        <SearchBar />
      </div>

      {/* 👤 Actions (User, DarkMode, Menu) */}
      <div className="flex justify-center lg:justify-end items-center gap-5 md:gap-7 lg:w-auto">
        <UserInfo />
        <DarkMode />
        <Menu />
      </div>
    </div>
  );
}

export default HeaderUtilityBar;
