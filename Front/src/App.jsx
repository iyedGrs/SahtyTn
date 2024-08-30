import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import PublicLayout from "./RootLayout/page";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact";
import Register from "./components/Register";
import RootLayout from "./PatientDocLayout/page";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
function App() {
  const { isAuth } = useSelector((state) => state.auth);
  console.log("is auth : ", isAuth);
  return (
    <Routes>
      {!isAuth ? (
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Login />}></Route>
          <Route path="register" element={<Register />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="home" element={<Home />} />
        </Route>
      ) : (
        <Route path="/dashboard" element={<RootLayout />}></Route>
      )}
      <Route path="*" element={<Navigate to={isAuth ? "/dashboard" : "/"} />} />
    </Routes>
  );
}

export default App;
