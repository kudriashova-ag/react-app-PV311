import React, { useCallback, useContext, useEffect, useReducer, useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";
import todos, { heading } from "./todoData";
import todoReducer from "./TodoReducer";
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";

const filtersObject = {
  All: () => true,
  Todo: (task) => !task.done,
  Done: (task) => task.done,
};

const TodoList = () => {
  const [tasks, dispatch] = useReducer(todoReducer, []);
  const [filter, setFilter] = useState("All");
  const { theme } = useContext(ThemeContext);
  const { t } = useContext(LanguageContext);

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

  const handleAddTask = useCallback((title) => {
    dispatch({ type: "addTask", payload: { title } });
  },[]);

  const handleDeleteTask = useCallback((id) => {
    dispatch({ type: "removeTask", payload: { id } });
  }, []);

  const handleToggleTask = useCallback((id) => {
    dispatch({ type: "toggleTask", payload: { id } });
  },[]);

  const handleRatingTask = useCallback((id, rate) => {
    dispatch({ type: "ratingTask", payload: { id, rating: rate } });
  },[]);

  const handleChangeTitleTask = useCallback((id, title) => {
    dispatch({ type: "changeTitleTask", payload: { id, title } });
  }, []);



  return (
    <div className="todo">
      <h1 style={{ color: theme === "light" ? "dodgerblue" : "red", textAlign: "center" }}>
        { t("todolist") }
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
