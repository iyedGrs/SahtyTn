const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { username, email, password, date, cin } = req.body;

    // Check if cin is provided
    if (!cin) {
      return res.status(400).json({ message: "CIN is required" });
    }

    // Check if user with the same cin already exists
    const existingUser = await User.findOne({ cin });
    if (existingUser) {
      return res.status(400).json({ message: "CIN already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      date: new Date(Date),
      cin,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
