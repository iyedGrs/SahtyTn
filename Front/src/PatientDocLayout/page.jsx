import { Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar";
import { useState, useEffect } from "react";
import NavBarPatientDoc from "../components/NavBarPatientDoc";

const RootLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Ensure the sidebar fits to the left on medium and large screens
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false); // Close the sidebar on medium and larger screens
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-custom-gradient font-Josefin h-full">
      <div className="relative px-6 h-full flex gap-4">
        {/* Sidebar with Transition and Fixed Width */}
        <aside
          className={`fixed overflow-y-hidden    inset-y-0 left-0 z-30 rounded-xl transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-3 my-3" : "-translate-x-full my-3"} 
          w-64 md:w-64 bg-white shadow-lg md:static md:translate-x-0`}
        >
          <SideBar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 my-3  w-full ">
          <NavBarPatientDoc
            setSideBarOpen={setSidebarOpen}
            sideBarOpen={sidebarOpen}
          />
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
