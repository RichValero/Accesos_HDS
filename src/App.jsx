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

export default function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="/login" element={<Login />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<CreateUserForm />} />
            <Route path="/email" element={<EmailRequestForm />} />
            <Route path="/stepone" element={<VpnRequestForm />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}
