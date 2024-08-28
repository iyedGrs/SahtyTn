import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserLayout from "./RootLayout/page";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact";
import RootLayout from "./PatientDocLayout/page";
import Home from "./pages/Home";
function App() {
  const isAuth = false;
  return (
    <Routes>
      {!isAuth ? (
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="home" element={<Home />} />
        </Route>
      ) : (
        <Route path="*" element={<RootLayout />}></Route>
      )}
    </Routes>
  );
}

export default App;
