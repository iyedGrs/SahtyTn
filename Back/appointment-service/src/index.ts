import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import appointment_routes from "./routes/appointment-routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/appointment", appointment_routes);

const PORT = process.env.APPOINTMENT_SERVICE_PORT || 5002;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("Appointment Service : Connected   to  to MongoDBe");

    app.listen(PORT, () => {
      console.log(`Appointment Service  running it on port ${PORT}`);
    });
  } catch (error) {
    console.error("Appointment Service : Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

startServer();

export default app;
