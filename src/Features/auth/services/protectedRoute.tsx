import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./useAuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredAdmin?: boolean;
}

export const ProtectedRoute = ({
  children,
  requiredAdmin = false,
}: ProtectedRouteProps) => {
  const { user, isAuthenticated, isAdmin } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    //redirect to login if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredAdmin && !isAdmin()) {
    //redirect to dashboard if permission requirement not met
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};
