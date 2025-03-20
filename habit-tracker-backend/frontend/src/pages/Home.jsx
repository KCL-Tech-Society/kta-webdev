import React, { useEffect, useState } from "react";
import HabitList from "../components/HabitList";
import HabitForm from "../components/HabitForm";

/**
 * @description Home page component for the Habit Tracker app
 * @returns {JSX.Element}
 */
const Home = () => {
  // useState hook to store the habits in the component's state
  const [habits, setHabits] = useState([]);

  // GET Function to fetch habits from the backend
  const getHabits = async () => {
    await fetch("/api/habits")
      .then((res) => res.json())
      .then((data) => setHabits(data));
  };

  // PUT Function to update a habit, takes the habit ID and the updated data
  const updateHabit = async (id, data) => {
    try {
      const response = await fetch(`/api/habits/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to update habit");
      }

      const updatedHabits = habits.map((habit) => {
        if (habit._id === id) {
          return { ...habit, ...data };
        }

        return habit;
      });

      setHabits(updatedHabits);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  // DELETE Function to delete a habit, takes the habit ID
  const deleteHabit = async (id) => {
    try {
      const response = await fetch(`/api/habits/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete habit");
      }

      const updatedHabits = habits.filter((habit) => habit._id !== id);
      setHabits(updatedHabits);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  // POST Function to add a new habit, takes the habit data
  const handleAddHabit = async (data) => {
    try {
      const response = await fetch("/api/habits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const habit = await response.json();
      setHabits([...habits, habit]);
      alert("Habit added successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  // useEffect hook to fetch habits when the component loads for the first time
  useEffect(() => {
    getHabits();
  }, []);

  // Render the Home component with the HabitList and HabitForm components
  return (
    <div>
      <h1>Habit Tracker</h1>
      <HabitList
        habits={habits}
        updateHabit={updateHabit}
        deleteHabit={deleteHabit}
      />
      <HabitForm handleAddHabit={handleAddHabit} />
    </div>
  );
};

export default Home;
