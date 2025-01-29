import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import { Layout } from "./components/Layout/Layout";
import {
  VpnRequestForm,
  CreateUserForm,
  EmailRequestForm,
} from "@/components/forms";
import { AuthProvider } from "./Features/auth/hooks/authState";
import { ProtectedRoute } from "./Features/auth/services/protectedRoute";

export default function App() {
  return (
    <>
      <Router>
        <Layout>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <ProtectedRoute>
                    <CreateUserForm />
                  </ProtectedRoute>
                }
              />
              <Route path="/email" element={<EmailRequestForm />} />
              <Route path="contacts" element={<Contacts />} />
              {/* VPN REQUEST FORM START*/}
              <Route path="/stepone" element={<VpnRequestForm />} />
              {/* VPN REQUEST FORM END */}
            </Routes>
          </AuthProvider>
        </Layout>
      </Router>
    </>
  );
}
