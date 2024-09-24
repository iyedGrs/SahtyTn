import { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // For notifications
import StepProgressBar from "./StepProgressBar";
import { useForm } from "react-hook-form"; // For form handling
import axios from "axios"; // For making HTTP requests

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
  const [otpVerified, setOtpVerified] = useState(false);

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

  const onSubmit = async (data) => {
    const { selectedDate, selectedTime, email } = data;

    if (selectedDate && selectedTime && email) {
      console.log("Appointment Data: ", { selectedDate, selectedTime, email });

      // Proceed to next step only after confirming email and OTP process
      if (step < 2 && otpVerified) {
        setStep(step + 1);
      } else {
        toast.error("Please complete the OTP verification.");
      }
    } else {
      toast.error("Please select date, time, and enter an email address!");
    }
  };

  const sendOtpToEmail = async (email) => {
    try {
      // Ensure email is provided before sending OTP
      if (!email) {
        toast.error("Email is required.");
        return;
      }

      await axios.post("http://localhost:5000/api/otp/send-otp", { email });
      setOtpSent(true);
      toast.success("OTP sent to email");
    } catch (error) {
      toast.error(
        "Failed to send OTP: " + error.response?.data?.error || error.message
      );
    }
  };

  const verifyOtp = async (otp) => {
    const email = getValues("email");

    try {
      await axios.post("http://localhost:5000/api/otp/verify-otp", {
        email,
        otp,
      });
      setOtpVerified(true);
      toast.success("OTP verified successfully!");
      setStep(step + 1); // Proceed to next step after OTP is verified
    } catch (error) {
      toast.error(
        "Invalid OTP: " + error.response?.data?.error || error.message
      );
    }
  };

  return (
    <>
      <StepProgressBar currentStep={step} />
      <div className="max-w-screen-lg mx-auto mt-5">
        <div className="bg-[#5c99df] p-2 rounded-t-lg flex space-x-2">
          <div className="bg-gray-300 py-2 px-4 rounded-lg">
            <img
              src="../../../doctorIcon.png"
              height={40}
              width={60}
              alt="Doctor Icon"
            />
          </div>
          <div className="text-white">
            <p>Mohamed Grissa</p>
            <p>Doctor</p>
            <p>
              <span className="material-symbols-outlined text-sm">
                location_on
              </span>{" "}
              Sousse, Tunisie
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-6 pb-6 w-full flex items-start justify-center">
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
                      type="button"
                      className={`px-4 py-2 rounded-lg border ${
                        getValues("selectedDate") === date
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
                      type="button"
                      className={`px-4 py-2 rounded-lg border ${
                        getValues("selectedTime") === time
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
                <div>
                  <h2 className="text-xl font-bold mb-4 text-center text-[#66BAAB]">
                    Entrez votre adresse email
                  </h2>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("email", {
                      required: "Email address is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address format",
                      },
                    })}
                    placeholder="Votre adresse email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}

                  {otpSent && (
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      {...register("otp", {
                        required: "OTP is required",
                        pattern: {
                          value: /^[0-9]{6}$/,
                          message: "Invalid OTP format",
                        },
                      })}
                      placeholder="Enter OTP"
                    />
                  )}

                  <button
                    onClick={() =>
                      !otpSent
                        ? sendOtpToEmail(getValues("email"))
                        : verifyOtp(getValues("otp"))
                    }
                    type="button"
                    className="w-full bg-[#66BAAB] text-white py-2 rounded-lg transition-colors"
                  >
                    {!otpSent ? "Send OTP" : "Verify OTP"}
                  </button>
                </div>
              </>
            )}

            {step === 3 && otpVerified && (
              <div className="text-center">
                <h2 className="text-xl font-bold text-green-500 mb-4">
                  Succès
                </h2>
                <p className="mb-4">Votre rendez-vous est confirmé!</p>
                <div className="bg-blue-100 p-4 rounded-lg text-left">
                  <p>
                    <strong>Date:</strong> {getValues("selectedDate")}
                  </p>
                  <p>
                    <strong>Time:</strong> {getValues("selectedTime")}
                  </p>
                  <p>
                    <strong>Email:</strong> {getValues("email")}
                  </p>
                </div>
              </div>
            )}
          </div>
          <ToastContainer />
        </div>
      </form>
    </>
  );
};

export default FormAppointment;
