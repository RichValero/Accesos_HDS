import { Navbar, Footer, SideBar } from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
// import { Confirm } from "./pages/FormSteps/Confirm";
//import { AppProvider } from "./hooks/state"; //not needed at the moment
import { RegistrationForm } from "./components/Forms/VpnForm/RegistrationForm";
// import FormOne from "./pages/FormSteps/FormOne";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container flex">
          <div className="w-full">
            <SideBar />
          </div>
          <div className="w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/register" element={<Register />} />
              <Route path="contacts" element={<Contacts />} />
              {/* VPN REQUEST FORM START*/}
              <Route path="/stepone" element={<RegistrationForm />} />
              {/* VPN REQUEST FORM END */}
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
