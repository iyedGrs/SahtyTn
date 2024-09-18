import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebaseConfig";

import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";

const PhoneOtp = () => {
  const [otp, setOtp] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [user, setUser] = useState(null);

  const sendOtp = async () => {
    setIsLoading(true);
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const phoneNumb = `+${phone}`;
      const confirmation = await signInWithPhoneNumber(
        auth,
        phoneNumb,
        recaptcha
      );
      setUser(confirmation);
      setShowOtp(true);
      toast.success("OTP sent successfully!");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtp = async () => {
    setIsLoading(true);
    try {
      await user.confirm(otp);
      toast.success("Phone number verified successfully!");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="bg-emerald-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          {showOtp ? (
            <BsFillShieldLockFill size={30} />
          ) : (
            <BsTelephoneFill size={30} />
          )}
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          {showOtp ? "Enter your OTP" : "Verify your phone number"}
        </h2>
        {showOtp ? (
          <>
            <OtpInput
              value={otp}
              onChange={setOtp}
              OTPLength={6}
              otpType="number"
              disabled={false}
              autoFocus
              className="opt-container justify-center mb-4"
            />
            <button
              onClick={verifyOtp}
              disabled={isLoading}
              className="w-full py-2.5 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              {isLoading ? (
                <CgSpinner className="animate-spin mx-auto" size={20} />
              ) : (
                "Verify OTP"
              )}
            </button>
          </>
        ) : (
          <>
            <PhoneInput
              country={"tn"}
              value={phone}
              onChange={setPhone}
              containerClass="mb-4"
              inputClass="w-full p-2 border border-gray-300 rounded-lg"
            />
            <button
              onClick={sendOtp}
              disabled={isLoading}
              className="w-full py-2.5 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              {isLoading ? (
                <CgSpinner className="animate-spin mx-auto" size={20} />
              ) : (
                "Send code via SMS"
              )}
            </button>
          </>
        )}
        <div id="recaptcha" className="mt-4"></div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default PhoneOtp;
