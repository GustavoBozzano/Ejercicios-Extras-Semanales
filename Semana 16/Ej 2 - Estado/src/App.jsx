import React from "react";
import { useState } from "react";
import TaskList from "./TaskList";

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

  return (
    <>
      <h1>Lista de Tareas:</h1>
      <TaskList tasks={tasks} />
    </>
  );
};

export default App;
