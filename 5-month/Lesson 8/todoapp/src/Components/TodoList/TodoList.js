import React from 'react'
import Todo from '../Todo/Todo'

export default function TodoList({ todos }) {
  return (
    <>
        {
            todos.map(todo => {
                return <Todo 
                key={todo.id}
                task={todo.task}
                id={todo.id}
                isEditing={todo.isEditing}
                isCompleted={todo.isCompleted}
                />
            })
        }
    </>
  )
}
