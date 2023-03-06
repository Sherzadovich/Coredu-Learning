import React, { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import Todo from "../Todo/Todo";

function TodoForm() {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default TodoForm;
