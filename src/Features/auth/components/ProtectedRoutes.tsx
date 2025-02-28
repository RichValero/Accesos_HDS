import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../stores/AuthContext";

interface ProtectedRoutesProps {
  redirectPath?: string;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({
  redirectPath = "/login",
}) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} />;
};

export default ProtectedRoutes;
