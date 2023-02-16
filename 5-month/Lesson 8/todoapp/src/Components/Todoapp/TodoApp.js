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

    // function deleteTodo(id) {
    //     const isAccepted = confirm("Do you want to delete this!");
    //     if(isAccepted) {
    //         const newArray = [];
    //         todos.forEach(item => {
    //             if(item.id !== id) {
    //                 newArray.push(item);
    //             }
    //             todos = newArray;
    //         })
    //     }
    // }

  return (
    <>
    <TodoForm addTodo={addTodo} />
    <TodoList todos={ todos }/>
    </>
  )
}
