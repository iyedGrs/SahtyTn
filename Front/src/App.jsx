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
function App() {
  const { isAuth } = useSelector((state) => state.auth);
  console.log("is auth : ", isAuth);
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
      <Route path="/dashboard" element={<RootLayout />}></Route>

      <Route path="*" element={<Navigate to={isAuth ? "/dashboard" : "/"} />} />
    </Routes>
  );
}

export default App;
