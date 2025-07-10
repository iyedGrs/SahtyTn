import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from "firebase/auth";
import { auth } from "@/firebaseConfig"; // Adjust the import path as necessary

import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";

const PhoneOtp: React.FC = () => {
  const [otp, setOtp] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showOtp, setShowOtp] = useState<boolean>(false);
  const [user, setUser] = useState<ConfirmationResult | null>(null);

  const sendOtp = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const recaptcha = new RecaptchaVerifier("recaptcha", {}, auth);
      const phoneNumb = `+${phone}`;
      const confirmation = await signInWithPhoneNumber(
        auth,
        phoneNumb,
        recaptcha
      );
      setUser(confirmation);
      setShowOtp(true);
      setIsLoading(false);
      toast.success("OTP sent successfully!");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      toast.error("Failed to send OTP. Please try again.");
    }
  };

  const verifyOtp = async (): Promise<void> => {
    setIsLoading(true);
    try {
      if (user) {
        const data = await user.confirm(otp);
        console.log(data);
        toast.success("Phone number verified successfully!");
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      toast.error("Invalid OTP. Please try again.");
    }
  };

  // Rest of the component would continue with proper TypeScript types...
  return (
    <div>
      {/* Component JSX would continue here */}
      <div id="recaptcha"></div>
      <ToastContainer />
    </div>
  );
};

export default PhoneOtp;
