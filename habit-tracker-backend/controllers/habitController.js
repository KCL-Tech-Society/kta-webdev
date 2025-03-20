import Habit from "../models/habitSchema.js";

/**
 * @description Get all habits from the database
 * @route GET /api/habits
 * @returns {Array} Array of habits
 */
const getHabits = async (req, res) => {
  try {
    const habits = await Habit.find({});
    return res.status(200).json(habits);
  } catch (error) {
    return res.status(400).json({
      message: "Error getting habits",
      error: error.message,
    });
  }
};

/**
 * @description Create a new habit in the database
 * @route POST /api/habits
 * @param {String} name The name of the person tracking the habit
 * @param {String} habit The habit to be tracked
 * @param {String} createdAt The date the habit was created
 * @param {Boolean} completed Whether the habit has been completed, default is false
 * @returns {Object} The newly created habit
 */
const createHabit = async (req, res) => {
  try {
    const habit = await Habit.create(req.body);
    return res.status(201).json(habit);
  } catch (error) {
    return res.status(400).json({
      message: "Error creating habit",
      error: error.message,
    });
  }
};

/**
 * @description Update a habit in the database
 * @route PUT /api/habits/:id
 * @param {String} id The ID of the habit
 * @param {String} name The name of the person tracking the habit, optional
 * @param {String} habit The habit to be tracked, optional
 * @param {String} createdAt The date the habit was created, optional
 * @param {Boolean} completed Whether the habit has been completed, optional
 * @returns {Object} The updated habit
 */
const updateHabit = async (req, res) => {
  try {
    const habit = await Habit.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        ...req.body,
        completed: req.body.completed,
      },
      {
        new: true,
      }
    );

    if (!habit) {
      return res.status(404).json({
        message: "Habit not found.",
      });
    }

    return res.status(200).json(habit);
  } catch (error) {
    return res.status(400).json({
      message: "Error updating habit",
      error: error.message,
    });
  }
};

/**
 * @description Delete a habit from the database
 * @route DELETE /api/habits/:id
 * @param {String} id The ID of the habit
 * @returns {Object} Success
 */
const deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findOne({
      _id: req.params.id,
    });

    if (!habit) {
      return res.status(404).json({
        message: "Habit not found.",
      });
    }

    await habit.deleteOne();

    return res.status(200).json({
      message: "Habit deleted successfully.",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error deleting habit",
      error: error.message,
    });
  }
};

export { getHabits, createHabit, updateHabit, deleteHabit };
