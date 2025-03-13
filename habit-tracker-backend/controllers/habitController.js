let habits = [];

// GET /habits
const getHabits = (req, res) => {
  res.json(habits);
};

const createHabit = (req, res) => {
  const newHabit = {
    id: habits.length + 1,
    name: req.body.name,
    habit: req.body.habit,
    completed: false,
  };

  habits.push(newHabit);
  res.status(201).json(newHabit);
};

const updateHabit = (req, res) => {
  console.log(req.params.id);
  const habit = habits.find((h) => h.id == req.params.id);
  console.log(habit);
  if (!habit)
    return res.status(404).json({
      message: "Habit not found",
    });

  Object.assign(habit, req.body);
  res.status(200).json(habit);
};

const deleteHabit = (req, res) => {
  const habit = habits.filter((habit) => habit.id !== req.params.id);
  if (!habit)
    return res.status(404).json({
      message: "Habit not found",
    });

  habits = habits.filter((habit) => habit.id !== req.params.id);
  res.status(200).json({
    message: "Habit deleted successfully",
  });
};

export { getHabits, createHabit, updateHabit, deleteHabit };
