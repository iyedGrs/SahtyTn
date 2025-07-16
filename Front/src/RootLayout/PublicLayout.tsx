import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import UnderHomeSection from "../components/UnderHomeSection";
import LoadingFallback from "../components/LoadingFallback";
import { useGetCurrentUserQuery } from "@/store/state/api";

const PublicLayout: React.FC = () => {
  const { data: userInfo, isLoading } = useGetCurrentUserQuery(undefined);
  const location = useLocation();
  if (isLoading) {
    return <LoadingFallback message="Checking authentication..." />;
  }
  if (userInfo && userInfo.role) {
    return <Navigate to={`/${userInfo.role}`} replace />;
  }
  const currentPath = location.pathname;
  const isHomePage = currentPath === "/home";
  return (
    <>
      <div className="  w-full min-h-[100vh] relative  flex  flex-col      ">
        {isHomePage ? <div className="bgImage"></div> : null}
        <Navbar />
        <div className="px-20">
          {/* Main content */}
          <Outlet />
        </div>
      </div>
      {isHomePage ? <UnderHomeSection /> : null}
    </>
  );
};
export default PublicLayout;
