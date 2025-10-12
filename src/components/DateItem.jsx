import { AiOutlineGlobal } from "react-icons/ai";
import getFormattedDate from "../utils/getFormattedDate";

function DateItem() {
  return (
    <div className="flex flex-row justify-center py-2 gap-2 font-semibold text-xs md:text-base">
      <span className="flex flex-col justify-center">
        <AiOutlineGlobal className="text-[var(--primary-color)]" size={28} />
      </span>

      <span className="flex flex-col justify-center font-semibold">
        {getFormattedDate()}
      </span>
    </div>
  );
}

export default DateItem;
