export const AuthService = {
  //Login Method to authenticate the user

  async login(email: string, password: string) {
    const response = await fetch("http://localhost:3001/user/login", {
      method: "POST", //We specify is a POST method to the backend
      headers: {
        "Content-Type": "application/json", //We specify the content type
      },
      credentials: "include", //We want to include the cookies/credentials
      body: JSON.stringify({ email, password }), //We send the data in the body
    });

    //if the response is not ok, we throw an error
    if (!response.ok) {
      const error = await response.json();

      throw new Error(error.message || "Algo no funciona, intentalo de nuevo");
    }

    return response.json();
  },

  //Function to refresh access token using refresh token (cookies)

  async refreshToken() {
    const response = await fetch("http://localhost:3001/user/refresh-token", {
      method: "POST",
      credentials: "include",
    });

    //if response is not ok, throw error with message
    if (!response.ok) {
      throw new Error("Error al refrescar cookies o tokens");
    }

    return response.json();
  },

  //Function to logout the user
  async logout() {
    const response = await fetch("http://localhost:3001/user/logout", {
      method: "POST",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Error al cerrar sesion");
    }

    return response.json();
  },

  //Check if the user is authenticated
  async checkAuth() {
    try {
      const response = await fetch("http://localhost:3001/user/check", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        return false;
      }

      const data = await response.json();
      return data.isAuthenticated;
    } catch (error) {
      return false;
    }
  },
};
