import React from "react";

/**
 * @description Habit component displays a single habit in a table row.
 * @param {string} id - Habit ID
 * @param {string} createdAt - Date the habit was created
 * @param {string} name - Name of the person tracking the habit
 * @param {string} habit - Habit to be tracked
 * @param {boolean} completed - Whether the habit has been completed
 * @param {Function} updateHabit - Function to update a habit
 * @param {Function} deleteHabit - Function to delete a habit
 * @returns {JSX.Element} Habit component
 */
const Habit = ({
  id,
  createdAt,
  name,
  habit,
  completed,
  updateHabit,
  deleteHabit,
}) => {
  // Function to handle checkbox change, updates habit completed status
  const handleCheckboxChange = (e) => {
    updateHabit(id, { completed: e.target.checked });
  };

  // Render habit details in table cells with checkbox and delete button
  return (
    <>
      <td>{createdAt}</td>
      <td>{name}</td>
      <td>{habit}</td>
      <td>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCheckboxChange}
        />
      </td>
      <td>
        <button onClick={() => deleteHabit(id)}>Delete</button>
      </td>
    </>
  );
};

export default Habit;
