import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify"; // For notifications
import StepProgressBar from "./StepProgressBar";
import { useForm } from "react-hook-form"; // For form handling
import { auth } from "../../firebaseConfig"; // Firebase authentication
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

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
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [confirmedPhoneNumber, setConfirmedPhoneNumber] = useState(false);

  // Initialize reCAPTCHA verifier when the component mounts
  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          console.log("Recaptcha solved", response);
        },
      },
      auth
    );
  }, []);

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

      const phoneNumber = "+216" + phone; // Tunisia country code example, adjust as needed
      const appVerifier = window.recaptchaVerifier;

      try {
        const result = await signInWithPhoneNumber(
          auth,
          phoneNumber,
          appVerifier
        );
        setConfirmationResult(result);
        setOtpSent(true);
        toast.success("OTP sent via SMS");
      } catch (error) {
        toast.error("Failed to send OTP: " + error.message);
      }
    }
  };

  const verifyOtp = async (data) => {
    if (confirmationResult) {
      try {
        await confirmationResult.confirm(data.otp);
        setOtpVerified(true);
        toast.success("OTP verified successfully!");
      } catch (error) {
        toast.error("Invalid OTP: " + error.message);
      }
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
                    Entrez votre numéro de téléphone
                  </h2>
                  <input
                    disabled={confirmedPhoneNumber}
                    type="tel"
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("phoneNumber", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{8}$/,
                        message: "Invalid phone number format",
                      },
                    })}
                    placeholder="Votre numéro de téléphone"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.phoneNumber.message}
                    </p>
                  )}

                  {confirmedPhoneNumber && (
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
                        ? confirmPhoneNumber(getValues("phoneNumber"))
                        : verifyOtp(getValues())
                    }
                    type="button"
                    className="w-full bg-[#66BAAB] text-white py-2 rounded-lg transition-colors"
                  >
                    {!otpSent ? "Send OTP" : "Verify OTP"}
                  </button>
                </div>
                <div id="recaptcha-container"></div>{" "}
                {/* Add this div for reCAPTCHA */}
              </>
            )}

            {step === 3 && (
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
                    <strong>Phone:</strong> {getValues("phoneNumber")}
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
