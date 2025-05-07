import React from "react";
import HeroSection from "../sections/HeroSection";
import Navbar from "../components/Navbar";
import bgPattern from "../assets/bg-light-purple.png";
import TrendingJobs from "../sections/TrendingJobs";
import Layout from "../layout/Layout";
import JobFields from "../sections/JobFields";

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
      </div>
    </div>
  );
};

export default HomePage;
