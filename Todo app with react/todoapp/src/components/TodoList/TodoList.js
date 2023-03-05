import React, { useRef } from "react";
import "../TodoList/TodoList.css";

function render(firstName, birthYear, callback) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - Number(birthYear);
  const template = `${firstName} bu yil ${age} yoshda!`;
  callback(template);
}

export default function TodoList() {
  const cardRef = useRef();
  // render("Ibrohim", 2002, function (myTemplate) {
  //   console.log(myTemplate);
  // });
  return (
    <div className="cards" ref={cardRef}>
      <div className="card">
        <div className="form_input">
          <form className="form">
            <input type="checkbox" id="todoInput" />
            <label htmlFor="todoInput">Hello</label>
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

export { render };
