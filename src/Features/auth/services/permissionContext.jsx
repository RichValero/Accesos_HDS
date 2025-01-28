import { createContext, useContext } from "react";
import { useAuthState } from "./authState";

const PermissionContext = createContext();

export const PermissionProvider = ({ children }) => {
  const { user } = useAuthState();

  const hasRole = (requiredRole) => {
    return user?.role === requiredRole;
  };

  const hasPermission = (permission) => {
    const permissionMap = {
      admin: [
        "view:all-request",
        "create:request",
        "edit:request",
        "view:all-users",
        "edit:user",
        "change:password",
      ],
      user: ["view:own-request", "create:request", "view:profile"],
    };
    return user && permissionMap[user.role]?.includes(permission);
  };

  return (
    <PermissionContext.Provider value={{ hasRole, hasPermission }}>
      {children}
    </PermissionContext.Provider>
  );
};

export const usePermission = () => {
  const context = useContext(PermissionContext);
  if (!context) {
    throw new Error("usePermission must be used within a PermissionProvider");
  }
  return context;
};
