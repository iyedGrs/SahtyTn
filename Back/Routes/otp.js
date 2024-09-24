const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config(); // Load environment variables from .env file

// OTP generation function
const generateOtp = () => Math.floor(100000 + Math.random() * 900000);

// Store OTPs in memory (for demo purposes)
// Use a database like Redis or MongoDB in production
let otpStore = {};

// Configure Nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Environment variable for email
      pass: process.env.EMAIL_PASS, // Environment variable for password
    },
    tls: {
      rejectUnauthorized: false, // For development purposes
    },
  });
};

// Route to send OTP to email
router.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid email address" });
  }

  const otp = generateOtp();
  otpStore[email] = otp; // Store OTP in memory (replace this with a database in production)

  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.EMAIL_USER, // Use environment variable for sender email
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
router.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  console.log(email, otp);
  if (!email || !otp) {
    return res
      .status(400)
      .json({ success: false, error: "Email and OTP are required" });
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

module.exports = router;
