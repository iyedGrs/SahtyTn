import { Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar";
import { useSelector } from "react-redux";

const RootLayout = () => {
  const data = useSelector((state) => state.auth);
  console.log("Welcome here, this is the data from the store:", data);

  return (
    <div className="grid grid-rows-[1fr] min-h-screen">
      {/* Sidebar and Main content */}
      <div className="grid grid-cols-12 flex-grow">
        <aside className="col-span-2 bg-gray-50 dark:bg-gray-800">
          <SideBar />
        </aside>
        <main className="col-span-10 p-4">
          <Outlet />
          <h1>ena main</h1>
        </main>
      </div>
      {/* Footer */}
    </div>
  );
};

export default RootLayout;
