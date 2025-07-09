import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import { IJwtPayload } from "../types";

// Extend the Request interface to include userId
declare global {
  namespace Express {
    interface Request {
      userId?: any;
    }
  }
}

const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  console.log("middleware called ");
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as IJwtPayload;
    req.userId = await User.findById(decoded.id).select("-password");

    if (!req.userId) {
      res.status(404).json({ message: "User not found, failed to authorize" });
      return;
    }

    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

export default authenticateUser;
