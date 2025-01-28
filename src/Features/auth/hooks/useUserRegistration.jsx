import { useState } from "react";
import { userService } from "../services/api";

export const useUserRegistration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const registerUser = async (userData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await userService.registerUser(userData);
      setSuccess(true);
      return true;
    } catch (error) {
      setError(error.message || "Registro fallido");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { registerUser, isLoading, error, success };
};
