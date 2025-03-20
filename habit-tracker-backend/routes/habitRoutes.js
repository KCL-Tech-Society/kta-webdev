import express from "express";
import {
  getHabits,
  createHabit,
  updateHabit,
  deleteHabit,
} from "../controllers/habitController.js";

// Create a new router. A router is like a mini express app that we can use to define routes
const router = express.Router();

router.get("/", getHabits); // GET request to /api/habits will call the getHabits function
router.post("/", createHabit); // POST request to /api/habits will call the createHabit function
router.put("/:id", updateHabit); // PUT request to /api/habits/:id will call the updateHabit function
router.delete("/:id", deleteHabit); // DELETE request to /api/habits/:id will call the deleteHabit function

export default router;

// Old way of exporting -> module.exports = router;
