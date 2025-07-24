import React from "react";
import StarRating from "../StarRating/StarRating";

const TodoItem = ({ task, handleDeleteTask }) => {
  return (
    <div className="task">
      <input type="checkbox" defaultChecked={task.done} />
      {task.done ? <del>{task.title}</del> : <span>{task.title}</span>}
      <StarRating rate={task.rating} />
      <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;