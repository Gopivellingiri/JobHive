import React from "react";
import { IoLocation, IoSearch } from "react-icons/io5";

const JobSearchBar = () => {
  return (
    <div
      className={`flex items-center bg-white rounded-full shadow-lg  shadow-purple-100 overflow-hidden `}
    >
      {/* 1) Keyword field */}
      <div className="flex items-center px-4 space-x-2 flex-1">
        <div className="text-xl">
          <IoSearch className="text-muted text-2xl" />
        </div>
        <input
          type="text"
          placeholder="Job Title"
          className="input-with-muted-placeholder"
        />
      </div>

      {/* 2) Location field */}
      <div className="flex items-center px-4 space-x-2 flex-1">
        <div className="text-xl">
          <IoLocation className="text-muted" />
        </div>
        <input
          type="text"
          placeholder="Location"
          className="input-with-muted-placeholder"
        />
      </div>

      {/* 3) Find button */}
      <button className="btn-primary md:text-base text-sm mr-2">Find</button>
    </div>
  );
};

export default JobSearchBar;
