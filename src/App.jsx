import { Navbar, Footer, SideBar } from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import { RegistrationForm } from "./components/Forms/VpnForm/RegistrationForm";
import { Layout } from "./components/Layout/Layout";
import UserRegisterForm from "./components/Forms/userRegistrationForm/components/userRegisterForm";

export default function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<UserRegisterForm />} />
            <Route path="contacts" element={<Contacts />} />
            {/* VPN REQUEST FORM START*/}
            <Route path="/stepone" element={<RegistrationForm />} />
            {/* VPN REQUEST FORM END */}
          </Routes>
        </Layout>
      </Router>
    </>
  );
}
