/* eslint-disable react/prop-types */
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { doctors } from "../../data/doctors js";

const DocSlider = ({ setIsSelectedDoc }) => {
  const settings = {
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

  const [selectedIndex, setSelectedIndex] = useState(undefined);
  if (selectedIndex !== undefined) {
    setIsSelectedDoc(true);
  }
  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="container mx-auto p-6 w-full">
      <h2 className="text-3xl font-extrabold mb-8 text-gray-800">
        Our Doctors
      </h2>
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
