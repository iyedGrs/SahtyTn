import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Account/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./components/Account/Register";
import RootLayout from "./PatientDocLayout/page";
import Home from "./pages/Home";
import Dashboard from "./pages/loggedUser/Dashboard";
import Consultation from "./pages/loggedUser/Consultation";
import Appointment from "./pages/loggedUser/Appointment";
import Prescriptionn from "./pages/loggedUser/Prescriptionn";
import MedicalRecord from "./pages/loggedUser/MedicalRecord";
import PublicLayout from "./RootLayout/PublicLayout";

import { useGetCurrentUserQuery } from "./store/state/api";
import ProtectedLayout from "./PatientDocLayout/ProtectedLayout";

const App: React.FC = () => {
  const { data: userInfo } = useGetCurrentUserQuery(undefined);
  const isAuth = userInfo !== undefined && userInfo !== null;
  console.log("this is isAuth", isAuth);
  let basePath = "";
  if (isAuth) {
    if (!userInfo) {
      throw new Error("User information is not available in the Redux store.");
    }
    basePath = userInfo.role;
  }
  console.log("this is basePath", basePath);
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route element={<ProtectedLayout />}>
        <Route path={`/${basePath}`} element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path={`/${basePath}/appointments`} element={<Appointment />} />
          <Route
            path={`/${basePath}/consultations`}
            element={<Consultation />}
          />
          <Route
            path={`/${basePath}/prescriptions`}
            element={<Prescriptionn />}
          />
          <Route
            path={`/${basePath}/medical-records`}
            element={<MedicalRecord />}
          />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to={isAuth ? "/dashboard" : "/"} />} />
    </Routes>
  );
};

export default App;
