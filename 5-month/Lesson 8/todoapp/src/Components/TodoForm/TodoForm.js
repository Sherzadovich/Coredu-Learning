import React, { useState } from 'react'

function TodoForm({ addTodo }) {

    const [task, setTask] = useState("");

  return (
    <div style={{marginTop: "50px"}}>
        <input type="text" onChange={(e) => setTask(e.target.value)}/>
        <button onClick={() => addTodo(task)}>Add Todo</button>
    </div>
  )
}

export default TodoForm;
