import Navbar from "./components/Navbar";
import GridCard from "./components/GridCard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </>
  );
}
