import React from 'react'
import './App.css'
import './TaskCard'
import TaskCard from './TaskCard'
import { useState } from 'react'

function App() {
  const [tasks,seTasks]=useState([
    "Go to swiming",
    "Gym",
    "Eating",
    "Walking",
    "Studying"
  ]);
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
      <div className="task-list">
      {tasks.map((task, index)=>{
        return <TaskCard key={index} task={task}/>
      })}
      </div>
    </div>
  )
}

export default App

