import { useEffect, useRef } from "react";
import { AuthService } from "../api/auth.service";
import { useAuth } from "../stores/AuthContext";

const TokenRefresher: React.FC = () => {
  const refreshTimerRef = useRef<NodeJS.Timeout | null>(null);
  const { isAuthenticated, checkAuth } = useAuth();

  useEffect(() => {
    //clear existing timers
    if (refreshTimerRef.current) {
      clearInterval(refreshTimerRef.current);
    }
    //Only setup refresh timer if authenticated
    if (isAuthenticated) {
      //Refresh every 10 minutes
      //It's usually good to refresh before the token expires (in out case, 15min)
      refreshTimerRef.current = setInterval(async () => {
        try {
          await AuthService.refreshToken();
        } catch (error) {
          //If refresh fails, check authentication status;
          checkAuth();
        }
      }, 10 * 60 * 1000); // 10 minutes
    }

    return () => {
      if (refreshTimerRef.current) {
        clearInterval(refreshTimerRef.current);
      }
    };
  }, [isAuthenticated, checkAuth]);

  return null;
};

export default TokenRefresher;
