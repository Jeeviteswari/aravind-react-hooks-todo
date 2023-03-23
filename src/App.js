import React, {useState} from 'react'
import Todolist from './Todolist'
import './App.css'

const App = () => {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([]);

  const onChangeSearchInput = event => {
    setTask(event.target.value);
  }

  const onSubmitAddButton = (event) => {
    event.preventDefault();
    console.log(task);

    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask('');
  }

  const onSubmitDeleteButton = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  }
  return (
    <>
      <center>
        <div className="todo-container">
          <h1 className="heading">THINGS TO DO</h1>
          <form onSubmit={onSubmitAddButton}>
            <input
              type="text"
              value={task}
              placeholder="Add New"
              className="add-new"
              onChange={onChangeSearchInput}
            />
            <input type="submit" value="Add" className="add-button" />
          </form>
          <Todolist todoslist={todos} onDelete={onSubmitDeleteButton}/>
        </div>
      </center>
    </>
  )
}

export default App
