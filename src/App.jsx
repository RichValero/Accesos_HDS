import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import VpnForm from "./pages/VpnForm";
import { Contact } from "./pages/FormSteps/Contact";
import { Education } from "./pages/FormSteps/Education";
import { About } from "./pages/FormSteps/About";
import { Confirm } from "./pages/FormSteps/Confirm";

import { AppProvider } from "./hooks/state";
import { Asset } from "./pages/FormSteps/Asset";
import { Stepper } from "./pages/FormSteps/Stepper";
export default function App() {
  return (
    <div>
      <AppProvider>
        <Router>
          <Navbar />
          <Stepper />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="contacts" element={<Contacts />} />

            {/* VPN REQUEST FORM START*/}
            <Route path="/solicitud" element={<VpnForm />} />
            <Route path="/step" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/about" element={<About />} />
            <Route path="/asset" element={<Asset />} />
            <Route path="/confirm" element={<Confirm />} />
            {/* VPN REQUEST FORM END */}
          </Routes>
          <Footer />
        </Router>
      </AppProvider>
    </div>
  );
}
