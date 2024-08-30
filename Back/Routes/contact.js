const express = require("express");

const router = express.Router();
const authenticateUser = require("../middlewares/auth");
const User = require("../Models/User");
const Contact = require("../Models/Contact");
// const contactController = require("../controllers/contactController");

router.post("/", authenticateUser, async (req, res) => {
  const { email, subject, message } = req.body;
  const userId = req.userId;
  try {
    const user = await User.findById(userId);
    console.log("user is ", user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const newContact = new Contact({
      email,
      subject,
      message,
    });
    const savedContact = await newContact.save();
    res
      .status(200)
      .json({ message: "Contact saved successfully", data: savedContact });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
