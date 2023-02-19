import React, { useState } from 'react'
import { v4 as uuid } from "uuid"
import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList';

export default function TodoApp() {

  const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
        const todo = {
            id: uuid(),
            task,
            isEditing: false,
            isCompleted: false,
        };

        setTodos([...todos, todo]);
    }


  return (
    <>
    <TodoForm addTodo={addTodo} />
    <TodoList todos={ todos } />
    </>
  )
}
