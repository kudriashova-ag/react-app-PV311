import React, { useState } from "react";
import StarRating from "../StarRating/StarRating";

const TodoItem = ({
  task,
  handleDeleteTask,
  handleToggleTask,
  handleRatingTask,
  handleChangeTitleTask,
}) => {
  console.log('TodoItem rendered');
  
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  
  const handleSave = () => { 
    if(newTitle.trim().length === 0) {
      handleDeleteTask(task.id);
      return;
    }

    handleChangeTitleTask(task.id, newTitle);
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <div className="task">
        <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
        <button onClick={handleSave}>Save</button>
      </div>
    );
  }

  return (
    <div className="task">
      <input
        type="checkbox"
        defaultChecked={task.done}
        onClick={() => handleToggleTask(task.id)}
      />
      <div onClick={() => setIsEditing(true)}>{task.done ? <del>{task.title}</del> : <span>{task.title}</span>}</div>
      <StarRating
        rate={task.rating}
        handleRatingTask={handleRatingTask}
        id={task.id}
      />
      <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default React.memo(TodoItem);