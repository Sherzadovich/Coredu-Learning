import React, { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import TodoList from "../TodoList/TodoList";

function TodoForm() {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      {todos.map((todo) => (
        <TodoList key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default TodoForm;
