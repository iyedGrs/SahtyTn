import { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // For notifications
import StepProgressBar from "./StepProgressBar";

const FormAppointment = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  const dates = [
    "Lun. 16 Sept.",
    "Mar. 17 Sept.",
    "Mer. 18 Sept.",
    "Jeu. 19 Sept.",
    "Sam. 21 Sept.",
  ]; // Normally fetched from the database
  const times = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30"]; // Fetched from database

  const handleDateSelect = (date) => setSelectedDate(date);
  const handleTimeSelect = (time) => setSelectedTime(time);

  const nextStep = () => {
    if (selectedDate && selectedTime) {
      setStep(step + 1);
    } else {
      toast.error("Please select date and time!");
    }
  };

  const submitForm = () => {
    if (phoneNumber) {
      // Save or send appointment data
      const appointmentData = {
        date: selectedDate,
        time: selectedTime,
        phone: phoneNumber,
      };
      console.log("Appointment Data: ", appointmentData); // You can replace this with an API call

      setStep(step + 1);
    } else {
      toast.error("Please enter a phone number!");
    }
  };

  return (
    <>
      <StepProgressBar currentStep={step} />
      <div className=" max-w-screen-lg mx-auto mt-5 ">
        <div className="bg-[#5c99df] p-2 rounded-t-lg flex space-x-2 ">
          <div className="bg-gray-300 py-2 px-4  rounded-lg">
            <img src="../../../doctorIcon.png" height={40} width={60} alt="" />
          </div>
          <div className="text-white">
            <p>Mohamed Grissa</p>
            <p>Doctor</p>
            <p>
              <span className="material-symbols-outlined text-s">
                location_on
              </span>{" "}
              Sousse , Tunisie
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6 w-full flex items-start justify-center  ">
        <div className="w-full max-w-screen-lg mx-auto bg-white rounded-b-lg shadow-lg p-6">
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-center text-[#66BAAB]">
                Veuillez choisir la date du rendez-vous
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                {dates.map((date, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-lg border ${
                      selectedDate === date
                        ? "bg-[#66BAAB] text-white border-blue-500"
                        : "bg-gray-200 border-gray-300"
                    } hover:bg-blue-400 hover:text-white transition-colors`}
                    onClick={() => handleDateSelect(date)}
                  >
                    {date}
                  </button>
                ))}
              </div>

              <h2 className="text-xl font-bold mb-4 text-center text-[#66BAAB]">
                Veuillez choisir lheure du rendez-vous
              </h2>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {times.map((time, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-lg border ${
                      selectedTime === time
                        ? "bg-[#66BAAB] text-white border-blue-500"
                        : "bg-gray-200 border-gray-300"
                    } hover:bg-blue-400 hover:text-white transition-colors`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>

              <button
                className="w-full bg-[#66BAAB] text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-center text-[#66BAAB]">
                Entrez votre numéro de téléphone
              </h2>
              <input
                type="tel"
                className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Votre numéro de téléphone"
              />

              <button
                className="w-full bg-[#66BAAB] text-white py-2 rounded-lg  transition-colors"
                onClick={submitForm}
              >
                Confirm
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="text-center">
              <h2 className="text-xl font-bold text-green-500 mb-4">Succès</h2>
              <p className="mb-4">Votre rendez-vous est confirmé!</p>
              <div className="bg-blue-100 p-4 rounded-lg text-left">
                <p>
                  <strong>Date:</strong> {selectedDate}
                </p>
                <p>
                  <strong>Time:</strong> {selectedTime}
                </p>
                <p>
                  <strong>Phone:</strong> {phoneNumber}
                </p>
              </div>
            </div>
          )}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default FormAppointment;
