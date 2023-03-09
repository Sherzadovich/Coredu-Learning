import React, { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import "../TodoList/TodoList.css";

export default function TodoList({ id, task, isComplete, isEditing }) {
  const { toggleComplete, deleteTodo } = useContext(TodoContext);
  return isEditing ? (
    <form></form>
  ) : (
    <div className="cards">
      <div className="card">
        <div className="form_input">
          <form className="form">
            <input
              type="checkbox"
              id={id}
              checked={isComplete}
              onChange={() => toggleComplete(id)}
            />
            <label htmlFor={id}>{task}</label>
          </form>
        </div>
        <div className="form_button">
          <button className="edit_btn">Edit</button>
          <button className="delete_btn" onClick={() => deleteTodo(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
