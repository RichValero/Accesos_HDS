import Navbar from "./components/Navbar";
import GridCard from "./components/GridCard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Tests from "./pages/Tests";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<GridCard />} />
          <Route path="/test" element={<Tests />} />
        </Routes>
      </Router>
    </>
  );
}
