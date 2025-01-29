import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./useAuthContext";
import { User, LoginCredentials, UserRole } from "../types/types";

export const AuthProvider = ({ children }) => {
  //Initialize state
  const [user, setUser] = useState<User | null>(null);
  //Initialize navigation
  const navigate = useNavigate();

  useEffect(() => {
    //Check if user is authenticated
    const checkAuth = async () => {
      try {
        //store the token and user data
        const token = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (token && storedUser) {
          const userData = JSON.parse(storedUser);
          setUser(userData);
        }
      } catch (error) {
        console.error("Error al iniciar sesion", error);
        logout();
      }
    };
    //Check if user is authenticated
    checkAuth();
  }, []);

  const login = async (credentials: LoginCredentials): Promise<User> => {
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al iniciar sesion");
      }

      const data = await response.json();
      const { user: userData, token } = data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);

      return userData;
    } catch (error) {
      console.error("Login error", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const isAdmin = (): boolean => {
    return user?.role === ("admin" as UserRole);
  };

  const contextValue = {
    user,
    login,
    logout,
    isAdmin,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
