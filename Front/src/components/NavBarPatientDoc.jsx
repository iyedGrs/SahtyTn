/* eslint-disable react/prop-types */
import SearchIcon from "@mui/icons-material/Search";
import Person2Icon from "@mui/icons-material/Person2";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";

const NavBarPatientDoc = ({ setSideBarOpen, sideBarOpen }) => {
  return (
    <div className="w-full py-4 px-6  text-white flex-col md:flex-row    items-center justify-between">
      <div>
        <p className="text-md md:te font-semibold ">Pages/Dashboard</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="block md:hidden">
          <button
            onClick={() => setSideBarOpen(!sideBarOpen)}
            className="p-2 text-white"
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

        <div className="bg-white p-2 rounded-full flex items-center shadow-md">
          <SearchIcon className="text-black" />
          <input
            className="border-none text-black outline-none rounded ml-2 w-30 sm:w-64"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className=" p-2 rounded-full flex items-center ">
          <Person2Icon className="text-white" />
          <span className="ml-2 hidden sm:block">Sign in</span>
        </div>
        <div className="flex gap-2">
          <SettingsIcon className="text-white hover:text-gray-400 transition-colors duration-300" />
          <NotificationsIcon className="text-white hover:text-gray-400 transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};

export default NavBarPatientDoc;
