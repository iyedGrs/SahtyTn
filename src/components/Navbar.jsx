import { NavLink } from "react-router-dom";
import { links } from "../data/NavBarUser";
export default function Navbar() {
  let cssClass =
    "text-[#0C5D69] p-2 text-md  hover:text-gray-400 transition duration-150 ";
  return (
    <nav className="bg-[#fff]  p-6 mx-auto container font-Josefin w-full h-max">
      <div className="   flex items-center justify-between  ">
        <div>
          <p className=" text-xl lg:text-3xl font-bungee-tint text-[#0C5D69]  font-bold">
            Sahty
          </p>
        </div>
        <div className="flex space-x-5 lg:space-x-16  pr-5">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={
                link.isRendezVous
                  ? `${
                      cssClass +
                      "bg-[#0C5D69] text-white rounded hidden md:block "
                    }`
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
