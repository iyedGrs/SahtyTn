import { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // For notifications
import StepProgressBar from "./StepProgressBar";
import { useForm } from "react-hook-form"; // For form handling

import DataRendezVous from "./DataRendezVous";
import TimeRendezVous from "./TimeRendezVous";
import SuccessRendezVous from "./SuccessRendezVous";
import UpperFormPart from "./UpperFormPart";
import PhoneInput from "react-phone-input-2";
import PhoneOtp from "./PhoneOtp";

const FormAppointment = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const [step, setStep] = useState(1);
  const [otpSent, setOtpSent] = useState(false);
  const [confirmedPhoneNumber, setConfirmedPhoneNumber] = useState(false);

  const dates = [
    "Lun. 16 Sept.",
    "Mar. 17 Sept.",
    "Mer. 18 Sept.",
    "Jeu. 19 Sept.",
    "Sam. 21 Sept.",
  ]; // Normally fetched from the database
  const times = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30"]; // Fetched from database

  const handleDateSelect = (date) => {
    setValue("selectedDate", date, { shouldValidate: true });
  };

  const handleTimeSelect = (time) => {
    setValue("selectedTime", time, { shouldValidate: true });
  };

  const nextStep = () => {
    const selectedDate = getValues("selectedDate");
    const selectedTime = getValues("selectedTime");

    if (selectedDate && selectedTime) {
      setStep(step + 1);
    } else {
      toast.error("Please select both date and time!");
    }
  };

  const onSubmit = (data) => {
    if (data.selectedDate && data.selectedTime && data.phoneNumber) {
      const appointmentData = {
        date: data.selectedDate,
        time: data.selectedTime,
        phone: data.phoneNumber,
      };
      console.log("Appointment Data: ", appointmentData);
      if (step < 2) {
        setStep(step + 1);
      }
    } else {
      toast.error("Please select date, time, and enter a phone number!");
    }
  };

  const confirmPhoneNumber = async (phone) => {
    if (phone.length === 8) {
      setConfirmedPhoneNumber(true);
    }
  };

  const verifyOtp = async (data) => {
    // if (confirmationResult) {
    //   try {
    //     await confirmationResult.confirm(data.otp);
    //     setOtpVerified(true);
    //     toast.success("OTP verified successfully!");
    //   } catch (error) {
    //     toast.error("Invalid OTP: " + error.message);
    //   }
    // }
  };

  return (
    <>
      <StepProgressBar currentStep={step} />
      <UpperFormPart />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-6 pb-6 w-full flex items-start justify-center">
          <div className="w-full max-w-screen-lg mx-auto bg-white rounded-b-lg shadow-lg p-6">
            {step === 1 && (
              <div>
                <DataRendezVous
                  dates={dates}
                  handleDateSelect={handleDateSelect}
                  SelectedDate={getValues("selectedDate")}
                />

                <TimeRendezVous
                  handleTimeSelect={handleTimeSelect}
                  times={times}
                  selectedTime={getValues("selectedTime")}
                />

                <button
                  type="button"
                  className="w-full bg-[#66BAAB] text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  onClick={nextStep}
                >
                  Next
                </button>
              </div>
            )}

            {step === 2 && (
              <>
                <div className="bg-gray-300 p-5">
                  <PhoneOtp />
                </div>
              </>
            )}

            {step === 3 && (
              <SuccessRendezVous
                phoneNumber={getValues("phoneNumber")}
                selectedDate={getValues("selectedDate")}
                selectedTime={getValues("selectedTime")}
              />
            )}
          </div>
          <ToastContainer />
        </div>
      </form>
    </>
  );
};

export default FormAppointment;
