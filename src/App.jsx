import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
