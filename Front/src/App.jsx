import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import PublicLayout from "./RootLayout/PublicLayout";
import Login from "./components/Account/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./components/Account/Register";
import RootLayout from "./PatientDocLayout/page";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import Dashboard from "./pages/loggedUser/Dashboard";
import Consultation from "./pages/loggedUser/Consultation";
import Appointment from "./pages/loggedUser/Appointment";
import Prescriptionn from "./pages/loggedUser/Prescriptionn";
import MedicalRecord from "./pages/loggedUser/MedicalRecord";
function App() {
  const { isAuth } = useSelector((state) => state.auth);
  console.log("is auth : ", isAuth);
  const basePath = "patient";
  return (
    <Routes>
      <Route exact path="/" element={<PublicLayout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route index path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path={`/${basePath}`} element={<RootLayout />}>
        {/* <Route index element={<Navigate to={`/dashboard/${basePath}`} />} /> */}
        {/* <Route path={`${basePath}/*`} element={<Dashboard />} /> */}
        <Route index element={<Dashboard />} />
        <Route path={`/${basePath}/appointments`} element={<Appointment />} />
        <Route path={`/${basePath}/consultations`} element={<Consultation />} />
        <Route
          path={`/${basePath}/prescriptions`}
          element={<Prescriptionn />}
        />
        <Route
          path={`/${basePath}/medical-records`}
          element={<MedicalRecord />}
        />
        {/* <Route path={`/${basePath}/payments`} element={<Dashboard />} />
        <Route path={`/${basePath}/messages`} element={<Dashboard />} />
        <Route path={`/${basePath}/settings`} element={<Dashboard />} />
        <Route path={`/${basePath}/support`} element={<Dashboard />} /> */}
      </Route>

      <Route path="*" element={<Navigate to={isAuth ? "/dashboard" : "/"} />} />
    </Routes>
  );
}

export default App;
