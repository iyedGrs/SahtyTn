import { useSelector } from "react-redux";
import sidebarItems from "../data/SibarData";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  // const auth = useSelector((state) => state.auth);
  // const role = auth.userInfo.role;
  const role = "patient";
  let items = [];
  console.log("role is ", role);
  console.log("side bar items", sidebarItems);
  if (role === "docteur") {
    items = sidebarItems.doctor;
  } else if (role === "patient") {
    items = sidebarItems.client;
  }
  console.log("itesm from sidebar", items);
  return (
    <div className="h-screen flex flex-col bg-white text-black ">
      <div className="p-4">
        <h1 className="text-2xl font-normal text-center border-b text-greenMain font-Matemasie">
          SahtyTn
        </h1>
      </div>
      <ul className="flex flex-col gap-2 flex-grow">
        {items.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) => (isActive ? "bg-gray-200" : "")}
            end // Ensures that only the exact match will make it active
          >
            <span className="p-4  flex flex-row items-center gap-2">
              <span className=" flex items-center justify-center w-8 h-8 rounded-full">
                {item.icon}
              </span>
              <p className=" flex-1">{item.title}</p>
            </span>
          </NavLink>
        ))}
      </ul>
      <div className=" p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center justify-between pb-6">
          {" "}
          {/* Added padding to bottom */}
          <span className="text-gray-600">Need help?</span>
          <button className="text-[#66baab] hover:underline">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};
