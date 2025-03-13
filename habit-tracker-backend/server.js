// import http from "http";
// // const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, "Content-Type: text/plain");
//   res.end("Hello KCL\n");
// });

// server.listen(3000, () => console.log("Server running on port 3000"));

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import habitRoutes from "./routes/habitRoutes.js";

dotenv.config();

const app = express(); // Create an express app
app.use(cors()); // Will be important when we deploy our frontend and backend separately
app.use(express.json()); // Parse JSON bodies

app.get("/", (req, res) => {
  res.send("Hello KCL");
});

app.use("/habits", habitRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
