import { Request, Response } from "express";
import Appointment from "../models/appointment";
import { IAppointment } from "../types";
import { checkUserExists, checkSpecialityExists } from "../utils/validation";

// Create a new appointment
export const createAppointment = async (req: Request, res: Response) => {
  try {
    const { patientId, doctorId, date, time, speciality, reason, notes } = req.body;
    // Basic input validation
    if (!patientId || !doctorId || !date || !time) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    // Check if patient exists and is a patient
    const patientExists = await checkUserExists(patientId, "patient");
    if (!patientExists) {
      return res.status(404).json({ error: "Patient does not exist." });
    }

    // Check if doctor exists and is a doctor
    const doctorExists = await checkUserExists(doctorId, "doctor");
    if (!doctorExists) {
      return res.status(404).json({ error: "Doctor does not exist." });
    }

    // If speciality is provided, check if it exists
    if (speciality) {
      const specialityExists = await checkSpecialityExists(speciality);
      if (!specialityExists) {
        return res.status(404).json({ error: "Speciality does not exist." });
      }
    }

    // Create appointment
    const appointmentData: IAppointment = {
      patientId,
      doctorId,
      date,
      time,
      speciality,
      reason,
      notes,
      status: req.body.status || "pending",
    } as IAppointment;
    const appointment = await Appointment.create(appointmentData);
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

// Get all appointments
export const getAppointments = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const [appointments, total] = await Promise.all([
      Appointment.find().skip(skip).limit(limit),
      Appointment.countDocuments()
    ]);

    res.status(200).json({
      appointments,
      total,
      page,
      totalPages: Math.ceil(total / limit)
    });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Get appointment by ID
export const getAppointmentById = async (req: Request, res: Response) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ error: "Appointment not found" });
    }
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Update appointment status
export const updateAppointmentStatus = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!appointment) {
      return res.status(404).json({ error: "Appointment not found" });
    }
    res.status(200).json(appointment);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

// Delete appointment
export const deleteAppointment = async (req: Request, res: Response) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointment) {
      return res.status(404).json({ error: "Appointment not found" });
    }
    res.status(200).json({ message: "Appointment deleted" });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
