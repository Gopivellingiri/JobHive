import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { reviews } from "../../data/review";

import ReviewCard from "../../components/ReviewCard.jsx";

const JobReviews = () => {
  return (
    <div className="relative pb-15">
      <div className="md:grid md:grid-cols-2 md:gap-2">
        <h2 className="text-4xl leading-12 text-center sm:text-left font-semibold pb-5 md:p-0">
          Job Reviews <br /> from Successful <br /> Applcants
        </h2>
        <div>
          {" "}
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="pb-12 "
            navigation={{
              prevEl: ".reviews-prev",
              nextEl: ".reviews-next",
            }}
            breakpoints={{
              // when window width ≥ 640px
              640: { slidesPerView: 2, spaceBetween: 16 },
              // ≥ 768px
              768: { slidesPerView: 2, spaceBetween: 20 },
              // ≥ 1024px
              1024: { slidesPerView: 2, spaceBetween: 24 },
            }}
          >
            <div className="flex items-center gap-2">
              {reviews.map((review, ind) => (
                <SwiperSlide key={ind}>
                  <ReviewCard reviews={review} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
      <div className="md:absolute md:bottom-[18%] md:pt-0 pt-5 flex items-center gap-4 justify-center">
        <span className="reviews-prev text-2xl md:text-3xl sm:cursor-pointer interactive text-primary">
          {" "}
          <BsArrowLeftCircleFill />
        </span>
        <span className="reviews-next text-2xl interactive md:text-3xl text-active">
          <BsArrowRightCircleFill />
        </span>
      </div>
    </div>
  );
};

export default JobReviews;
