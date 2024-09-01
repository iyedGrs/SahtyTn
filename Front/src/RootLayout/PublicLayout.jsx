import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import UnderHomeSection from "../components/UnderHomeSection";

const PublicLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isHomePage = currentPath === "/home";
  return (
    <>
      <div className="  w-full min-h-[100vh] relative  flex  flex-col      ">
        {isHomePage ? <div className="bgImage"></div> : null}
        <Navbar />
        <div
          className="border-2 border-red-500 px-20 
        "
        >
          <Outlet />
        </div>
      </div>
      {isHomePage ? <UnderHomeSection /> : null}
    </>
  );
};
export default PublicLayout;
