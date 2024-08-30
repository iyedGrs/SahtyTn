import { Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar";
import { useSelector } from "react-redux";

const RootLayout = () => {
  const data = useSelector((state) => state.auth);
  console.log("welcome here this is the data from the store", data);
  return (
    <div>
      <h1>Navbar profile</h1>
      <div className="flex">
        <SideBar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
