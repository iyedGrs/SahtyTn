import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import contactRoute from "./routes/contact";

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Adjust this to your frontend URL
  })
);
app.use(express.json());

// Routes
app.use("/contact", contactRoute);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    service: "messaging-service",
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

const PORT = process.env.MESSAGING_SERVICE_PORT || 5002;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("Messaging Service: Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Messaging Service is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Messaging Service: Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

startServer();

export default app;
