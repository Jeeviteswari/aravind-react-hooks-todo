import React from 'react'
import "./App.css"

const Todolist = ({todoslist, onDelete}) => {
  return (
    <>
      <ul className="unordered-list">
        {todoslist.map((todo, index) => (
          <li key={index} className="list-item">
          <input type="checkbox" />
            <p>{todo}</p>
            <button className="delete-button" onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todolist
