import React, { useState } from 'react'
// import '../styles/App.css'

const TodoList = (props) => {
  return (
    <ul className="child">
      {props.todos.map(e => <li><p>{e.text}</p>
        {!e.completed && (
            <button onClick={() => props.handleComplete(e.id)}>Complete</button>
          )}
        </li>
      )}
    </ul>
  )
}

export default TodoList