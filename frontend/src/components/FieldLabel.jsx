import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const FieldLabel = ({ categories }) => {
  const { name, count, icon: Icon } = categories;
  return (
    <Link>
      <div className="relative group w-[220px] overflow-visible">
        {/* Pill itself can still hide text overflow */}
        <div className="bg-white flex items-center gap-2 px-4 py-2 rounded-full text-primary overflow-hidden">
          <span className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-light-purple">
            <Icon className="text-3xl" />{" "}
          </span>

          {/* Text container */}
          <div className="flex-1 flex flex-col space-y-1 overflow-hidden">
            <span className="truncate text-base sm:text-xl font-semibold">
              {name}
            </span>
            <span className="truncate text-xs sm:text-sm text-muted">
              {count} jobs
            </span>
          </div>

          <span className="flex-shrink-0 text-2xl">
            <MdOutlineKeyboardArrowRight />
          </span>
        </div>

        {/* Tooltip: absolutely positioned in the overflow-visible parent */}
        <div
          className="
        pointer-events-none
        absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
        bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap
        opacity-0 group-hover:opacity-100 transition-opacity
        z-10
      "
        >
          {categories.name}
          <div
            className="
          absolute top-full left-1/2 transform -translate-x-1/2
          w-2 h-2 bg-gray-900 rotate-45
        "
          />
        </div>
      </div>
    </Link>
  );
};
export default FieldLabel;
