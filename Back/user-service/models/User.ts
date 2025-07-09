import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "../types";

export interface IUserDocument extends IUser, Document {}

const UserSchema: Schema = new Schema(
  {
    username: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    date: { type: String, default: Date.now },
    role: { type: String, required: true },
    id_doctor: { type: String, default: null },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IUserDocument>("User", UserSchema);
