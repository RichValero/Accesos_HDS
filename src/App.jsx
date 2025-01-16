import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import { RegistrationForm } from "./components/Forms/VpnForm/RegistrationForm";
import { Layout } from "./components/Layout/Layout";
import UserRegisterForm from "./components/Forms/userRegistrationForm/components/userRegisterForm";
import { EmailRequestForm } from "./components/Forms/emailRequestForm/components/emailRequesForm";

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
            <Route path="/email" element={<EmailRequestForm />} />
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
