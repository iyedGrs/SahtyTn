import express, { Request, Response, Router } from "express";
import { IContactRequest } from "../types";

const router: Router = express.Router();

// Contact route
router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, message, phone }: IContactRequest = req.body;

    // Basic validation
    if (!name || !email || !message) {
      res
        .status(400)
        .json({ message: "Name, email, and message are required" });
      return;
    }

    // Here you would typically save to a database
    // For now, we'll just log and return success
    console.log("Contact form submission:", { name, email, message, phone });

    res.status(200).json({
      message: "Contact form submitted successfully",
      data: { name, email, message, phone },
    });
  } catch (error: any) {
    console.error("Contact form error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
