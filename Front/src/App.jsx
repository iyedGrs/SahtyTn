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
  // const { isAuth, userInfo } = useSelector((state) => state.auth);
  const isAuth = true;
  const userInfo = {
    _id: "66d1bcea2b831c571bbe8d5d",
    username: "ahmed@gmail.com",
    email: "ahm1ed@gmail.com",
    password: "$2b$10$w39T5d62LdQNSZjWmNdM4eSFJM6eAlU3serPTNiFoAYbt5HJF03V.",
    date: "2024-08-14",
    role: "patient",
    id_doctor: null,
    __v: 0,
  };
  let basePath = "";
  console.log("is auth : ", isAuth);
  console.log("user info : ", userInfo);
  if (isAuth) {
    basePath = userInfo.role;
  }
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
