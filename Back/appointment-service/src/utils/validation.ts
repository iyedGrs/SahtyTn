import mongoose from "mongoose";
import Speciality from "../models/speciality";
import axios from "axios";
 

const USER_SERVICE_URL = process.env.USER_SERVICE_URL || "http://localhost:3000";

export const checkUserExists = async (userId: string, role?: string) => {
  if (!mongoose.Types.ObjectId.isValid(userId)) return false;
  try {
    const response = await axios.get(
      `${USER_SERVICE_URL}/api/user/users/${userId}`
    );
    const user = response.data;
    if (!user) return false;
    if (role && user.role !== role) return false;
    return true;
  } catch (error) {
    return false;
  }
};


export const checkSpecialityExists = async (specialityId: string) => {
  if (!mongoose.Types.ObjectId.isValid(specialityId)) return false;
  const speciality = await Speciality.findById(specialityId);
  return !!speciality;
};
