import React from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div className="todo">
      <h1 style={{ color: "dodgerblue", textAlign: "center" }}>Todo List</h1>

      <TodoForm />
      <TodoFilter />

      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default TodoList;
