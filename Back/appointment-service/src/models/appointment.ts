import mongoose, { Schema } from "mongoose";
import { IAppointment } from "../types";

const AppointmentSchema = new Schema<IAppointment>(
  {
    patientId: { 
      type: Schema.Types.ObjectId, 
      ref: "User", 
      required: true },
    doctorId: { 
      type: Schema.Types.ObjectId, 
      ref: "User", 
      required: true },
    date: { 
      type: Date, required: true },
    time: { 
      type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled", "completed"],
      default: "pending",
    },
    speciality: { 
      type: Schema.Types.ObjectId,
      ref: "Speciality",
      required: false},
  },
  { timestamps: true }
);

const Appointment = mongoose.model<IAppointment>("Appointment", AppointmentSchema);

export default Appointment;
