import React, { useContext, useState } from "react";
import StarRating from "../StarRating/StarRating";
import LanguageContext from "../../contexts/LanguageContext";

const TodoItem = ({
  task,
  handleDeleteTask,
  handleToggleTask,
  handleRatingTask,
  handleChangeTitleTask,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const { t } = useContext(LanguageContext);

  
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
      <div onClick={() => setIsEditing(true)}>
        {task.done ? <del>{task.title}</del> : <span>{task.title}</span>}
      </div>
      <StarRating
        rate={task.rating}
        handleRatingTask={handleRatingTask}
        id={task.id}
      />
      <button onClick={() => handleDeleteTask(task.id)}>{t("delete")}</button>
    </div>
  );
};

export default React.memo(TodoItem);