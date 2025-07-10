import React from "react";

interface ContainerMaxWidthProps {
  children: React.ReactNode;
  as?: React.ElementType;
}

const ContainerMmaxWidth: React.FC<ContainerMaxWidthProps> = ({ 
  children, 
  as: Component = "div" 
}) => {
  return (
    <Component className="slider-section w-full container mx-auto ">
      {children}
    </Component>
  );
};

export default ContainerMmaxWidth;
