import React from "react";

const TodoItem = ({ task }) => {

  return (
    <div className="task">
      <input type="checkbox" defaultChecked={task.done} />
      <span>{task.title}</span>
      <button>Delete</button>
    </div>
  );
};

export default TodoItem;