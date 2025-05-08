import { MdUpload } from "react-icons/md";

const FormSection = () => {
  return (
    <div className="py-15 flex flex-col md:flex-row items-center gap-5">
      <div className="flex flex-col gap-2">
        <h2 className="text-primary font-semibold text-4xl text-center md:text-left">
          Your Dream Job <br />
          is Just a Click Away
        </h2>
        <p className="text-light-gray text-center md:text-left">
          Drop your CV at JobHive and let top companies come to you. It's fast,
          simple, and built for serious job seekers ready to level up their
          career
        </p>
        <button className="btn-primary self-center md:self-start">
          Reginster Now
        </button>
      </div>
      <div className="w-full">
        <form className="bg-dark p-4 rounded-lg">
          <div className="flex flex-col gap-4 bg-white p-3 rounded-lg">
            <h3 className="text-2xl font-semibold text-center md:text-left">
              JobHive
            </h3>
            <div className="flex flex-col gap-3">
              <label className="text-base" htmlFor="title">
                Job Title
              </label>
              <input
                type="text"
                id="title"
                className="py-2.5 px-3 border border-color rounded-full w-full focus:ring-teal-100 focus:ring-2 focus:outline-none focus:ring-offset-4 focus:ring-offset-teal-300  focus:border-transparent  "
                placeholder="Enter your job title here"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                rows="3"
                className="py-2.5 px-3 border border-color rounded-lg w-full focus:ring-teal-100 focus:ring-2 focus:outline-none focus:ring-offset-4 focus:ring-offset-teal-300  focus:border-transparent  "
                placeholder="Enter the full job description here..."
              />{" "}
            </div>
            <div>
              <button className="btn-secondary flex items-center gap-2 !w-full justify-center">
                <MdUpload className="text-xl" />
                Upload
              </button>
            </div>
            <div>
              <button className="btn-primary flex items-center gap-2 !w-full justify-center">
                Get started
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
