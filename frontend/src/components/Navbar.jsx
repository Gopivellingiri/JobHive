import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const links = [
    { to: "/", label: "Home", end: true },
    { to: "/find-jobs", label: "Find Jobs" },
    { to: "/find-talents", label: "Find Talents" },
    { to: "/upload-jobs", label: "Upload Jobs" },
    { to: "/about-us", label: "About Us" },
  ];

  return (
    <nav className="relative nav-container flex items-center justify-between mt-5">
      <h1 className="text-2xl font-bold text-primary">JobHive</h1>

      {/* menu button */}
      <div
        className="text-2xl sm:cursor-pointer md:hidden interactive"
        onClick={() => setShowSidebar((s) => !s)}
      >
        <IoMenu />
      </div>

      <div className="hidden md:flex space-x-8">
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `interactive font-semibold ${
                isActive ? "text-active" : "text-primary"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* sidebar drawer always in DOM */}
      <div
        className={`
          fixed inset-y-0 left-0 w-[250px] bg-light-purple p-4 z-50
          transform transition-transform duration-300 ease-in-out
          ${showSidebar ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col justify-between items-start gap-3">
          <h1 className="text-2xl font-bold text-primary">JobHive</h1>
          <div className="w-full">
            <hr className="border border-color" />
          </div>
          {/* NavLink applies active styling, and onClick closes the drawer */}
          <div className="flex flex-col justify-center gap-4 mt-5 text-sm">
            <div className="flex flex-col space-y-8">
              {links.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `interactive font-semibold ${
                      isActive ? "text-active" : "text-primary"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>{" "}
            <div className=" md:block text-sm md:text-base mt-5">
              <button className="btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block text-sm md:text-base mt-5">
        <button className="btn-primary">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
