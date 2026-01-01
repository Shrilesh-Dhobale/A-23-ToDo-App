import React from 'react'
import './App.css'
import './TaskCard'
import TaskCard from './TaskCard'
import { useState,useEffect } from 'react'


function App() {
  const [tasks,seTasks]=useState([
    
  ]);

  const [newTask, setNewTask]=useState("");

  useEffect(()=>{
    const savedTasks=JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks){
      seTasks(savedTasks);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks]);
  
  return (
    <div>
      <h1 className="title">To Do Application</h1>
      <p className="description">Manage your task efficiently with simple To Do App. No fluff, just productivity </p>
      <div className="input-container">
      <input
        type="text"
        className="task-input"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(e)=>
        {
          setNewTask(e.target.value)
        }
        }
      />
      <button className="add-button"
      onClick={()=>{
        seTasks([newTask,...tasks]);
        setNewTask("");
      }}>Add Task</button>
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

