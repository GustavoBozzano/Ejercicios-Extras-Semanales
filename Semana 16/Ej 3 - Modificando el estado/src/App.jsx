import React from "react";
import { useState } from "react";
import TaskList from "./TaskList";
import NewTask from "./NewTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Ir a la compra",
      done: false,
    },
    {
      id: 2,
      task: "Hacer ejercicios de react",
      done: true,
    },
  ]);

  const addTask = (newTask) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        task: newTask,
        done: false,
      },
    ]);
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <>
      <h1>Lista de Tareas:</h1>
      <NewTask addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </>
  );
};

export default App;
