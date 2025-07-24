import React from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";

const todos = [
  {id: 1, title: "Work", done: true, rating: 0 },
  {id: 2, title: "Gym", done: false, rating: 5 },
  {id: 3, title: "Shop", done: false, rating: 3 },
];


const TodoList = () => {
  const heading = {
    title: "Todo List",
    subtitle: "React App"
  };

  return (
    <div className="todo">
      <h1 style={{ color: "dodgerblue", textAlign: "center" }}>{heading.title}</h1>
      <h2>{heading['subtitle']}</h2>

      <TodoForm />
      <TodoFilter />

      <div>
        {todos.map((task) => <TodoItem key={task.id} task={task} />) }
      </div>
    </div>
  );
};

export default TodoList;
