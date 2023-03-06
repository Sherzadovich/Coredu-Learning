import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";
const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

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
  };
  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleComplete }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;

export { TodoContextProvider };
