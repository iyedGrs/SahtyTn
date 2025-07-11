import mongoose, { Schema, Document } from "mongoose";

export interface ISpeciality extends Document {
  type_name: string;
  since_when: Date;
}

const SpecialitySchema = new Schema<ISpeciality>({
  type_name: { type: String, required: true },
  since_when: { type: Date, required: true },
});

const Speciality = mongoose.model<ISpeciality>("Speciality", SpecialitySchema);

export default Speciality;
