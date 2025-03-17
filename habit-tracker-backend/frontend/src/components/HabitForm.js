import React from "react";
import { useForm } from "react-hook-form";

/**
 * @description HabitForm component displays a form to add a new habit.
 * It uses the useForm hook from react-hook-form to manage form state.
 * @param {Function} handleAddHabit
 * @returns {JSX.Element} HabitForm component
 */
const HabitForm = ({ handleAddHabit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleAddHabit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
        />
      </label>
      {errors.name && <p>{errors.name.message}</p>}

      <label>
        Habit:
        <input
          type="text"
          {...register("habit", { required: "Habit is required" })}
        />
      </label>
      {errors.habit && <p>{errors.habit.message}</p>}

      <button type="submit">Add Habit</button>
    </form>
  );
};

export default HabitForm;
