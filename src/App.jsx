import { useState } from 'react'
import TaskCard from './TaskCard'

import './App.css'

function App() {
  
  const [tasks, setTasks] = useState([
    "Go for Gym",
    "Complete React Project",
    "Read a Book",
    "Grocery Shopping",
    "Plan Weekend Trip",
    "Go for Gym",
    "Complete React Project",
    "Read a Book",
    "Grocery Shopping",
    "Plan Weekend Trip"
    
  ])
  const [newTask, setNewTask] = useState("")

  return (
    <div className='home-container'>
      <h1 className="app-heading">To-Do Application</h1>
      <p className='app-subheading'>Manage your task efficiently with this simple ToDo App.
        <span className='highlighted-text'>No Stuff</span>, just pure productivity!
      </p>
      <div className="task-list">
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
      </div>
      <div className="input-section">
        <input 
          type="text" 
          className="task-input" 
          placeholder="Enter a new task..." 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button 
        className="add-task-button"
        onClick={() => {
          
            setTasks([...tasks, newTask])
            setNewTask("")
          
        }}
        >Add Task</button>
      </div>
    </div>
  )
}

export default App
