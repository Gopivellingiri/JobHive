import { Link } from "react-router-dom";
import JobCard from "../../components/JobCard";
import { jobDetails } from "../../data/employerdata";

const HighLightedJobs = () => {
  const featuredJobs = jobDetails.filter(
    (feature) => feature?.isFeatured === true
  );
  console.log(featuredJobs);
  return (
    <div className="py-15">
      <div className="text-primary font-semibold pb-5">
        <h2 className="text-4xl leading-12 text-center sm:text-left">
          highlighted Positions:
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-4">
        {featuredJobs.map((jobs, i) => (
          <JobCard key={i} jobDetails={jobs} />
        ))}
      </div>
      <div className="py-10 text-center">
        <Link>
          <span className="text-xs sm:text-sm btn-primary">Find More Jobs</span>
        </Link>
      </div>
    </div>
  );
};

export default HighLightedJobs;
