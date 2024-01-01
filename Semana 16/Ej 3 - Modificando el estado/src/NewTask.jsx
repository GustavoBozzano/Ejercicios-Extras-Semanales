import React, { useState } from "react";

const NewTask = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value.slice(0, 100));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTask("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTask} onChange={handleChange} />
      <button type="submit">Agregar Tarea: </button>
    </form>
  );
};

export default NewTask;
