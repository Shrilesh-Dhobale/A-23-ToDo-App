import React from 'react'
import './App.css'
import TaskCard from './TaskCard'
import { useState,useEffect } from 'react'
import NoTask from './assets/notfound.jpg'

function App() {
  const [tasks,setTasks]=useState([]);

  const [newTask, setNewTask]=useState("");

  useEffect(()=>{
    const savedTasks=localStorage.getItem("tasks");
    if(savedTasks){
      setTasks(JSON.parse(savedTasks));
    }
  },[]);

  const savedTaskToLocalStorage=(tasks)=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  }

  const addTask=()=>{
    if(!newTask){
      alert("Task cannot be empty");
      return;
    }
    const updatedTasks=[...tasks,newTask];
    setTasks(updatedTasks);
    setNewTask("");
    savedTaskToLocalStorage(updatedTasks);
  };
  
  const deleteTask=(taskToDelete)=>{
    const updatedTasks=tasks.filter((task)=>task!==taskToDelete);
    setTasks(updatedTasks);
    savedTaskToLocalStorage(updatedTasks);
  }
  
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
      <button className="add-button" onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
      {tasks.map((task, index)=>{
        return <TaskCard
        key={index}
        task={task}
        deleteTask={deleteTask}/>
      })}
      </div>
      {tasks.length===0 && <div className="no-task-container">
        <img src={NoTask} alt="No Tasks" className="no-task-image"/>
        
      </div>}
    </div>
  )
}

export default App

