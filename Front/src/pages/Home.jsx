import ContainerMmaxWidth from "../components/Container-max-width";
import "../index.css";
import { content } from "../data/contentHome";
import { useEffect, useState } from "react";
import SlideContent from "../components/SlideContent";
const Home = () => {
  const [sliderState, setSliderState] = useState({
    currentIndex: 0,
    isAnimating: false,
    manual: false,
  });

  useEffect(() => {
    if (!sliderState.manual) {
      const interval = setInterval(() => {
        nextSlide();
      }, 6000); // Timer interval

      return () => clearInterval(interval);
    }
  }, [sliderState.manual, sliderState.currentIndex]);

  const nextSlide = () => {
    setSliderState((prevState) => ({
      currentIndex:
        prevState.currentIndex === content.length - 1
          ? 0
          : prevState.currentIndex + 1,
      isAnimating: true,
      manual: false,
    }));

    setTimeout(() => {
      setSliderState((prevState) => ({
        ...prevState,
        isAnimating: false,
      }));
    }, 700); // Animation duration
  };

  const goToSlide = (index) => {
    setSliderState({
      currentIndex: index,
      isAnimating: true,
      manual: true,
    });

    setTimeout(() => {
      setSliderState((prevState) => ({
        ...prevState,
        isAnimating: false,
        manual: false,
      }));
    }, 700); // Animation duration
  };

  return (
    <>
      <ContainerMmaxWidth as="main">
        <div className="container-image text-white font-bold pt-10">
          <div className="slider relative overflow-hidden">
            <div
              className="slides flex transition-transform duration-700"
              style={{
                transform: `translateX(-${sliderState.currentIndex * 100}%)`,
              }}
            >
              {content.map((item, index) => (
                <div key={index} className="slide flex-shrink-0 w-full">
                  <SlideContent
                    title={item.title}
                    subtitle={item.subtitle}
                    text={item.text}
                    spansub={item.spansubtitle}
                  />
                </div>
              ))}
            </div>
            <div className="dots absolute  bottom-0  left-1/3  transform -translate-x-1/2 flex space-x-2">
              {content.map((_, index) => (
                <button
                  key={index}
                  className={`dot w-3 h-3 rounded-full ${
                    sliderState.currentIndex === index
                      ? "bg-white"
                      : "bg-gray-400"
                  }`}
                  onClick={() => goToSlide(index)}
                ></button>
              ))}
            </div>
          </div>
          <p className="pt-10">
            <button className="text-lg transition-all duration-500 py-4 px-14 rounded-md bg-white hover:bg-gradient-to-r hover:from-[#84B4AF] hover:via-[#a8e0da] hover:to-[#78b7b0] text-[#50B1A2]">
              Appointment
            </button>
          </p>
        </div>
      </ContainerMmaxWidth>
    </>
  );
};

export default Home;
