import ContainerMmaxWidth from "../components/Container-max-width";
import "../index.css";
import { content } from "../data/contentHome";
import { useEffect, useState } from "react";
import SlideContent from "../components/SlideContent";
const Home = () => {
  const [sliderState, setSliderState] = useState({
    currentIndex: 0,
    isAnimating: false,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setSliderState((prevState) => ({
        ...prevState,
        isAnimating: true,
      }));

      setTimeout(() => {
        setSliderState((prevState) => ({
          currentIndex:
            prevState.currentIndex === content.length - 1
              ? 0
              : prevState.currentIndex + 1,
          isAnimating: false,
        }));
      }, 700); // Animation duration
    }, 6000); // Timer interval

    return () => clearInterval(interval);
  }, []);
  const currentContent = content[sliderState.currentIndex];
  return (
    <>
      <ContainerMmaxWidth as="main">
        <div className="container-image font-Nunito text-white font-bold  ">
          <div
            className={` flex flex-col gap-7 transition-opacity duration-500 ${
              sliderState.isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            <SlideContent
              title={currentContent.title}
              subtitle={currentContent.subtitle}
              text={currentContent.text}
              spansub={currentContent.spansubtitle}
            />
          </div>
          <p className="   pt-10">
            <button className="text-lg transition-all duration-500 py-4 px-14 rounded-md bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white ">
              Appointment
            </button>
          </p>
        </div>
      </ContainerMmaxWidth>
    </>
  );
};

export default Home;
