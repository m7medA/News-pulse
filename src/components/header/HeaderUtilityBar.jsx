import getFormattedDate from "../../utils/getFormattedDate";
import { AiOutlineGlobal } from "react-icons/ai";
import SearchBar from "./SearchBar";
import Menu from "./Menu";

function HeaderUtilityBar() {
  return (
    <div className="border-t-2 border-b-2 border-black flex justify-between flex-wrap lg:flex-nowrap py-2 px-2">
      <div className="flex flex-row justify-center py-2 gap-2 font-semibold text-sm md:text-base">
        <span className="flex flex-col justify-center">
          <AiOutlineGlobal className="lg:text-2xl third-color" />
        </span>

        <span className="flex flex-col justify-center">
          {getFormattedDate()}
        </span>
      </div>

      <div className="order-3 lg:order-0 w-full lg:w-[64%] flex justify-center py-1">
        <SearchBar />
      </div>

      <div className="flex flex-col justify-center">
        <Menu />
      </div>
    </div>
  );
}

export default HeaderUtilityBar;
