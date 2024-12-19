import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import VpnForm from "./pages/VpnForm";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/solicitud" element={<VpnForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
