import React from 'react';

const TodoItem = () => {
    return (
      <div className="task">
        <input type="checkbox" />
        <span>Work</span>
        <button>Delete</button>
      </div>
    );
}

export default TodoItem;
