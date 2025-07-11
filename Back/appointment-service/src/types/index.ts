import {IUser} from '@user-service/types';
import { Document } from 'mongoose';
export interface IDoctor extends IUser {
  specialty?: string;
  phone?: string;
  address?: string;
}

// Appointment status
export type AppointmentStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

// Request body for creating an appointment
export interface CreateAppointmentRequest {
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  reason?: string;
}

// Request body for updating appointment status
export interface UpdateAppointmentStatusRequest {
  appointmentId: string;
  status: AppointmentStatus;
}


import mongoose from 'mongoose';
export interface IAppointment extends Document {
  patientId: mongoose.Types.ObjectId | string;
  doctorId: mongoose.Types.ObjectId | string;
  specialty?: mongoose.Types.ObjectId | string;
  date: Date;
  time: string;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  reason?: string;
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}