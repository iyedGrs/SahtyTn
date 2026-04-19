import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/User";
import jwt from "jsonwebtoken";
import { IAuthResponse, IUserRegistration, IUserResponse } from "../types";
import { IUserLogin } from "../types";

const buildUserResponse = (user: any): IUserResponse => ({
  _id: user._id ? user._id.toString() : "",
  username: user.username,
  email: user.email,
  date: user.date,
  role: user.role,
  id_doctor: user.id_doctor,
});

export const register = async (req: Request, res: Response): Promise<void> => {
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

    if (!email || !password || !role) {
      res.status(400).json({ message: "Email, password and role are required" });
      return;
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email: normalizedEmail });
    const doctorId = id_doctor || null;

    if (existingUser) {
      res.status(400).json({ message: "Email already exists" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email: normalizedEmail,
      password: hashedPassword,
      date: date,
      role: role,
      id_doctor: doctorId,
    });

    const user = await newUser.save();
    const accessToken = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET as string,
      { expiresIn: "30d" }
    );

    const isProduction = process.env.NODE_ENV === "production";
    res.cookie("token", accessToken, {
      httpOnly: true,
      sameSite: isProduction ? "none" : "lax",
      secure: isProduction,
      maxAge: 30 * 24 * 60 * 60 * 1000,
      path: "/",
    });

    const response: IAuthResponse = {
      user: buildUserResponse(user),
      token: accessToken,
    };

    res.status(201).json(response);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password }: IUserLogin = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "Email and password are required" });
      return;
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Find the user by email
    const user = await User.findOne({ email: normalizedEmail });
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
    // const userResponse: IUserResponse = {
    //   _id: user._id ? user._id.toString() : "",
    //   username: user.username,
    //   email: user.email,
    //   date: user.date,
    //   role: user.role,
    //   id_doctor: user.id_doctor,
    // };

    // const response: IAuthResponse = {
    //   user: userResponse,
    //   token: accessToken,
    // };

    // res.status(200).json(response);
    const isProduction = process.env.NODE_ENV === "production";
    res.cookie("token", accessToken, {
      httpOnly: true,
      sameSite: isProduction ? "none" : "lax",
      secure: isProduction,
      maxAge: 30 * 24 * 60 * 60 * 1000,
      path: "/",
    });

    const response: IAuthResponse = {
      user: buildUserResponse(user),
      token: accessToken,
    };

    res.status(200).json(response);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const currentUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const token = req.cookies.token;
    if (!token) {
      res.status(401).json({ message: "No token" });
      return;
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: string;
    };

    const userId = decoded.id;
    const user = await User.findById(userId).select("-password");

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.status(200).json(user);
  } catch (err: any) {
    console.error(err.message);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
