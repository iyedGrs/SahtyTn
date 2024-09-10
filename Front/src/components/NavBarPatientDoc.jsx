/* eslint-disable react/prop-types */
import SearchIcon from "@mui/icons-material/Search";
import Person2Icon from "@mui/icons-material/Person2";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const NavBarPatientDoc = ({ setSideBarOpen, sideBarOpen }) => {
  const location = useLocation();
  const [path1, setPath] = useState("");

  useEffect(() => {
    const path = location.pathname.split("/").slice(-1)[0]; // Extracts 'appointments'
    setPath(path);
    console.log("/" + path); // Logs '/appointments'
  }, [location]);

  return (
    <div className="w-full py-4 px-1  md:px-6  text-white       items-center justify-between">
      <div className=" flex items-center justify-between flex-col md:flex-row  gap-2 md:gap-4">
        <div className="sm:text-left   w-full">
          <p className="text-md md:te font-semibold w-full   ">
            Pages /{" " + path1}{" "}
          </p>
        </div>
        <div className="right flex items-center      w-full justify-between md:justify-end lg:justify-end">
          <div className="left bg-white p-2  rounded-full flex items-center shadow-md">
            <SearchIcon className="text-black cursor-pointer" />
            <input
              className="border-none text-black outline-none rounded ml-2 w-30 sm:w-64 md:w-44 lg:w-50"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="flex   items-center   ">
            <div className=" p-2 rounded-full flex items-center  ">
              <Person2Icon className="text-white cursor-pointer" />
            </div>
            <div className="flex gap-2 ">
              <SettingsIcon className="text-white hover:text-gray-400 transition-colors duration-300 cursor-pointer" />
              <NotificationsIcon className="text-white hover:text-gray-400 transition-colors duration-300 cursor-pointer" />
            </div>
            <div className="block ">
              <button
                onClick={() => setSideBarOpen(!sideBarOpen)}
                className="p-2 text-white block lg:hidden md:hidden"
              >
                {/* Icon for Hamburger Menu */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarPatientDoc;
