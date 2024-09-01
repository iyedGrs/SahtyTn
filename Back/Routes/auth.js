const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { username, email, password, date, role, id_doctor } = req.body;
    console.log(req.body);
    // Check if user with the same cin already exists
    const existingUser = await User.findOne({ email });
    const doctorId = id_doctor || null;
    if (existingUser) {
      return res.status(400).json({ message: "email already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      date: date,
      role: role,
      id_doctor: doctorId,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Wrong password" });
    }

    // Generate JWT token
    const accessToken = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "30d" } // Token expires in 30 days
    );

    // Respond with the access token
    res.status(200).json({ user, token: accessToken });
  } catch (err) {
    console.error(err.message); // Log the error for debugging purposes
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
