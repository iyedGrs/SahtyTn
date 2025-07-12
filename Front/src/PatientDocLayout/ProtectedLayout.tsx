import React from "react";
import { useGetCurrentUserQuery } from "@/store/state/api";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout: React.FC = () => {
  const { data: user, isLoading } = useGetCurrentUserQuery();

  if (isLoading) return <div>Loading...</div>;

  if (!user || !user.role) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedLayout;
