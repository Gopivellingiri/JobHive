import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FindJobsPage from "../pages/FindJobsPage";
import FindTalents from "../pages/FindTalents";
import UploadJobs from "../pages/UploadJobs";
import AboutUs from "../pages/AboutUs";
import JobDetails from "../pages/jobDetails";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-jobs" element={<FindJobsPage />} />
        <Route path="/job-details/:id" element={<JobDetails />} />
        <Route path="/find-talents" element={<FindTalents />} />
        <Route path="/upload-jobs" element={<UploadJobs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
