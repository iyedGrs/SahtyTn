import express, { Request, Response, Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";
import {
  IUserRegistration,
  IUserLogin,
  IAuthResponse,
  IUserResponse,
} from "../types";

const router: Router = express.Router();

// REGISTER
router.post("/register", async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      username,
      email,
      password,
      date,
      role,
      id_doctor,
    }: IUserRegistration = req.body;
    console.log(req.body);

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });
    const doctorId = id_doctor || null;

    if (existingUser) {
      res.status(400).json({ message: "Email already exists" });
      return;
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
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// LOGIN
router.post("/login", async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password }: IUserLogin = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // Compare the password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      res.status(400).json({ message: "Wrong password" });
      return;
    }

    // Generate JWT token
    const accessToken = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET as string,
      { expiresIn: "30d" } // Token expires in 30 days
    );

    // Respond with the access token
    const userResponse: IUserResponse = {
      _id: user._id?.toString(),
      username: user.username,
      email: user.email,
      date: user.date,
      role: user.role,
      id_doctor: user.id_doctor,
    };

    const response: IAuthResponse = {
      user: userResponse,
      token: accessToken,
    };

    res.status(200).json(response);
  } catch (err: any) {
    console.error(err.message); // Log the error for debugging purposes
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
