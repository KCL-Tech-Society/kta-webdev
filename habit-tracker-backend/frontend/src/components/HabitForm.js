import React from "react";
import { useForm } from "react-hook-form";

/**
 * @description HabitForm component displays a form to add a new habit.
 * It uses the useForm hook from react-hook-form to manage form state.
 * @param {Function} handleAddHabit - Function to add a new habit
 * @returns {JSX.Element} - HabitForm component
 */
const HabitForm = ({ handleAddHabit }) => {
  // useForm hook to manage form state and validation from react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle form submission, calls handleAddHabit with form data
  const onSubmit = (data) => {
    handleAddHabit(data);
  };

  // Render form with input fields for name and habit, and submit button
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input
          type="text"
          // Register input with react-hook-form and add validation rules
          {...register("name", { required: "Name is required" })}
        />
      </label>
      {/* Display error message if there are errors, e.g., if name is empty */}
      {errors.name && <p>{errors.name.message}</p>}

      <label>
        Habit:
        <input
          type="text"
          {...register("habit", { required: "Habit is required" })}
        />
      </label>
      {errors.habit && <p>{errors.habit.message}</p>}

      {/* Submit button to add habit, must be of type "submit" to trigger onSubmit */}
      <button type="submit">Add Habit</button>
    </form>
  );
};

export default HabitForm;
