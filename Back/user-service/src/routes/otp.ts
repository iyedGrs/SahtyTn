import express, { Request, Response, Router } from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

import { createTransporter } from "../../../common/mailer";

dotenv.config(); // Load environment variables from .env file

const router: Router = express.Router();

// OTP generation function
const generateOtp = (): number => Math.floor(100000 + Math.random() * 900000);

// Store OTPs in memory (for demo purposes)
// Use a database like Redis or MongoDB in production
interface OtpStore {
  [email: string]: number;
}

let otpStore: OtpStore = {};

// Configure Nodemailer transporter

// Route to send OTP to email
router.post("/send-otp", async (req: Request, res: Response): Promise<void> => {
  const { email }: { email: string } = req.body;

  if (!email) {
    res.status(400).json({ success: false, error: "Invalid email address" });
    return;
  }

  const otp = generateOtp();
  otpStore[email] = otp; // Store OTP in memory (replace this with a database in production)

  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.EMAIL_USER as string, // Use environment variable for sender email
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP code is ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "OTP sent to email!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Failed to send OTP" });
  }
});

// Route to verify OTP
router.post("/verify-otp", (req: Request, res: Response): void => {
  const { email, otp }: { email: string; otp: string } = req.body;
  console.log(email, otp);

  if (!email || !otp) {
    res
      .status(400)
      .json({ success: false, error: "Email and OTP are required" });
    return;
  }

  if (otpStore[email] && otpStore[email].toString() === otp.toString()) {
    delete otpStore[email]; // OTP verified, remove from store
    res
      .status(200)
      .json({ success: true, message: "OTP verified successfully!" });
  } else {
    res.status(400).json({ success: false, error: "Invalid OTP" });
  }
});

export default router;
