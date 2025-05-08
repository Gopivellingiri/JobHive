import React from "react";
import { Link } from "react-router-dom";

const ReviewCard = ({ reviews }) => {
  return (
    <Link>
      <div className="bg-white border border-color rounded-lg p-4 flex flex-col gap-2 min-h-[220px] ">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 p-1 rounded-md bg-logo">
            <img className="w-full h-full" src={reviews?.logo} alt="" />
          </div>
          <div className="flex flex-col">
            <span className="text-base text-primary font-semibold">
              {reviews?.company}
            </span>
            <span className="text-xs sm:text-sm">
              Duration : {reviews?.duration}
            </span>
          </div>
        </div>
        <div className="text-sm sm:text-base text-light-gray">
          <p>{reviews?.text}</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10  rounded-md overflow-hidden">
              <img
                className="w-full h-full "
                src={reviews?.reviewer?.avatar}
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <span className="text-active font-semibold text-base ">
                {reviews?.reviewer?.name}
              </span>
              <span className="text-xs sm:text-base">
                {reviews?.reviewer?.role}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ReviewCard;
