import React from "react";
import Habit from "./Habit";

/* HabitList displays a table of habits. It maps over
the habits array and renders a Habit component for each habit */

/**
 * @description HabitList displays a table of habits. It maps over
 * the habits array and renders a Habit component for each habit.
 * @param {Object[]} habits - Array of habit objects.
 * @param {Function} updateHabit - Function to update a habit.
 * @param {Function} deleteHabit - Function to delete a habit.
 * @returns {JSX.Element} A table of habits.
 */
const HabitList = ({ habits, updateHabit, deleteHabit }) => {
  const sortedHabits = habits.sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Created At</th>
          <th>Name</th>
          <th>Habit</th>
          <th>Completed</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sortedHabits.map((habit) => (
          <tr key={habit.id}>
            <Habit
              id={habit.id}
              createdAt={habit.createdAt}
              name={habit.name}
              habit={habit.habit}
              completed={habit.completed}
              updateHabit={updateHabit}
              deleteHabit={deleteHabit}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HabitList;
