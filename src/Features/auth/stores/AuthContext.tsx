import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { AuthService } from "../api/auth.service";
import { AuthContextType } from "../types/auth.types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //check the authentication status when component mounts
  useEffect(() => {
    const checkAuthStatus = async () => {
      setIsLoading(true);
      try {
        const isAuth = await AuthService.checkAuth();
        setIsAuthenticated(isAuth);
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };
    checkAuthStatus();
  }, []);

  //login function
  const login = async (email: string, password: string) => {
    await AuthService.login(email, password);
    setIsAuthenticated(true);
  };

  //logout function

  const logout = async () => {
    await AuthService.logout();
    setIsAuthenticated(false);
  };

  //check auth status
  const checkAuth = async () => {
    const isAuth = await AuthService.checkAuth();
    setIsAuthenticated(isAuth);
    return isAuth;
  };

  const value = {
    isAuthenticated,
    isLoading,
    login,
    logout,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
