import React from "react";
import HeroSection from "../sections/Home/HeroSection";
import Navbar from "../components/Navbar";
import bgPattern from "../assets/bg-light-purple.png";
import TrendingJobs from "../sections/Home/TrendingJobs";
import Layout from "../layout/Layout";
import JobFields from "../sections/Home/JobFields";
import HighLightedJobs from "../sections/Home/HighLightedJobs";
import JobReviews from "../sections/Home/JobReviews";
import FormSection from "../sections/Home/FormSection";
import StayAheadSection from "../sections/Home/StayAheadSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <div
        className="hidden lg:block absolute inset-y-0 left-0 w-[900px] bg-cover bg-left bg-no-repeat h-[1464px]"
        style={{ backgroundImage: `url(${bgPattern})` }}
      ></div>
      <div className="relative z-20">
        <Navbar />
        <Layout>
          <HeroSection />
          <TrendingJobs />
        </Layout>
        <div className="bg-dark">
          <Layout>
            <JobFields />
          </Layout>
        </div>
        <Layout>
          <HighLightedJobs />
          <JobReviews />
          <FormSection />
          <StayAheadSection />
          <Footer />
        </Layout>
      </div>
    </div>
  );
};

export default HomePage;
