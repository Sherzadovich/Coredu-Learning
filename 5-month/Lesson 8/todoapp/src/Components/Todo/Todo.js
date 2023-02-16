import React from 'react'

export default function Todo({ task, id, isEditing, isCompleted}) {
  return (
    <div style={{border: "1px solid black", width: "300px", display: "inline-block", marginTop: "30px", padding: "20px"}}>
        <input type="checkbox"/>
        <h2>{task}</h2>
        <button>Edit</button>
        <button>Delete</button>
    </div>
  )
}
