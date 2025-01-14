import { Navbar, Footer } from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
// import { StepOne } from "./pages/FormSteps/Step-One";
// import { StepTwo } from "./pages/FormSteps/Step-Two";
// import { StepThree } from "./pages/FormSteps/Step-Three";
// import { StepFour } from "./pages/FormSteps/Step-Four";
// import { Confirm } from "./pages/FormSteps/Confirm";
import { AppProvider } from "./hooks/state";
import { RegistrationForm } from "./components/Forms/VpnForm/RegistrationForm";
// import FormOne from "./pages/FormSteps/FormOne";

export default function App() {
  return (
    <div>
      <AppProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="contacts" element={<Contacts />} />
            {/* VPN REQUEST FORM START*/}
            <Route path="/stepone" element={<RegistrationForm />} />
            {/* <Route path="/steptwo" element={<StepTwo />} />
            <Route path="/stepthree" element={<StepThree />} />
            <Route path="/stepfour" element={<StepFour />} />
            <Route path="/confirm" element={<Confirm />} /> */}
            {/* VPN REQUEST FORM END */}
          </Routes>
          <Footer />
        </Router>
      </AppProvider>
    </div>
  );
}
