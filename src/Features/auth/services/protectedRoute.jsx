import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/authState";

export const ProtectedRoute = ({
  children,
  requiredPermission = null,
  requiredRole = null,
}) => {
  const { user, hasRole, hasPermission } = useAuth();
  const location = useLocation();

  if (!user) {
    //redirect to login if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole && !hasRole(requiredRole)) {
    //redirect to dashboard if role requirement not met
    return <Navigate to="/dashboard" replace />;
  }

  if (requiredPermission && !hasPermission(requiredPermission)) {
    //redirect to dashboard if permission requirement not met
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};
