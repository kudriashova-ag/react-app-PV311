import React, { useEffect, useReducer, useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";
import todos, { heading } from "./todoData";
import todoReducer from "./TodoReducer";

const TodoList = () => {
  const [tasks, dispatch] = useReducer(todoReducer, []);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    dispatch({ type: "setTasks", payload: storedTasks ? JSON.parse(storedTasks) : todos });

    const storedFilter = localStorage.getItem("filter");
    setFilter(storedFilter || "All");
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("filter", filter);
   }, [filter]);

  const handleAddTask = (title) => {
    dispatch({ type: "addTask", payload: { title } });
  };

  const handleDeleteTask = (id) => {
    dispatch({ type: "removeTask", payload: { id } });
  };

  const handleToggleTask = (id) => {
    dispatch({ type: "toggleTask", payload: { id } });
  };

  const handleRatingTask = (id, rate) => {
    dispatch({ type: "ratingTask", payload: { id, rating: rate } });
  };

  const handleChangeTitleTask = (id, title) => {
    dispatch({ type: "changeTitleTask", payload: { id, title } });
  };

  const filtersObject = {
    All: () => true,
    Todo: (task) => !task.done,
    Done: (task) => task.done,
  };

  return (
    <div className="todo">
      <h1 style={{ color: "dodgerblue", textAlign: "center" }}>
        {heading.title}
      </h1>
      <h2>{heading["subtitle"]}</h2>

      <TodoForm handleAddTask={handleAddTask} />
      <TodoFilter
        filter={filter}
        setFilter={setFilter}
        filtersObject={filtersObject}
      />

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
