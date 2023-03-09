import { createContext, useState } from "react";
import React from "react";
import { v4 as uuid } from "uuid";
const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  let [todos, setTodos] = useState([]);
  let [deletedTodos, setDeletedTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([
      ...todos,
      { id: uuid(), task, isEditing: false, isCompleted: false },
    ]);
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(newTodos);
    localStorage.setItem("user", JSON.stringify(newTodos));
  };

  const deleteTodo = (id) => {
    const isAccepted = window.confirm("Do you really want to delete this?");
    if (isAccepted) {
      const newTodos = todos.filter((todo) => {
        if (todo.id !== id) {
          return todo;
        }
      });
      setTodos(newTodos);
    }
  };

  const toggleEditing = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isEditing: !todo.isEditing };
      }
      return todo;
    });
    setTodos(newTodos);
    localStorage.setItem("user", JSON.stringify(newTodos));
  };

  const editTodo = (event, id) => {
    event.preventDefault();
    const data = todos.map((todo) => {
      if (todo.id === id) {
        todo.task = event.target[0].value;
        todo.isEditing = !todo.isEditing;
      }
    });
    setTodos(data);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleComplete,
        deleteTodo,
        toggleEditing,
        editTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;

export { TodoContextProvider };
