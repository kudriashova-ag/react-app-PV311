import React, { useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";
import todos, { heading } from "./todoData";

const TodoList = () => {
  const [tasks, setTasks] = useState(todos);

  const handleAddTask = (title) => { 
    setTasks([...tasks, { id: new Date().getTime(), title, done: false, rating: 0 }]);
  }

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };



  return (
    <div className="todo">
      <h1 style={{ color: "dodgerblue", textAlign: "center" }}>
        {heading.title}
      </h1>
      <h2>{heading["subtitle"]}</h2>

      <TodoForm handleAddTask={handleAddTask} />
      <TodoFilter />

      <div>
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} handleDeleteTask={handleDeleteTask} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;


