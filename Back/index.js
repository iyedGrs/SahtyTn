const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const authRoute = require("./Routes/auth");
const contactRoute = require("./Routes/contact");
dotenv.config();

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON request bodies

// Your other middleware and routes here
app.use("/api/auth", authRoute);
app.use("/api/contact", contactRoute);
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1); // Exit the process with failure
  }
};

startServer();
