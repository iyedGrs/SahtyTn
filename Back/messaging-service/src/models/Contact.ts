import mongoose, { Schema, Document } from "mongoose";
import { IContactRequest } from "../types";

export interface IContactDocument extends Document, IContactRequest {}

const ContactSchema: Schema = new Schema({
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = mongoose.model<IContactDocument>("Contact", ContactSchema);

export default Contact;
