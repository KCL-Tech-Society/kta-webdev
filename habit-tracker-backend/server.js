import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import habitRoutes from "./routes/habitRoutes.js";
import mongoose from "mongoose";

// Load environment variables, uses .env file in root directory
dotenv.config();

const app = express(); // Create an express app
app.use(cors()); // Will be important when we deploy our frontend and backend separately
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB");
  });

// Basic example route
app.get("/api", (req, res) => {
  res.send("Hello KCL");
});

// Routes using the habitRoutes
app.use("/api/habits", habitRoutes);

// Set the port to the environment variable PORT or 3000
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
