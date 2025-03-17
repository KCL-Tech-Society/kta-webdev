import React, { useEffect, useState } from "react";
import HabitList from "../components/HabitList";
import HabitForm from "../components/HabitForm";

const Home = () => {
  const [habits, setHabits] = useState([]);

  const getHabits = async () => {
    await fetch("/api/habits")
      .then((res) => res.json())
      .then((data) => setHabits(data));
  };

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
        if (habit.id === id) {
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

  const deleteHabit = async (id) => {
    try {
      const response = await fetch(`/api/habits/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete habit");
      }

      const updatedHabits = habits.filter((habit) => habit.id !== id);
      setHabits(updatedHabits);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

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

  useEffect(() => {
    getHabits();
  }, []);

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
