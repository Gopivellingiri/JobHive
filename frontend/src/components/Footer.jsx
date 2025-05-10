import { Link } from "react-router-dom";
import { RiFacebookFill } from "react-icons/ri";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className="pt-15 pb-5">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 text-primary ">
        <div>
          <h4 className="text-primay font-bold text-2xl text-center md:text-left">
            JobHive
          </h4>
        </div>
        <div className="w-full sm:hidden">
          <hr className="border border-color" />
        </div>

        <div className="flex flex-col sm:items-start items-center justify-center gap-2 sm:text-left">
          <h5 className="text-xl font-semibold text-center sm:text-left">
            Company
          </h5>
          <div>
            <Link to="/about-us">
              <span>About Us</span>
            </Link>
          </div>
          <div>
            <Link to="/careers">
              <span>Careers</span>
            </Link>
          </div>
          <div>
            <Link to="/blog">
              <span>Blog/News</span>
            </Link>
          </div>
          <div>
            <div>
              <Link to="/contact-us">
                <span>Contact us</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:items-start items-center justify-center gap-2">
          <h5 className="text-xl font-semibold text-center ">Job Seekers</h5>
          <div>
            <Link to="/about-us">
              <span>Browse Jobs</span>
            </Link>
          </div>
          <div>
            <Link to="/careers">
              <span>categories</span>
            </Link>
          </div>
          <div>
            <Link to="/blog">
              <span>Create Profile</span>
            </Link>
          </div>
          <div>
            <div>
              <Link to="/contact-us">
                <span>Job Alerts(Subscribe)</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:items-start items-center justify-center gap-2">
          <h5 className="text-xl font-semibold text-center ">Employers</h5>
          <div>
            <Link to="/about-us">
              <span>Post a Jobs</span>
            </Link>
          </div>
          <div>
            <Link to="/careers">
              <span>Employer Login</span>
            </Link>
          </div>
          <div>
            <Link to="/blog">
              <span>Pricing</span>
            </Link>
          </div>
          <div>
            <div>
              <Link to="/contact-us">
                <span>Recruiter Guidelines</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:items-start items-center justify-center gap-2">
          <h5 className="text-xl font-semibold text-center ">Resources</h5>
          <div>
            <Link to="/about-us">
              <span>Help Center / FAQs</span>
            </Link>
          </div>
          <div>
            <Link to="/careers">
              <span>Privacy Policy</span>
            </Link>
          </div>
          <div>
            <Link to="/blog">
              <span>Terms of Service</span>
            </Link>
          </div>
          <div>
            <div>
              <Link to="/contact-us">
                <span>Community Guidelines</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-3 ">
        <hr className="border border-color" />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
      w-7 h-7 rounded-full border-2 border-text-primary 
      flex items-center justify-center group 
      hover:border-transparent hover:bg-gray-800 
      transition-colors duration-300 p-0.5
    "
          >
            <RiFacebookFill className="text-primary group-hover:text-white transition-all duration-300" />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
      w-7 h-7 rounded-full border-2 border-text-primary 
      flex items-center justify-center group 
      hover:border-transparent hover:bg-gray-800 
      transition-colors duration-300 p-0.5
    "
          >
            <TbBrandInstagramFilled className="text-primary group-hover:text-white transition-all duration-300" />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
      w-7 h-7 rounded-full border-2 border-text-primary 
      flex items-center justify-center group 
      hover:border-transparent hover:bg-gray-800 
      transition-colors duration-300 p-0.5
    "
          >
            <FaXTwitter className="text-primary group-hover:text-white transition-all duration-300" />
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
      w-7 h-7 rounded-full border-2 border-text-primary 
      flex items-center justify-center group 
      hover:border-transparent hover:bg-gray-800 
      transition-colors duration-300 p-0.5
    "
          >
            <FaLinkedinIn className="text-primary group-hover:text-white transition-all duration-300" />
          </a>

          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
      w-7 h-7 rounded-full border-2 border-text-primary 
      flex items-center justify-center group 
      hover:border-transparent hover:bg-gray-800 
      transition-colors duration-300 p-0.5
    "
          >
            <IoLogoYoutube className="text-primary group-hover:text-white transition-all duration-300" />
          </a>
        </div>
        <div className="font-semibold">
          <p>&copy; {new Date().getFullYear()} JobHive. All rights reserved.</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
