import React from "react";
import "../Todo/Todo.css";

export default function Todo() {
  return (
    <div className="todo">
      <h1>Todo App</h1>
      <form>
        <input type="text" />
        <button>Add Todo</button>
      </form>
    </div>
  );
}
