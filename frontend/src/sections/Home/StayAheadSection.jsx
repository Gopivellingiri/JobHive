import leftBg from "../../assets/left-bg.png";
import rightBg from "../../assets/right-bg.png";

const StayAheadSection = () => {
  return (
    <div className="py-15 relative">
      <div
        className="hidden lg:block md:absolute 
    top-1/2 left-10 transform      
    -translate-y-1/2 w-full h-full bg-no-repeat bg-left z-10"
        style={{ backgroundImage: `url(${leftBg})` }}
      ></div>
      <div className="w-full bg-green rounded-lg py-10 px-5">
        <div className="flex flex-col items-center justify-center gap-2 md:gap-3 text-white">
          <h2 className="text-4xl leading-12 text-center font-semibold pb-5 md:p-0  ">
            Stay Ahead in <br />
            Your Job Search
          </h2>
          <p className="text-center">
            Subscribe to get the latest job opportunities, career tips, <br />{" "}
            and exclusive insights delivered straight to your inbox
          </p>
          <div className="md:bg-white  rounded-full mt-5 bg-transparent flex md:flex-row flex-col gap-4">
            <input
              type="email"
              className=" text-primary py-3 px-4  rounded-full placeholder:text-gray-600 focus:outline-none bg-white border border-color md:border-none"
              placeholder="Email Address"
            />
            <button className="btn-secondary md:!rounded-l-none !rounded-l-full !w-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div
        className="hidden lg:block md:absolute 
    top-1/2 right-10 transform      
    -translate-y-1/2 w-full h-full bg-no-repeat bg-right z-10"
        style={{ backgroundImage: `url(${rightBg})` }}
      ></div>
    </div>
  );
};

export default StayAheadSection;
