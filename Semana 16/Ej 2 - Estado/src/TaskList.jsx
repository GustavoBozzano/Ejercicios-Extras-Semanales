import React from "react";

const TaskList = ({ tasks }) => {
  console.log(tasks);
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{ textDecoration: task.done ? "line-through" : "none" }}
        >
          {task.task}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
