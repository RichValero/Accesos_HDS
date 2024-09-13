import Navbar from "./components/Navbar";
import GridCard from "./components/GridCard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Numeros from "./Numeros";

export default function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <GridCard />
        <Routes>
          <Route path="/Numeros" element={<Numeros />} />
        </Routes>
      </main>
    </Router>
  );
}
