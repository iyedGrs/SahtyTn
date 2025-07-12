import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRoute from "./routes/auth";
import otpRoute from "./routes/otp";

dotenv.config();

const app = express();

// Middleware
// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoute);
app.use("/api/otp", otpRoute);
app.use("/api/user", require("./routes/user-routes").default);

// Health check endpoint
app.get("/health", (req: express.Request, res: express.Response) => {
  res.status(200).json({
    service: "user-service",
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

const PORT = process.env.USER_SERVICE_PORT || 5001;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("User Service: Connected   to  to MongoDBe");

    app.listen(PORT, () => {
      console.log(`User Service running it on port ${PORT}`);
    });
  } catch (error) {
    console.error("User Service: Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

startServer();

export default app;
