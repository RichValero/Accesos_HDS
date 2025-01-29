import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");

      if (token && storedUser) {
        const userData = JSON.parse(storedUser);
        setUser(userData);
      }
    };
    checkAuth();
  }, []);

  const login = async (credentials) => {
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error("Algo no funciona, intentalo de nuevo");
      }

      const data = await response.json();
      //backend returns {id, email, name and role}
      const { user: userData, token } = data;

      //store both the token and user data
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));

      setUser(userData);
      return userData;
    } catch (error) {
      console.error("Error al iniciar sesion", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  //role checking - comes from the database via login response

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
    //check if user has the required permission based on their role
    return user && permissionMap[user.role]?.includes(permission);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        hasRole,
        hasPermission,
        isAthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
