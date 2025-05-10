import Layout from "../layout/Layout";
import FindJobs from "../sections/FindJobs/FindJobs";
import Navbar from "../components/Navbar";

const FindJobsPage = () => {
  return (
    <section>
      <Navbar />
      <div className="pt-25 nav-container h-screen">
        <FindJobs />
      </div>
    </section>
  );
};

export default FindJobsPage;
