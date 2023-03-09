import React, { useContext, useRef } from "react";
import TodoContext from "../../context/TodoContext";
import "../TodoList/TodoList.css";

export default function TodoList({ id, task, isComplete, isEditing }) {
  const { toggleComplete, deleteTodo, toggleEditing, editTodo } =
    useContext(TodoContext);
  return isEditing ? (
    <form id="second_form" onSubmit={(event) => editTodo(event, id)}>
      <input type="text" value={task} onChange={() => toggleEditing(task)} />
      <div>
        <button type="submit" className="save_button">
          Save
        </button>
        <button
          type="submit"
          className="cancel_button"
          onClick={() => toggleEditing(id)}
        >
          Cancel
        </button>
      </div>
    </form>
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
          <button className="edit_btn btn" onClick={() => toggleEditing(id)}>
            Edit
          </button>
          <button className="delete_btn btn" onClick={() => deleteTodo(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
