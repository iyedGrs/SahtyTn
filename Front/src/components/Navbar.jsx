import { NavLink, useLocation } from "react-router-dom";
import { links } from "../data/NavBarUser";
export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  let cssClass = "text-[#fff]  text-lg transition duration-150 ";

  // "text-[#0C5D69] p-2 text-lg  hover:text-gray-400 transition duration-150 ";

  return (
    <nav
      className={`${
        currentPath === "/home" ? "" : "bg-[#178066]"
      } px-6 py-6  font-Josefin w-full h-max `}
    >
      <div className="  mx-auto container flex items-center justify-between  ">
        <div className="flex items-center justify-center ">
          <p className=" text-xl lg:text-4xl font-Matemasie  text-[#fff]  ">
            Sahty
          </p>
        </div>
        <div className="flex space-x-5 lg:space-x-16  pr-5">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive }) =>
                link.isRendezVous
                  ? `${
                      cssClass +
                      "bg-[#0C5D69] text-white rounded hidden md:block p-2 "
                    }`
                  : isActive
                  ? cssClass + "p-2"
                  : cssClass
              }
            >
              {link.text}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
