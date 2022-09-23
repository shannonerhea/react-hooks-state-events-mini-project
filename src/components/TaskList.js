import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const taskList = tasks.map((task) => (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      onDeleteTask={onDeleteTask}
    />
  ));
  return <div className="tasks">{taskList}</div>;
}

export default TaskList;

// import React from "react";
// //import Task from "./Task"

// function TaskList({ text, category, onDeleteTask }) {
//   function handleClick() {
//     onDeleteTask(text);
//   }

//   return (
//     <div className="task">
//       <div className="label">{category}</div>
//       <div className="text">{text}</div>
//       <button onClick={handleClick} className="delete">
//         X
//       </button>
//     </div>
//   );
// }

// export default TaskList;
