export type UserRole = "ADMIN" | "USER";

export interface User {
  user_id: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  login: (credentials: LoginCredentials) => Promise<User>;
  logout: () => void;
  isAdmin: () => boolean;
  isAuthenticated: boolean;
}
