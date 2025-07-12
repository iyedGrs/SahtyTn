import express, { Request, Response, Router } from "express";
import { IContactRequest } from "../types";
import Contact from "../models/Contact";

import { createTransporter } from "../../../common/mailer";

import nodemailer from "nodemailer";

export const contactController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, message, subject }: IContactRequest = req.body;
    // Basic validation
    if (!email || !message || !subject) {
      res
        .status(400)
        .json({ message: "Email, message, and subject are required" });
      return;
    }
    // add the contact to the database
    const newContact = new Contact({
      email,
      message,
      subject,
    });
    const contact = await newContact.save();

    // add in the nodemailer logic to send the email to the user to inform them that their message has been received
    const transporter = createTransporter();

    await transporter.verify();
    console.log("Server is ready to take our messages");
    try {
      const info = await transporter.sendMail({
        from: "<tnsahty@gmail.com>",
        to: email,
        subject: "Thank You for Contacting SahtyTN!",
        text: `Thank you for reaching out to SahtyTN. We have received your message and will get back to you as soon as possible.\n\nYour message: ${message}`,
        html: `
    <div style="font-family: Arial, sans-serif; background: #f7f7f7; padding: 30px;">
      <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); padding: 32px;">
        <div style="text-align: center;">
          <img src="https://i.imgur.com/2yaf2wb.png" alt="SahtyTN Logo" style="width: 80px; margin-bottom: 16px;" />
          <h2 style="color: #2a7be4;">Thank You for Contacting SahtyTN!</h2>
        </div>
        <p style="font-size: 16px; color: #333;">
          Dear user,<br><br>
          We have received your message and appreciate you reaching out to us.<br>
          Our team will review your inquiry and get back to you as soon as possible.
        </p>
        <div style="background: #f1f5fb; border-left: 4px solid #2a7be4; padding: 16px; margin: 24px 0;">
          <strong>Your message:</strong>
          <p style="margin: 8px 0 0 0; color: #555;">${message}</p>
        </div>
        <p style="font-size: 15px; color: #555;">
          Best regards,<br>
          <strong>The SahtyTN Team</strong>
        </p>
        <hr style="margin: 32px 0 16px 0; border: none; border-top: 1px solid #eee;">
        <p style="font-size: 12px; color: #aaa; text-align: center;">
          &copy; ${new Date().getFullYear()} SahtyTN. All rights reserved.
        </p>
      </div>
    </div>
  `,
      });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send confirmation email" });
      return;
    }

    res.status(200).json({
      message: " form submitted successfully",
      data: contact,
    });
  } catch (error: any) {
    console.error("Contact form error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
