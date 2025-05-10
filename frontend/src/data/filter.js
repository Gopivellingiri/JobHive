export const jobFilters = [
  {
    id: "keyword",
    label: "Keyword",
    type: "text", // a simple text input
    placeholder: "Search by title, skill, or company",
  },
  {
    id: "location",
    label: "Location",
    type: "autocomplete", // e.g. react‐places or custom dropdown
    placeholder: "City, state, or country",
  },
  {
    id: "workArrangement",
    label: "Work Arrangement",
    type: "chips", // pill‐style toggle buttons
    options: ["On-Site", "Remote", "Hybrid"],
  },
  {
    id: "jobType",
    label: "Job Type",
    type: "chips",
    options: ["Full-Time", "Part-Time", "Contract", "Internship"],
  },
  {
    id: "category",
    label: "Category",
    type: "chips",
    options: [
      "Development",
      "Design",
      "Marketing",
      "Sales",
      "Finance",
      "Support",
      "HR / Hiring",
      "Content Writing",
    ],
  },
  {
    id: "experience",
    label: "Experience Level",
    type: "chips",
    options: ["Entry", "Mid", "Senior"],
  },
  {
    id: "salary",
    label: "Salary Range",
    type: "range", // a two-thumb slider
    min: 0,
    max: 5000000,
    step: 50000,
  },
  {
    id: "datePosted",
    label: "Date Posted",
    type: "dropdown",
    options: ["Last 24 hours", "Last 7 days", "Last 30 days"],
  },
  {
    id: "skills",
    label: "Required Skills",
    type: "multiSelect", // for your tags/skills list
    options: ["React", "Node.js", "SEO", "Photoshop" /*…*/],
  },
  {
    id: "company",
    label: "Company",
    type: "multiSelect",
    options: ["TechNova", "DataScape", "Innovio" /*…*/],
  },
  {
    id: "education",
    label: "Education Level",
    type: "dropdown",
    options: ["High School", "Bachelor’s", "Master’s", "PhD"],
  },
  {
    id: "benefits",
    label: "Benefits",
    type: "multiSelect",
    options: [
      "Health Insurance",
      "Flexible Hours",
      "Stock Options",
      "Remote Stipend",
    ],
  },
];
