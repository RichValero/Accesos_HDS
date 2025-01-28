import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTokenManager } from "./tokenContext";

//TO DO: USETOKENMANAGER

const AuthStateContext = createContext();

export const AuthStateProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { getToken, setToken, removeToken } = useTokenManager(); //TO DO: USETOKENMANAGER

  useEffect(() => {
    const initializeAuth = async () => {
      const token = getToken(); //GETTING TOKEN
      const storedUser = localStorage.getItem("user"); //GETTING USER
      if (token && storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };
    initializeAuth();
  }, [getToken]);

  const login = async (credentials) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        credentials
      );

      const { user: userData, token } = await response.data;

      setToken(token);
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);

      return userData;
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    removeToken();
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthStateContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthStateContext.Provider>
  );
};

export const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (!context) {
    throw new Error("useAuthState must be used within a AuthStateProvider");
  }
  return context;
};
