// src/components/Pagination.jsx

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Pagination = ({ page, pageCount, onPageChange, className = "" }) => {
  return (
    <nav className={`flex justify-center items-center gap-2  ${className}`}>
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="flex items-center justify-center h-10 w-10   rounded border-2 border-slate-600 disabled:opacity-50 cursor-pointer"
      >
        <MdKeyboardArrowLeft className="h-8 w-8" />
      </button>

      {Array.from({ length: pageCount }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => onPageChange(i + 1)}
          className={`flex items-center justify-center h-10 w-10 overflow-hidden p-2 font-semibold rounded cursor-pointer ${
            page === i + 1
              ? "bg-teal-500 shadow-lg shadow-teal-200 text-white"
              : "bg-slate-800 text-white"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === pageCount}
        className="flex items-center justify-center h-10 w-10 border-2 border-slate-600 rounded disabled:opacity-50 cursor-pointer"
      >
        <MdKeyboardArrowRight className="h-8 w-8" />
      </button>
    </nav>
  );
};

export default Pagination;
