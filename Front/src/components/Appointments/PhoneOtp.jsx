import "react-phone-input-2/lib/style.css";
import OtpInput from "otp-input-react";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import PhoneInput from "react-phone-input-2";
import { RecaptchaVerifier } from "firebase/auth";
import { auth } from "../../firebaseConfig";
const PhoneOtp = () => {
  const [otp, setOtp] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);

  const onCaptchaVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // ...
          },
          "expired-callback": () => {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          },
        }
      );
    }
  };
  return (
    <div>
      {showOtp ? (
        <>
          <div className="bg-white text-emerald-500 w-fit mx-auto flex p-4 rounded-full">
            <BsFillShieldLockFill size={30} />
          </div>
          <label
            htmlFor="otp"
            className="font-bold text-2xl text-black text-center"
          >
            Enter your OTP
          </label>
          <OtpInput
            value={otp}
            onChange={setOtp}
            OTPLength={6}
            OtpType="nubmer"
            disabled={false}
            autoFocus
            className="opt-container"
          ></OtpInput>
          <button className="mt-2 w-full flex gap-1 items-center justify-center py-2.5 bg-gray-500/80 text-white rounded">
            {isLoading && <CgSpinner className="mt-1 animate-spin" size={20} />}

            <span>Verify OTP</span>
          </button>
        </>
      ) : (
        <>
          <div className="bg-white text-emerald-500 w-fit mx-auto flex p-4 rounded-full">
            <BsTelephoneFill size={30} />
          </div>
          <label
            htmlFor="ph"
            className="font-bold text-xxl text-black  flex justify-center"
          >
            Verify your phone number
          </label>
          <PhoneInput country={"tn"} value={phone} onChange={setPhone} />
          <button className="mt-2 w-full flex gap-1 items-center justify-center py-2.5 bg-gray-500/80 text-white rounded">
            {isLoading && <CgSpinner className="mt-1 animate-spin" size={20} />}

            <span>Send code Via Sms</span>
          </button>
        </>
      )}
      <></>
    </div>
  );
};

export default PhoneOtp;
