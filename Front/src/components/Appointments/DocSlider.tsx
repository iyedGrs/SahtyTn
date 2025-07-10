import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { doctors } from "../../data/doctors";

console.log("doctors", doctors);
interface DocSliderProps {
  setIsSelectedDoc: (isSelected: boolean) => void;
}

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  responsive: Array<{
    breakpoint: number;
    settings: {
      slidesToShow: number;
      slidesToScroll: number;
      infinite?: boolean;
      dots?: boolean;
    };
  }>;
}

const DocSlider: React.FC<DocSliderProps> = ({ setIsSelectedDoc }) => {
  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);
  
  // Use useEffect to avoid calling setIsSelectedDoc on every render
  useEffect(() => {
    if (selectedIndex !== undefined) {
      setIsSelectedDoc(true);
    }
  }, [selectedIndex, setIsSelectedDoc]);
  
  const handleClick = (index: number): void => {
    setSelectedIndex(index);
  };

  return (
    <div className="container mx-auto p-6 w-full">
      <h2 className="text-3xl font-extrabold mb-8 text-gray-800">
        Our Doctors
      </h2>
    
      {/* @ts-ignore - react-slick types not available */}
      <Slider {...settings}>
        
        {doctors.map((item, index) => (
          <div key={index} className="p-4">
            <div
              onClick={() => handleClick(index)}
              className={`h-80  flex flex-col bg-[#66BAAB] items-center justify-center p-6 rounded-lg shadow-lg transition-transform transform ease-in-out duration-300 cursor-pointer
                ${
                  selectedIndex === index
                    ? "scale-110 border-2 border-white-[10px]"
                    : ""
                }`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-40 h-40 rounded-full object-cover mb-4"
              />

              <p className="text-lg font-semibold text-gray-800 mb-1">
                {item.name}
              </p>
              <p className="text-sm text-gray-600">{item.title}</p>
              <p className="text-sm text-gray-600">{item.tel}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DocSlider;
