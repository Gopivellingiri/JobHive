import HeroImg from "../../assets/hero-img.png";
import JobSearchBar from "../../components/JobSearchBar";

const HeroSection = () => {
  return (
    <div className="w-full">
      <div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:h-screen">
          <div>
            <h1 className="text-[41px] md:text-5xl text-primary text-center md:text-left font-bold py-5 leading-14">
              Find Your <br /> Next Big <br />{" "}
              <span className="text-active">Opportunity</span>
            </h1>
            <p className="text-center text-muted md:text-base md:text-left">
              Explore jobs in tech, design, marketing & more.
            </p>
            <div className="my-5">
              <JobSearchBar />
            </div>
          </div>
          <div className="max-w-2xl">
            <img className="w-full" src={HeroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
