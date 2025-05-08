import JobCard from "../../components/JobCard";
import { jobDetails } from "../../data/employerdata";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const TrendingJobs = () => {
  return (
    <div className="pb-15">
      <div className="my-8 relative">
        <h2 className="text-4xl font-semibold mb-4">Trending Jobs:</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          pagination={{ el: ".custom-pagination", clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="pb-12 "
          breakpoints={{
            // when window width ≥ 640px
            640: { slidesPerView: 2, spaceBetween: 16 },
            // ≥ 768px
            768: { slidesPerView: 2, spaceBetween: 20 },
            // ≥ 1024px
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
        >
          {jobDetails.map((job) => (
            <SwiperSlide key={job.id}>
              <JobCard jobDetails={job} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination mt-4 flex justify-center"></div>
        <div className="md:absolute md:top-0 md:right-2 flex items-center justify-center mt-5">
          <Link className="" to="/find-jobs">
            <span className=" flex items-center gap-2 text-active font-semibold text-sm sm:text-base">
              See All Jobs <MdKeyboardArrowRight className="text-xl" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingJobs;
