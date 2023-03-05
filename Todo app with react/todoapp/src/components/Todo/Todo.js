import React, { useRef } from "react";
import { render } from "../TodoList/TodoList";
import "../Todo/Todo.css";

export default function Todo() {
  const formRef = useRef();

  let todo = JSON.parse(localStorage.getItem("User")) || [];

  const ref = (event) => {
    event.preventDefault();
    const task = event.target[0].value;

    const todoObj = {
      id: todo.length,
      task: task,
      isCompleted: false,
      isEditing: false,
    };

    todo.push(todoObj);
    localStorage.setItem("User", JSON.stringify(todo));
    console.log(todo);
  };

  return (
    <div className="todo">
      <h1>Todo App</h1>
      <form id="form" ref={formRef} onSubmit={ref}>
        <input type="text" />
        <button
          className="btn"
          onClick={render("Ibrohim", 2002, function (myTemplate) {
            console.log(myTemplate);
          })}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}
