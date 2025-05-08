import priyaImg from "../assets/reviewers/priyar_sharma.png";
import arjun from "../assets/reviewers/arjun.png";
import sneha from "../assets/reviewers/sneha.png";

import technova from "../assets/company_logos/technova.png";
import textflow from "../assets/company_logos/textflow.png";
import DataScape from "../assets/company_logos/DataScape.png";

export const reviews = [
  {
    id: 1,
    company: "TechNova Solutions",
    logo: technova,
    duration: "8 months",
    text: "“The interview process was smooth and professional. I received regular updates, and the HR was very helpful. The role was exactly as described in the listing. Highly recommend applying here!”",
    reviewer: {
      name: "Priya Sharma",
      role: "UI/UX Designer",
      avatar: priyaImg,
    },
  },
  {
    id: 2,
    company: "TestFlow",
    logo: textflow,
    duration: "6 months",
    text: "“Working as a QA Engineer at TestFlow was fantastic. I got to automate key workflows, collaborate with a skilled team, and saw real improvements in product stability.”",
    reviewer: {
      name: "Arjun Mehta",
      role: "QA Engineer",
      avatar: arjun,
    },
  },
  {
    id: 3,
    company: "DataScape Analytics",
    logo: DataScape,
    duration: "6 months",
    text: "“My data analyst role at DataScape was challenging in the best way. I got to work on real-world problems, mentor junior analysts, and saw my work directly impact client decisions.”",
    reviewer: {
      name: "Sneha Kapoor",
      role: "Data Analyst",
      avatar: sneha,
    },
  },
];
