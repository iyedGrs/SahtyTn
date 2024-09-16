import FilterDoc from "../../components/Appointments/FilterDoc";
import DocSlider from "../../components/Appointments/DocSlider";
import FormAppointment from "../../components/Appointments/FormAppointment";
import { useState } from "react";
// import { set } from "react-hook-form";

const Appointment = () => {
  const [isSelectedDoc, setIsSelectedDoc] = useState(false);
  const [clicked, setClicked] = useState(false);
  return (
    <div className="font-Josefin">
      {clicked ? (
        <FormAppointment />
      ) : (
        <>
          <FilterDoc />
          <DocSlider setIsSelectedDoc={setIsSelectedDoc} />
          <p className="text-center pt-4">
            <button
              onClick={() => setClicked(true)}
              className={`  text-white  p-4 rounded-md ${
                isSelectedDoc ? "bg-[#66BAAB] " : "bg-slate-300"
              } `}
              disabled={!isSelectedDoc}
            >
              {" "}
              Prenez Rendez Vous{" "}
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default Appointment;
