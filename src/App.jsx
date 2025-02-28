import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import { Layout } from "./components/layout/Layout";
import {
  VpnRequestForm,
  CreateUserForm,
  EmailRequestForm,
} from "@/components/forms";
import TokenRefresher from "./Features/auth/components/TokenRefresher";
import ProtectedRoutes from "./Features/auth/components/ProtectedRoutes";
import { AuthProvider } from "./Features/auth/stores/AuthContext";
import LoginForm from "./Features/auth/components/LoginForm";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <TokenRefresher />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<Home />} />
            <Route path="contacts" element={<Contacts />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/register" element={<CreateUserForm />} />
              <Route path="/email" element={<EmailRequestForm />} />
              <Route path="/stepone" element={<VpnRequestForm />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}
