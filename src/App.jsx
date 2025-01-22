import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import { Layout } from "./components/Layout/Layout";
import {
  VpnRequestForm,
  UserCreationForm,
  EmailRequestForm,
} from "@/components/Forms";

export default function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<UserCreationForm />} />
            <Route path="/email" element={<EmailRequestForm />} />
            <Route path="contacts" element={<Contacts />} />
            {/* VPN REQUEST FORM START*/}
            <Route path="/stepone" element={<VpnRequestForm />} />
            {/* VPN REQUEST FORM END */}
          </Routes>
        </Layout>
      </Router>
    </>
  );
}
