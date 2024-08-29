import { Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar";

const RootLayout = () => {
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
