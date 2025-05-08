import React from "react";
import FieldLabel from "../../components/FieldLabel";

import { IoMdMegaphone } from "react-icons/io";
import { FaComputerMouse } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { GiReceiveMoney } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { TbWriting } from "react-icons/tb";

const JobFields = () => {
  const categories = [
    { name: "Marketing", count: 63, icon: IoMdMegaphone },
    { name: "Development", count: 44, icon: FaLaptopCode },
    { name: "Design", count: 27, icon: FaComputerMouse },
    { name: "Sales", count: 35, icon: SiGoogleanalytics },
    { name: "Finance", count: 12, icon: GiReceiveMoney },
    { name: "Support", count: 18, icon: BiSupport },
    { name: "HR / Hiring", count: 9, icon: IoIosPeople },
    { name: "Content Writing", count: 16, icon: TbWriting },
  ];
  return (
    <div className="w-full py-15">
      <div className="text-white font-semibold pb-5">
        <h2 className="text-4xl leading-12 text-center sm:text-left">
          What’s Your Superpower? Choose a Field
        </h2>
      </div>
      <div className="grid place-content-center place-items-center grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
        {categories.length > 0 &&
          categories.map((cat, i) => <FieldLabel key={i} categories={cat} />)}
      </div>
    </div>
  );
};

export default JobFields;
