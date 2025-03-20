import { model, Schema } from "mongoose";

// Schema for the habit
const habitSchema = new Schema({
  // MongoDB will automatically generate a _id for each habit of type ObjectId
  name: {
    type: String,
    required: true,
  },
  habit: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdAt: {
    type: String,
    required: true,
  },
});

export default model("Habit", habitSchema);
