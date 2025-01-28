import axios from "axios";

export const userService = {
  registerUser: async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/users/register",
        userData
      );
      return response.data;
    } catch (error) {
      if (error.response?.status === 409) {
        throw new Error(
          error.response.data.message || "Algo no funciona, intentalo de nuevo"
        );
      } else if (error.request) {
        throw new Error(
          "Error al conectar con el servidor, revisa tu conexion e intentalo de nuevo"
        );
      } else {
        throw error;
      }
    }
  },
};

export const loginService = {
  userLogin: async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        userData
      );

      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        throw new Error(
          error.response.data.message ||
            "Usuario o contraseña incorrectos, intentalo de nuevo"
        );
      } else if (error.request) {
        throw new Error(
          "Error al conectar con el servidor, revisa tu conexion e intentalo de nuevo"
        );
      } else {
        throw error;
      }
    }
  },
};
