import React from "react";

const TaskList = ({ tasks, toggleTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{ textDecoration: task.done ? "line-through" : "none" }}
        >
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => toggleTask(task.id)}
          />
          {task.task}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
