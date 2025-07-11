import { Router } from "express";
import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointmentStatus,
  deleteAppointment,
} from "../controllers/appointment-controller";

const router = Router();

// Create a new appointment
router.post("/", createAppointment);

// Get all appointments
router.get("/", getAppointments);

// Get appointment by ID
router.get("/:id", getAppointmentById);

// Update appointment status
router.patch("/:id/status", updateAppointmentStatus);

// Delete appointment
router.delete("/:id", deleteAppointment);

export default router;
