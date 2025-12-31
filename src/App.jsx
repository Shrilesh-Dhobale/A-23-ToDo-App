import React from 'react'
import './App.css'

function App() {
  return (
    <div>
      <h1 className="title">To Do Application</h1>
      <p className="description">Manage your tasks efficiently</p>
      <div className="input-container">
      <input
        type="text"
        className="task-input"
        placeholder="Enter a new task"
      />
      <button className="add-button">Add Task</button>
      </div>
    </div>
  )
}

export default App

