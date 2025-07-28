import React, { useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";
import todos, { heading } from "./todoData";

const TodoList = () => {
  const [tasks, setTasks] = useState(todos);
  const [filter, setFilter] = useState("All");

  const handleAddTask = (title) => {
    setTasks([
      ...tasks,
      { id: new Date().getTime(), title, done: false, rating: 0 },
    ]);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const handleRatingTask = (id, rate) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, rating: rate } : task
      )
    );
  };


  const handleChangeTitleTask = (id, title) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title } : task
      )
    );
  };

  const filtersObject = {
    All: () => true,
    Todo: (task) => !task.done,
    Done: (task) => task.done,
  }



  return (
    <div className="todo">
      <h1 style={{ color: "dodgerblue", textAlign: "center" }}>
        {heading.title}
      </h1>
      <h2>{heading["subtitle"]}</h2>

      <TodoForm handleAddTask={handleAddTask} />
      <TodoFilter filter={filter} setFilter={setFilter} filtersObject={filtersObject} />

      <div>
        {tasks.filter(filtersObject[filter]).map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            handleDeleteTask={handleDeleteTask}
            handleToggleTask={handleToggleTask}
            handleRatingTask={handleRatingTask}
            handleChangeTitleTask={handleChangeTitleTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
