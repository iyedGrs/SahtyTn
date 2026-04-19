import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import StepProgressBar from "./StepProgressBar";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API_BASE_URL } from "../../config/api";

interface AppointmentFormData {
  selectedDate: string;
  selectedTime: string;
  email: string;
  otp: string;
}

interface FormErrors {
  email?: {
    message: string;
  };
  otp?: {
    message: string;
  };
}

const FormAppointment: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<AppointmentFormData>();

  const [step, setStep] = useState<number>(1);
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [otpVerified, setOtpVerified] = useState<boolean>(false);

  const dates: string[] = [
    "Lun. 16 Sept.",
    "Mar. 17 Sept.",
    "Mer. 18 Sept.",
    "Jeu. 19 Sept.",
    "Sam. 21 Sept.",
  ]; // Normally fetched from the database

  const times: string[] = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30"]; // Fetched from database

  const handleDateSelect = (date: string): void => {
    setValue("selectedDate", date, { shouldValidate: true });
  };

  const handleTimeSelect = (time: string): void => {
    setValue("selectedTime", time, { shouldValidate: true });
  };

  const nextStep = (): void => {
    const selectedDate = getValues("selectedDate");
    const selectedTime = getValues("selectedTime");

    if (selectedDate && selectedTime) {
      setStep(step + 1);
    } else {
      toast.error("Please select both date and time!");
    }
  };

  const onSubmit = async (data: AppointmentFormData): Promise<void> => {
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

  const sendOtpToEmail = async (email: string): Promise<void> => {
    try {
      // Ensure email is provided before sending OTP
      if (!email) {
        toast.error("Email is required.");
        return;
      }

      await axios.post(`${API_BASE_URL}/otp/send-otp`, { email });
      setOtpSent(true);
      toast.success("OTP sent to email");
    } catch (error: any) {
      toast.error(
        "Failed to send OTP: " + (error.response?.data?.error || error.message)
      );
    }
  };

  const verifyOtp = async (otp: string): Promise<void> => {
    const email = getValues("email");

    try {
      await axios.post(`${API_BASE_URL}/otp/verify-otp`, {
        email,
        otp,
      });
      setOtpVerified(true);
      toast.success("OTP verified successfully!");
      setStep(step + 1); // Proceed to next step after OTP is verified
    } catch (error: any) {
      toast.error(
        "Invalid OTP: " + (error.response?.data?.error || error.message)
      );
    }
  };

  const formErrors = errors as FormErrors;

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 font-sans">
      <div className="max-w-3xl mx-auto mb-8">
        <StepProgressBar currentStep={step} />
      </div>

      <div className="max-w-2xl mx-auto shadow-2xl rounded-2xl bg-white overflow-hidden border border-gray-100">
        {/* Modern Doctor Profile Header */}
        <div className="bg-gradient-to-r from-teal-500 to-[#66BAAB] p-6 text-white flex items-center space-x-6 relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white opacity-10"></div>
          <div className="absolute bottom-0 right-10 -mb-8 w-24 h-24 rounded-full bg-white opacity-10"></div>
          
          <div className="bg-white/20 backdrop-blur-md p-3 flex items-center justify-center rounded-2xl shadow-inner border border-white/30 z-10 hover:scale-105 transition-transform duration-300">
            <img
              src="../../../doctorIcon.png"
              className="w-16 h-16 object-contain"
              alt="Doctor Icon"
            />
          </div>
          <div className="z-10 flex-1">
            <h1 className="text-2xl font-bold tracking-wide">Dr. Mohamed Grissa</h1>
            <p className="text-teal-50 font-medium text-sm uppercase tracking-wider mb-2">Médecin Généraliste</p>
            <div className="flex items-center text-sm font-medium text-white/90 bg-black/10 w-max px-3 py-1 rounded-full">
              <span className="material-symbols-outlined text-[16px] mr-1">
                location_on
              </span>
              Sousse, Tunisie
            </div>
          </div>
        </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-8 w-full flex items-start justify-center transition-all">
          <div className="w-full">
            {step === 1 && (
              <div className="space-y-10 animate-fade-in-up">
                {/* Date Selection Section */}
                <section>
                  <div className="flex items-center space-x-3 mb-6">
                    <span className="material-symbols-outlined text-3xl text-[#66BAAB]">
                      calendar_month
                    </span>
                    <h2 className="text-xl font-bold text-gray-800">
                      Choix de la date
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {dates.map((date, index) => {
                      const isSelected = getValues("selectedDate") === date;
                      return (
                        <button
                          key={index}
                          type="button"
                          className={`py-3 px-2 rounded-xl border-2 font-semibold text-sm transition-all duration-200 shadow-sm
                          ${
                            isSelected
                              ? "bg-[#66BAAB] text-white border-teal-500 shadow-lg scale-[1.02]"
                              : "bg-white text-gray-600 border-gray-100 hover:border-[#66BAAB]/50 hover:bg-teal-50 hover:text-teal-700"
                          }
                          `}
                          onClick={() => handleDateSelect(date)}
                        >
                          {date}
                        </button>
                      );
                    })}
                  </div>
                </section>

                {/* Time Selection Section */}
                <section>
                  <div className="flex items-center space-x-3 mb-6">
                    <span className="material-symbols-outlined text-3xl text-[#66BAAB]">
                      schedule
                    </span>
                    <h2 className="text-xl font-bold text-gray-800">
                      Choix de l'heure
                    </h2>
                  </div>
                  <div className="grid grid-cols-3 gap-3 md:gap-4">
                    {times.map((time, index) => {
                      const isSelected = getValues("selectedTime") === time;
                      return (
                        <button
                          key={index}
                          type="button"
                          className={`py-3 px-1 rounded-xl border-2 font-medium text-sm transition-all duration-200 shadow-sm
                          ${
                            isSelected
                              ? "bg-[#66BAAB] text-white border-[#66BAAB] shadow-lg scale-[1.05]"
                              : "bg-white text-gray-700 border-gray-100 hover:border-[#66BAAB]/50 hover:bg-teal-50 hover:text-teal-700"
                          }
                          `}
                          onClick={() => handleTimeSelect(time)}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </section>

                <div className="pt-4">
                  <button
                    type="button"
                    className="w-full bg-gray-900 text-white font-bold text-lg py-4 rounded-xl hover:bg-[#66BAAB] transition-colors shadow-2xl flex items-center justify-center space-x-2"
                    onClick={nextStep}
                  >
                    <span>Continuer</span>
                    <span className="material-symbols-outlined font-bold">arrow_forward</span>
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in-up space-y-6">
                <div className="flex flex-col items-center justify-center text-center space-y-4 mb-8">
                  <div className="h-16 w-16 bg-teal-50 text-[#66BAAB] rounded-full flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-3xl">verified_user</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Vérification
                    </h2>
                    <p className="text-gray-500 text-sm mt-1 max-w-sm">
                      Saisissez votre email. Nous vous enverrons un code pour sécuriser ce rendez-vous.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm space-y-5">
                  <div className="space-y-4">
                    <label className="block text-sm font-semibold text-gray-700">
                      Adresse Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative border-2 border-gray-200 rounded-xl focus-within:border-[#66BAAB] transition-colors bg-white overflow-hidden flex items-center px-3 shadow-inner">
                      <span className="material-symbols-outlined text-gray-400">mail</span>
                      <input
                        type="email"
                        className="w-full p-3 pl-4 focus:outline-none bg-transparent font-medium text-gray-800 placeholder-gray-300"
                        {...register("email", {
                          required: " L'adresse email est requise",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Format de l'email invalide",
                          },
                        })}
                        placeholder="exemple@email.com"
                      />
                    </div>
                    {formErrors.email && (
                      <p className="text-red-500 text-xs font-semibold flex items-center space-x-1 mt-1">
                        <span className="material-symbols-outlined text-sm">error</span>
                        <span>{formErrors.email.message}</span>
                      </p>
                    )}
                  </div>

                  {otpSent && (
                    <div className="space-y-4 animate-fade-in-down mt-6 border-t-2 border-dashed border-gray-200 pt-6">
                      <label className="block text-sm font-semibold text-gray-700">
                        Code OTP de confirmation <span className="text-red-500">*</span>
                      </label>
                      <p className="text-xs text-gray-500 leading-snug">
                        Vérifiez votre boîte de réception {getValues("email")}
                      </p>
                      <div className="relative border-2 border-gray-200 rounded-xl focus-within:border-[#66BAAB] transition-colors bg-white overflow-hidden flex items-center px-3 shadow-inner">
                        <span className="material-symbols-outlined text-gray-400">dialpad</span>
                        <input
                          type="text"
                          maxLength={6}
                          className="w-full p-3 pl-4 focus:outline-none bg-transparent font-bold tracking-widest text-center text-lg text-gray-800 placeholder-gray-200"
                          {...register("otp", {
                            required: "Le code OTP est requis",
                            pattern: {
                              value: /^[0-9]{4,6}$/,
                              message: "Vérifiez le format",
                            },
                          })}
                          placeholder="••••••"
                        />
                      </div>
                    </div>
                  )}

                  <div className="pt-6">
                    <button
                      onClick={() =>
                        !otpSent
                          ? sendOtpToEmail(getValues("email"))
                          : verifyOtp(getValues("otp"))
                      }
                      type="button"
                      className="w-full bg-[#66BAAB] text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-teal-500 hover:scale-[1.01] transition-all flex items-center justify-center space-x-2"
                    >
                      <span>{!otpSent ? "Envoyer le code" : "Vérifier et continuer"}</span>
                      {otpSent && <span className="material-symbols-outlined text-sm">enhanced_encryption</span>}
                    </button>
                    {!otpSent && (
                      <button 
                        type="button" 
                        onClick={() => setStep(step - 1)}
                        className="w-full mt-4 bg-white text-gray-700 border-2 border-gray-200 py-3 flex items-center justify-center rounded-xl font-bold hover:bg-gray-50 hover:border-gray-300 transition-all space-x-2"
                      >
                         <span className="material-symbols-outlined text-sm">arrow_back</span>
                         <span>Retour</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && otpVerified && (
              <div className="text-center animate-fade-in-up py-8 flex flex-col items-center">
                <div className="w-24 h-24 bg-green-100 rounded-[2rem] flex items-center justify-center -rotate-12 mb-6 shadow-xl border-4 border-white">
                  <div className="w-16 h-16 bg-green-500 rounded-[1.2rem] flex items-center justify-center rotate-12 shadow-inner">
                    <span className="material-symbols-outlined text-white text-4xl font-bold">done</span>
                  </div>
                </div>
                
                <h2 className="text-3xl font-extrabold text-gray-800 mb-2 tracking-tight">Rendez-vous Confirmé 🎉</h2>
                <p className="text-gray-500 font-medium mb-10 max-w-sm leading-relaxed">
                  Votre demande a été traitée avec succès. Vous recevrez un email de confirmation prochainement.
                </p>

                {/* Ticket Style Summary */}
                <div className="w-full relative bg-gray-50 border-2 border-gray-100 rounded-3xl p-8 mb-8 text-left shadow-sm">
                  {/* Decorative cutouts */}
                  <div className="absolute top-1/2 -ml-3 -mt-3 left-0 w-6 h-6 bg-white border-r-2 border-y-2 border-gray-100 rounded-r-full"></div>
                  <div className="absolute top-1/2 -mr-3 -mt-3 right-0 w-6 h-6 bg-white border-l-2 border-y-2 border-gray-100 rounded-l-full"></div>
                  <div className="absolute top-1/2 left-6 right-6 h-[2px] border-t-2 border-dashed border-gray-200 mt-[-1px]"></div>

                  {/* Summary Content */}
                  <div className="space-y-6 pt-2 pb-8">
                    <div className="flex items-center space-x-4">
                       <div className="p-3 bg-teal-100/50 rounded-xl text-[#0369a1]"><span className="material-symbols-outlined">event_available</span></div>
                       <div>
                         <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Date & Heure</p>
                         <p className="text-gray-800 font-bold text-lg">{getValues("selectedDate")} à {getValues("selectedTime")}</p>
                       </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6 pt-6">
                    <div className="flex items-center space-x-4">
                       <div className="p-3 bg-blue-100/50 rounded-xl text-[#0369a1]"><span className="material-symbols-outlined">alternate_email</span></div>
                       <div>
                         <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Contact</p>
                         <p className="text-gray-700 font-medium">{getValues("email")}</p>
                       </div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => window.location.href = '/'}
                  className="w-full md:w-auto px-10 py-4 bg-gray-900 border-gray-900 border-2 text-white rounded-xl font-bold hover:bg-gray-800 hover:text-white hover:scale-105 transition-all shadow-lg shadow-gray-900/20"
                >
                  Retour à l'accueil
                </button>
              </div>
            )}
          </div>
          <ToastContainer position="top-center" theme="colored" autoClose={3000} />
        </div>
      </form>
    </div>
  );
};

export default FormAppointment;
