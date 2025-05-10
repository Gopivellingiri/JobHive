import { Link } from "react-router-dom";
import technova from "../assets/company_logos/technova.png";
import { MdOutlineAccessTime } from "react-icons/md";

const jobDetails = {
  id: 1,
  title: "Frontend Developer",
  company: {
    name: "TechNova",
    logo: technova,
    about:
      "TechNova is an AI-driven SaaS startup on a mission to simplify enterprise workflows. Founded in 2018, we’re a team of 50+ across Bangalore and Pune.",
    website: "https://technova.io",
    industry: "SaaS / Enterprise Software",
    size: "50–100 employees",
    headquarters: "Bangalore, India",
  },
  location: "Bangalore, India",
  type: "Full Time",
  level: "Mid Level",
  salary: "₹10L – ₹15L",
  isRemote: true,
  postedDate: "2025-05-01",
  applyLink: "https://technova.io/careers/1234",
  description: `
    We’re looking for a passionate Frontend Developer to join our product team.
    You’ll build and maintain responsive web interfaces using React and Tailwind,
    collaborate with designers, and integrate with our Node.js APIs.
  `,
  applicants: 23,
  responsibilities: [
    "Develop and maintain React components",
    "Optimize UI for performance and accessibility",
    "Collaborate with UX/UI designers on new features",
    "Write unit and integration tests",
  ],
  requirements: [
    "3+ years of professional React experience",
    "Strong CSS/Tailwind skills",
    "Familiarity with RESTful APIs",
    "Good communication and problem-solving skills",
  ],
  benefits: [
    "Health insurance",
    "Flexible working hours",
    "Work-from-home stipend",
    "Annual team retreats",
  ],
};

const truncateDiscription = (text, size) => {
  if (text.length > size) {
    return text.slice(0, size) + "...";
  }
};

const JobCard = ({ jobDetails }) => {
  const entryLevel = jobDetails?.level === "Entry Level";
  const midLevel = jobDetails?.level === "Mid Level";

  const onSite = jobDetails?.isRemote === true;

  return (
    <Link to={`/job-details/${jobDetails?.id}`}>
      <div className="px-4 py-6 bg-white border-2 border-color rounded-xl min-h-[320px]">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-md bg-logo p-1.5 overflow-hidden">
            <img
              className="w-full h-full "
              src={jobDetails?.company?.logo}
              alt=""
            />
          </div>
          <div>
            <h5 className="text-base  text-primary sm:text-xl font-semibold">
              {jobDetails?.title}
            </h5>
            <div className="flex items-center gap-2 text-xs sm:text-base text-slate-500">
              <span className=" font-medium">{jobDetails?.company?.name}</span>
              <span className="">•</span>
              <span className="  font-medium">
                {jobDetails?.applicants} Applicants
              </span>
            </div>
          </div>
        </div>
        <div className="my-5 text-sm sm:text-base font-semibold flex items-center gap-2">
          <span
            className={`px-2 py-2 rounded-md ${
              entryLevel
                ? "bg-green-100 text-green-700"
                : midLevel
                ? "bg-cyan-100 text-cyan-600"
                : "bg-red-100 text-red-500"
            } `}
          >
            {jobDetails?.level}
          </span>
          <span className="px-2 py-2 rounded-md bg-purple-100 text-purple-700">
            {jobDetails?.type}
          </span>
          <span
            className={`px-2 py-2 rounded-md ${
              !onSite
                ? "bg-blue-50 text-blue-500"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {jobDetails?.workArrangements}
          </span>
        </div>
        <div className="text-sm sm:text-base text-slate-500 font-medium">
          <p>{truncateDiscription(jobDetails?.company?.about, 100)}</p>
        </div>
        <div className="my-5">
          <hr className="border border-color" />
        </div>
        <div className="flex items-center justify-between text-sm sm:text-base font-semibold">
          <span className="text-slate-500">
            <b className="text-primary">{jobDetails?.salary} </b> / annum
          </span>

          <span className="flex items-center gap-2 text-primary">
            <MdOutlineAccessTime />3 days ago
          </span>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
