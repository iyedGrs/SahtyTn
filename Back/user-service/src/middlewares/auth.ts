import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies.token;
  if (!token) {
    return res.sendStatus(401).json({ message: "Unauthorized" });
  }
  jwt.verify(token, process.env.JWT_SECRET!, (err: any, user: any) => {
    if (err) {
      return res.sendStatus(403).json({ message: "Forbidden" });
    }
    (req as any).user = user;
    next();
  });
}
