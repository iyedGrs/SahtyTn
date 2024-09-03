import ContainerMmaxWidth from "../Container-max-width";
import departments from "../../data/DepartmentData.jsx";
// import { LuHeartPulse } from "react-icons/lu";
import { useState } from "react";
const maxDescriptionLength = 100;
const Departments = () => {
  console.log("this is are departments", departments);
  const [expanded, setExpanded] = useState({});
  const SliceWord = (text, isExpanded) => {
    if (isExpanded) return text;
    if (text.length > maxDescriptionLength) {
      return text.slice(0, maxDescriptionLength) + "....";
    }
    return text.slice(0, 110);
  };
  const toggleExpand = (index) => {
    // setCssClass(cssClass + " bg-red-500 absolute");
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <ContainerMmaxWidth as="section">
      <div className="flex flex-col gap-10 font-Nunito">
        <div className="text-center">
          <h1 className="text-center pb-4 font-semibold text-2xl md:text-3xl lg:text-5xl uppercase">
            Our Departments{" "}
          </h1>
          <span className="text-center px-10 lg:px-0 md:px-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            pariatur sequi eius. Eius numquam architecto adipisci, impedit
            deserunt asperiores maxime!
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {departments.map((department, index) => (
            <div
              key={index}
              className=" text-center flex flex-col items-center flex-wrap gap-4 p-4 w-5/6 mx-auto "
            >
              <p className="bg-[#62d2a2]  rounded-full w-24 h-24 mb-6 flex justify-center items-center  ">
                {department.icon}
              </p>
              <div className="  flex flex-col items-center gap-2">
                <h3 className="font-bold text-xl text-center uppercase">
                  {department.title}
                </h3>
                <p className="w-full justify-center-last">
                  {SliceWord(department.description, expanded[index])}
                </p>
                {department.description.length > maxDescriptionLength && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className=" underline z-10  text-blue-800"
                  >
                    {expanded[index] ? "Less" : "More"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center">
          <button className="bg-[#62d2a2] py-2 px-12 rounded-md text-lg text-white font-semibold ">
            View All
          </button>
        </p>
      </div>
    </ContainerMmaxWidth>
  );
};

export default Departments;
