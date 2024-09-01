/* eslint-disable react/prop-types */

const ContainerMmaxWidth = ({ children, as: Component = "div" }) => {
  return (
    <Component className="slider-section w-full container mx-auto ">
      {children}
    </Component>
  );
};

export default ContainerMmaxWidth;
