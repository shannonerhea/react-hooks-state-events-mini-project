import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const taskList = tasks.map((task) => (
    <Task key={task.text}
    />
  ))
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
