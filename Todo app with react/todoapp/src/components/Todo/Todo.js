import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import TodoContext from "../../context/TodoContext";
import "../Todo/Todo.css";

export default function Todo() {
  const { addTodo } = useContext(TodoContext);
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    addTodo(data.task);
  };
  return (
    <div className="todo">
      <h1>Todo App</h1>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("task")} />
        <button className="btn">Add Todo</button>
      </form>
      <div className="todo_history">
        <a href="#">History</a>
      </div>
      <div className="todo_reminder">
        <p>
          You can return your <br />
          deleted todos from here!
        </p>
      </div>
    </div>
  );
}
