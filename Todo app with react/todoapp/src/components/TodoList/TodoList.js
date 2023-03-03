import React from "react";
import "../TodoList/TodoList.css";

export default function TodoList() {
  return (
    <div className="container">
      <div className="card">
        <div className="form_input">
          <form className="form">
            <input type="checkbox" id="todoInput" />
            <label htmlFor="todoInput">qwrew</label>
          </form>
        </div>
        <div className="form_button">
          <button className="edit_btn">Edit</button>
          <button className="delete_btn">Delete</button>
        </div>
      </div>
    </div>
  );
}
