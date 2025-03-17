import React from "react";

/* Habit component displays a single habit in a table row.
It receives the habit data as props and renders the habit
details in table cells. It also includes a checkbox to mark
the habit as completed and a delete button to delete the
habit. The handleCheckboxChange function updates the habit's
completed status when the checkbox is toggled. The Habit
component is used in the HabitList component to render
each habit in the list. */

/**
 * @description Habit component displays a single habit in a table row.
 * @param {string} id
 * @param {string} createdAt
 * @param {string} name
 * @param {string} habit
 * @param {boolean} completed
 * @param {Function} updateHabit
 * @param {Function} deleteHabit
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
  const handleCheckboxChange = (e) => {
    updateHabit(id, { completed: e.target.checked });
  };

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
