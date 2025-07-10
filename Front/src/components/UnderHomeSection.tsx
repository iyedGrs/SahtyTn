import React from "react";
import Departments from "./Home/Departments";
import DoctorsSection from "./Home/DoctorsSection";
import ServicesSection from "./ServicesSection";

const UnderHomeSection: React.FC = () => {
  return (
    <div>
      <Departments />;
      <DoctorsSection />
      <ServicesSection />
    </div>
  );
};

export default UnderHomeSection;
