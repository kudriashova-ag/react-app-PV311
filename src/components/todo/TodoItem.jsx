import React from "react";
import StarRating from "../StarRating/StarRating";

const TodoItem = ({ task }) => {

  return (
    <div className="task">
      <input type="checkbox" defaultChecked={task.done} />
      <span>{task.title}</span>
      <StarRating rate={task.rating} />
      <button>Delete</button>
    </div>
  );
};

export default TodoItem;