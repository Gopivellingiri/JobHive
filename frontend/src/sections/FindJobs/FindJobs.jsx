import { FaFilter } from "react-icons/fa";
import { jobDetails } from "../../data/employerdata";
import JobCard from "../../components/JobCard";
import Pagination from "./Pagination";
import { useState } from "react";
import Filters from "./Filters";

const FindJobs = () => {
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const pageCount = Math.ceil(jobDetails.length / pageSize);

  // Pick only the jobs for the current page
  const visibleJobs = jobDetails.slice((page - 1) * pageSize, page * pageSize);
  return (
    <div>
      <div className="sm:hidden flex items-center gap-3 w-full">
        {/* 1:1 square, always 2.5rem × 2.5rem, perfectly round */}
        <div className="flex-none w-10 aspect-square rounded-full border-2 border-slate-600 flex items-center justify-center cursor-pointer sm:hidden">
          <FaFilter className="w-5 h-5 text-slate-600" />
        </div>
        <div>
          <input
            type="text"
            className="flex-1 min-w-0 w-full px-3 py-2
        border-2 border-color
        rounded-full focus:ring-4 focus:outline-none focus:ring-teal-100 focus:border-transparent focus:ring-offset-3 focus:ring-offset-teal-200 placeholder:text-slate-600 sm:hidden "
            placeholder="Search by city"
          />
        </div>
      </div>
      <div className="flex sm:items-center gap-14 ">
        <div className="hidden sm:block w-[420px] h-[80vh] overflow-y-scroll px-2">
          <Filters />
        </div>
        <div className="py-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-w-0 w-full h-[80vh] overflow-y-scroll px-2">
          {visibleJobs.map((job) => (
            <JobCard key={job.id} jobDetails={job} />
          ))}
        </div>{" "}
      </div>
      <div className="pb-10 ">
        <Pagination
          page={page}
          pageCount={pageCount}
          onPageChange={setPage}
          className={"mt-6"}
        />
      </div>
    </div>
  );
};

export default FindJobs;
