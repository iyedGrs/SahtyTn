/* eslint-disable react/prop-types */
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import AssignmentIcon from "@mui/icons-material/Assignment";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import HomeIcon from "@mui/icons-material/Home";

const services = [
  {
    title: "CONSULTATION",
    duration: "20 Min",
    price: "$50.00",
    icon: <MedicalServicesIcon fontSize="large" />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    title: "HEALTH CHECKUP",
    duration: "30 Min",
    price: "$30.00",
    icon: <HealthAndSafetyIcon fontSize="large" />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    title: "FLU SHOTS",
    duration: "10 Min",
    price: "$15.00",
    icon: <VaccinesIcon fontSize="large" />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    title: "BLOOD TEST",
    duration: "30 Min",
    price: "$10.00",
    icon: <BloodtypeIcon fontSize="large" />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    title: "PHYSICAL EXAMS",
    duration: "30 Min",
    price: "$50.00",
    icon: <AssignmentIcon fontSize="large" />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    title: "PREVENTION",
    duration: "10 Min",
    price: "$20.00",
    icon: <VerifiedUserIcon fontSize="large" />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    title: "FAMILY PLANNING",
    duration: "30 Min",
    price: "$20.00",
    icon: <FamilyRestroomIcon fontSize="large" />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    title: "HOME VISITS",
    duration: "30 Min",
    price: "$30.00",
    icon: <HomeIcon fontSize="large" />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
];

const ServiceCard = ({ title, duration, price, icon, description }) => (
  <div className="px-2 bg-white rounded-lg shadow-lg  py-6 text-center flex flex-col items-center w-4/5  border-[#39AD96] border-[1px]">
    <div className="text-[#39AD96] mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-wrap text-[#39AD96]">{title}</h3>
    <p className="text-gray-500">
      {duration} | {price}
    </p>
    <p className="text-gray-600 mt-2">{description}</p>
    <button className="bg-[#39AD96] mt-4  text-white font-bold py-2 px-4 rounded">
      Book Now
    </button>
  </div>
);

const ServicesSection = () => (
  <section className="py-16 w-full h-full  flex items-center justify-center  flex-col font-Nunito container mx-auto">
    <div className=" text-center mb-12">
      <h2 className="text-3xl font-bold font-Nunito font-bolder text-[#39AD96]">
        SERVICES
      </h2>
      <div className="w-20 h-1 bg-[#39AD96] mx-auto mt-4"></div>
    </div>

    <div className="grid gap-8  justify-items-center items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  md:grid-cols-3  lg:px-0">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          duration={service.duration}
          price={service.price}
          icon={service.icon}
          description={service.description}
        />
      ))}
    </div>
  </section>
);

export default ServicesSection;
