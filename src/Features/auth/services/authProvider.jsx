import { AuthStateProvider } from "./authState";
import { PermissionProvider } from "./permissionContext";
import { TokenProvider } from "./tokenContext";

export const AuthProvider = ({ children }) => {
  return (
    <TokenProvider>
      <AuthStateProvider>
        <PermissionProvider>{children}</PermissionProvider>
      </AuthStateProvider>
    </TokenProvider>
  );
};
