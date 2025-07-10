import React, { useState } from "react";
import FilterDoc from "@/components/Appointments/FilterDoc";
import FormAppointment from "@/components/Appointments/FormAppointment";
import DocSlider from "@/components/Appointments/DocSlider";

const Appointment: React.FC = () => {
  const [isSelectedDoc, setIsSelectedDoc] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  
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
