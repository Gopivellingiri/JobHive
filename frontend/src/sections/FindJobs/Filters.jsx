import { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import ToggleButton from "./ToggleButton";
import { jobFilters } from "../../data/filter";
import { TbCategoryFilled } from "react-icons/tb";
import { IoMdArrowDropdown } from "react-icons/io";
import CategoryDropdown from "./CategoryDropDown.jsx";

const Filters = () => {
  const workFilter = jobFilters.find((f) => f.id === "workArrangement");
  const options = workFilter.options;
  const [selected, setSelected] = useState(options[0]);

  //job type
  const jobTypeFilter = jobFilters.find((f) => f.id === "jobType");
  const jobOptions = jobTypeFilter.options;

  // keep an array of selected job types
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);

  const toggleJobType = (opt) => {
    setSelectedJobTypes((prev) =>
      prev.includes(opt) ? prev.filter((x) => x !== opt) : [...prev, opt]
    );
  };

  //category
  const catFilter = jobFilters.find((f) => f.id === "category");
  const handleCategoryChange = (newCat) => {
    // e.g. save to state or push up to find-jobs page
    console.log("selected category:", newCat);
  };
  const ref = useRef();
  return (
    <div className="flex flex-col items-start w-full gap-5">
      <div className="flex items-center justify-between bg-white px-6 py-4 rounded-md shadow-2xl shadow-[#E6EBF3]/80 w-full">
        <h4 className="text-2xl font-semibold text-primary">Filters</h4>
        <button className="text-active text-sm sm:text-base font-semibold cursor-pointer">
          Clear all
        </button>
      </div>

      {/* location */}
      <div className="flex flex-col gap-4 bg-white px-6 py-4 rounded-md shadow-2xl shadow-[#E6EBF3]/80 w-full">
        <h4 className="text-2xl font-semibold text-primary">Location</h4>
        <div className="relative w-full">
          {/* 1. Search icon */}
          <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 text-xl z-10" />

          {/* 2. Vertical separator */}
          <div
            className="
            absolute left-10 top-1/2 h-6 border-1 border-l border-slate-400 -translate-y-1/2
          "
          />

          {/* 3. The input, with extra left padding */}
          <input
            type="text"
            className="w-full pl-12 pr-3 py-2
            bg-slate-100
            rounded-lg
            focus:outline-none focus:ring-2 focus:ring-teal-200
            placeholder:text-slate-600
          "
            placeholder="City, state, or country"
          />
        </div>{" "}
      </div>

      {/* work arrangements */}
      <div className="flex flex-col gap-4 bg-white px-6 py-4 rounded-md shadow-2xl shadow-[#E6EBF3]/80 w-full">
        <h4 className="text-2xl font-semibold text-primary">
          {workFilter.label}
        </h4>

        <div className="flex flex-col gap-4 items-center justify-between text-slate-500 w-full">
          {options.map((opt) => (
            <ToggleButton
              key={opt}
              label={opt}
              checked={selected === opt}
              onChange={(checked) => {
                if (checked) setSelected(opt);
              }}
            />
          ))}
        </div>
      </div>

      {/* job type */}
      <div className="flex flex-col gap-4 bg-white px-6 py-4 rounded-md shadow-2xl shadow-[#E6EBF3]/80 w-full">
        <h4 className="text-2xl font-semibold text-primary">
          {jobTypeFilter.label}
        </h4>
        <div className="flex flex-col gap-3">
          {jobOptions.map((opt) => (
            <label
              key={opt}
              className="flex items-center justify-between text-slate-700"
            >
              <span>{opt}</span>
              <input
                type="checkbox"
                checked={selectedJobTypes.includes(opt)}
                onChange={() => toggleJobType(opt)}
                className="h-4 w-4 rounded accent-black cursor-pointer"
              />
            </label>
          ))}
        </div>{" "}
      </div>

      {/* category */}
      <div
        className="flex flex-col gap-4 bg-white px-6 py-4 rounded-md shadow-2xl shadow-[#E6EBF3]/80 w-full "
        ref={ref}
      >
        <h4 className="text-2xl font-semibold text-primary">
          {catFilter.label}
        </h4>
        <CategoryDropdown
          options={catFilter.options}
          value={catFilter.options[0]}
          onChange={handleCategoryChange}
        />
      </div>
    </div>
  );
};

export default Filters;
